import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/session";

export async function POST(request: NextRequest) {
  const user = await getUser();
  const credentials = await request.json();

  if (user) {
    const code = generateCode(credentials);
    return NextResponse.json(code);
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}

function generateCode(credentials: {
  ap: string;
  apPassword: string;
  brokerUrl: string;
  brokerPort: string;
  brokerPassword: string;
  brokerUsername: string;
  controllerBrokerId: string;
  userBrokerId: string;
  wifiSSID: string;
  wifiPassword: string;
}) {
  return `
    #include <WiFi.h>
    
    #include <WebSocketsServer.h>

    #include <PubSubClient.h>

    #include <Wire.h>

    #include "RTClib.h"

    #include <Preferences.h>

    #include <Adafruit_Sensor.h>

    #include <Adafruit_BME680.h>

    #include <Wire.h>

    #include <Adafruit_GFX.h>

    #include <Adafruit_SSD1306.h>

    #define SCREEN_WIDTH 128
    #define SCREEN_HEIGHT 64
    #define OLED_RESET -1
    #define SCREEN_ADDRESS 0x3C
    #define RELAY_ON LOW

    Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

    RTC_DS3231 rtc;
    WiFiClient espClient;
    PubSubClient client(espClient);
    WebSocketsServer webSocket = WebSocketsServer(80);
    Preferences prefs;
    Adafruit_BME680 bme;

    //---- Broker settings
    const char * mqtt_server = "${credentials.brokerUrl}";
    const char * mqtt_username = "${credentials.brokerUsername}";
    const char * mqtt_password = "${credentials.brokerPassword}";
    const int mqtt_port = 1883;
    static String controllerBrokerId = "${credentials.controllerBrokerId}";
    static String userBrokerId = "${credentials.userBrokerId}";
    unsigned long lastMqttPublishTime = 0;

    // pin config
    const int lightPin = 2; // make it low as default
    const int exFanPin = 4; // make it low as default
    const int soilMoisturePin = 34;
    const int waterValvePin = 13; // make it low as default
    const int rightVentilationRollerShutterPinUp = 12; // make it low as default
    const int rightVentilationRollerShutterPinDown = 14; // make it low as default
    const int leftVentilationRollerShutterPinUp = 27; // make it low as default
    const int leftVentilationRollerShutterPinDown = 26; // make it low as default
    // pin config

    const char * ssid = "${credentials.wifiSSID}";
    const char * password = "${credentials.wifiPassword}";

    const int dryValue = 850;
    const int wetValue = 200;
    bool isFanManuallyOn = false;
    bool isWaterValveManuallyOn = false;
    bool isWaterValveScheduled = false;
    bool rightRollerShutterManuallyOn = false;
    bool leftRollerShutterManuallyOn = false;

    // soil moisture conversion
    int getMoisturePercentage(int sensorValue) {
      return map(sensorValue, dryValue, wetValue, 0, 100);
    }

    void clearSlot(int slotNumber) {
      String slotKey = "slot" + String(slotNumber);
      prefs.begin(slotKey.c_str(), false);
      Serial.println("Slot " + String(slotNumber) + " cleared");
      prefs.clear();
      prefs.end();
    }

    void checkSlot(int slotNumber) {
      String slotKey = "slot" + String(slotNumber);
      prefs.begin(slotKey.c_str(), false);
      int repetitionDays = prefs.getInt("repetitionDays");
      String startTime = prefs.getString("start");
      String endTime = prefs.getString("end");
      prefs.end();

      DateTime now = rtc.now();
      int currentDay = now.dayOfTheWeek();
      char currentTimeStr[9];
      sprintf(currentTimeStr, "%02d:%02d", now.hour(), now.minute());

      bool isCurrentDayIncluded = repetitionDays & (1 << currentDay);
      if (isCurrentDayIncluded) {
        Serial.println("Current Included");
        if (startTime == String(currentTimeStr) && !isWaterValveScheduled) {
          // Perform actions for this slot
          Serial.println("Slot " + String(slotNumber) + " - Water valve is open");
          digitalWrite(waterValvePin, RELAY_ON);
          isWaterValveScheduled = true;
          // Additional actions for this slot if needed
        }
        if (String(currentTimeStr) == endTime && isWaterValveScheduled) {
          // Additional actions or cleanup for this slot
          Serial.println("Slot " + String(slotNumber) + " - Water valve is closed");
          digitalWrite(waterValvePin, !RELAY_ON);
          isWaterValveScheduled = false;
        }
      }
    }

    void storeScheduledDates(int slotNumber, String startTime, String endTime, int repetitionDays) {
      switch (slotNumber) {
      case 1:
        Serial.println("Slot 1 storing");
        prefs.begin("slot1", false);
        prefs.putString("start", startTime);
        prefs.putString("end", endTime);
        prefs.putInt("repetitionDays", repetitionDays);
        prefs.end();
        break;
      case 2:
        Serial.println("Slot 2 storing");
        prefs.begin("slot2", false);
        prefs.putString("start", startTime);
        prefs.putString("end", endTime);
        prefs.putInt("repetitionDays", repetitionDays);
        prefs.end();
        break;
      case 3:
        Serial.println("Slot 3 storing");
        prefs.begin("slot3", false);
        prefs.putString("start", startTime);
        prefs.putString("end", endTime);
        prefs.putInt("repetitionDays", repetitionDays);
        prefs.end();
        break;
      }
    }

    unsigned long lastReadingTime = 0;

    void handleMqttWSchedule(const String &slotNumber, const String& message){
        
        Serial.println(message);
        int firstDelimiterPos = message.indexOf('|');
        int secondDelimiterPos = message.indexOf('|', firstDelimiterPos + 1);
      
        const String startTime = message.substring(0,firstDelimiterPos);
        const String endTime = message.substring(firstDelimiterPos + 1, secondDelimiterPos);
        const String repetitionDaysStr = message.substring(secondDelimiterPos+1);

        int repetitionDays = repetitionDaysStr.toInt(); // Convert repetitionDaysStr to an integer

        Serial.println("Slot: " + slotNumber);
        Serial.println("Start Time: " + startTime);
        Serial.println("End Time: " + endTime);
        Serial.println(repetitionDays);
        // convert slotNumber to int
        storeScheduledDates(slotNumber.toInt(), startTime, endTime, repetitionDays);
    }

    void handleMqttThresholdSetter(const String &thresholdType, const String &thresholdValue){
        prefs.begin("my-app", false);
        if (thresholdType == "temperature") {
          prefs.putFloat("temp", thresholdValue.toFloat());
        } else if (thresholdType == "humidity") {
          prefs.putFloat("hum", thresholdValue.toFloat());
        } else if (thresholdType == "soilMoisture") {
          prefs.putFloat("soil", thresholdValue.toFloat());
        }
        prefs.end();
    }

    void handleDeviceControl(const String &topic,
      const String &message) {
      Serial.println("The topic is: ");
      Serial.println(topic);
      if (topic == "light") {
        digitalWrite(lightPin, (message == "on") ? RELAY_ON : !RELAY_ON);
      } else if (topic == "ventilationFan") {
        Serial.println("Ventilation fan is " + message);
        isFanManuallyOn = message == "on";
        digitalWrite(exFanPin, (message == "on") ? !RELAY_ON : RELAY_ON);
      } else if (topic == "waterValve") {
        Serial.println("Water valve is " + message);
        isWaterValveManuallyOn = message == "open";
        if (message == "open") {
          digitalWrite(waterValvePin, RELAY_ON);
          Serial.println("Water valve is open");
        } else {
          digitalWrite(waterValvePin, !RELAY_ON);
          Serial.println("Water valve is closed");
        }
      } else if (topic == "schedule") {
        int firstDelimiterPos = message.indexOf('|');
        int secondDelimiterPos = message.indexOf('|', firstDelimiterPos + 1);
        int thirdDelimiterPos = message.indexOf('|', secondDelimiterPos + 1);

        String slotNumber = message.substring(0, firstDelimiterPos);
        String startTime = message.substring(firstDelimiterPos + 1, secondDelimiterPos);
        String endTime = message.substring(secondDelimiterPos + 1, thirdDelimiterPos);
        String repetitionDaysStr = message.substring(thirdDelimiterPos + 1);

        // Extracting values for the last part (repetitionDays)
        int lastDelimiterPos = repetitionDaysStr.indexOf('|');
        if (lastDelimiterPos != -1) {
          repetitionDaysStr = repetitionDaysStr.substring(0, lastDelimiterPos);
        }
        int repetitionDays = repetitionDaysStr.toInt(); // Convert repetitionDaysStr to an integer

        Serial.println("Slot: " + slotNumber);
        Serial.println("Start Time: " + startTime);
        Serial.println("End Time: " + endTime);
        Serial.println("Repetition Days: " + repetitionDays);
        // convert slotNumber to int
        storeScheduledDates(slotNumber.toInt(), startTime, endTime, repetitionDays);
      } else if (topic == "scheduleClear") {
        clearSlot(message.toInt());
      } else if (topic == "rollerShutterLeft") {
        Serial.println("Left roller shutter is " + message);
        if (message == "up") {
          Serial.println("Left roller shutter up");
          leftRollerShutterManuallyOn = true;
          digitalWrite(leftVentilationRollerShutterPinUp, RELAY_ON);
          digitalWrite(leftVentilationRollerShutterPinDown, !RELAY_ON);
        } else if (message == "down") {
          Serial.println("Left roller shutter down");
          leftRollerShutterManuallyOn = false;
          digitalWrite(leftVentilationRollerShutterPinUp, !RELAY_ON);
          digitalWrite(leftVentilationRollerShutterPinDown, RELAY_ON);
        }
      } else if (topic == "rollerShutterRight") {
        if (message == "up") {
          rightRollerShutterManuallyOn = true;
          Serial.println("Right roller shutter up");
          digitalWrite(rightVentilationRollerShutterPinUp, RELAY_ON);
          digitalWrite(rightVentilationRollerShutterPinDown, !RELAY_ON);
        } else if (message == "down") {
          rightRollerShutterManuallyOn = false;
          Serial.println("Right roller shutter down");
          digitalWrite(rightVentilationRollerShutterPinUp, !RELAY_ON);
          digitalWrite(rightVentilationRollerShutterPinDown, RELAY_ON);
        }
      }
    }

    int extractMainTopicIndex(String str){
       int firstSlashPos = str.indexOf("/"); // Find the position of the first "/"
       if (firstSlashPos != -1) {
         int secondSlashPos = str.indexOf("/", firstSlashPos + 1); // Find the position of the second "/"
         if (secondSlashPos != -1) {
          int thirdPos = str.indexOf("/", secondSlashPos + 1); // Find the position of the second "/"
          return thirdPos;
         }
       }
    }
    
    void callback(char * topic, byte * payload, unsigned int length) {
      String receivedTopic = String(topic);
      String receivedPayload;
      for (int i = 0; i < length; i++) {
        receivedPayload += (char) payload[i];
      }
      int lastSlashIndex = extractMainTopicIndex(receivedTopic);
      const String modifiedTopic = receivedTopic.substring(lastSlashIndex+1);
      Serial.println("Received mtopic: " + modifiedTopic);
      const int firstSlashPosition = modifiedTopic.indexOf("/");
      const String identifier = modifiedTopic.substring(0,firstSlashPosition);
      Serial.println("Received identifier: " + identifier);
      const String extractedTopic = modifiedTopic.substring(firstSlashPosition+1);
      if(identifier=="actuator"){
        handleDeviceControl(extractedTopic,receivedPayload);
      }else if(identifier == "wschedule"){
        handleMqttWSchedule(extractedTopic, receivedPayload); 
      }else if(identifier == "threshold"){
        handleMqttThresholdSetter(extractedTopic,receivedPayload);
      }
    }
    

    void onWebSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
      if (type == WStype_CONNECTED) {
        Serial.println("Connected to WebSocket");
      } else if (type == WStype_TEXT) {
        if (length > 0) {
          String message = (char * ) payload;
          if (message == "ping") {
            // Respond to 'ping' with 'pong'
            webSocket.sendTXT(num, "pong");
            // if the message recieved starts from "threshold:" then update the threshold valueh
          } else if (message.startsWith("threshold:")) {
            // the message will be threshold:temperature:value
            String thresholdType = message.substring(message.indexOf(':') + 1, message.lastIndexOf(':'));
            float thresholdValue = message.substring(message.lastIndexOf(':') + 1).toFloat();
            prefs.begin("my-app", false);
            if (thresholdType == "temperature") {
              prefs.putFloat("temp", thresholdValue);
            } else if (thresholdType == "humidity") {
              prefs.putFloat("hum", thresholdValue);
            } else if (thresholdType == "soilMoisture") {
              prefs.putFloat("soil", thresholdValue);
            }
            prefs.end();
          } else if (message.startsWith("scheduleClear|")) {
            // the message will be scheduleClear|slotNumber
            String slotNumber = message.substring(14); // Skip "scheduleClear|"
            clearSlot(slotNumber.toInt());
          } else if (message.startsWith("schedule|")) {
            String scheduleInfo = message.substring(9); // Skip "schedule|"
            int firstDelimiterPos = scheduleInfo.indexOf('|');
            int secondDelimiterPos = scheduleInfo.indexOf('|', firstDelimiterPos + 1);
            int thirdDelimiterPos = scheduleInfo.indexOf('|', secondDelimiterPos + 1);

            String slotNumber = scheduleInfo.substring(0, firstDelimiterPos);
            String startTime = scheduleInfo.substring(firstDelimiterPos + 1, secondDelimiterPos);
            String endTime = scheduleInfo.substring(secondDelimiterPos + 1, thirdDelimiterPos);
            String repetitionDaysStr = scheduleInfo.substring(thirdDelimiterPos + 1);

            int repetitionDays = repetitionDaysStr.toInt(); // Convert repetitionDaysStr to an integer

            Serial.println("Slot: " + slotNumber);
            Serial.println("Start Time: " + startTime);
            Serial.println("End Time: " + endTime);
            Serial.println("Repetition Days: " + repetitionDays);
            // convert slotNumber to int
            storeScheduledDates(slotNumber.toInt(), startTime, endTime, repetitionDays);
          } else {
            String device = message.substring(0, message.indexOf(':'));
            String action = message.substring(message.indexOf(':') + 1);
            String topic = device;
            handleDeviceControl(topic, action);
          }
        }
      }
    }

    void reconnect() {
      // Loop until we’re reconnected
      while (!client.connected()) {
        Serial.print("Attempting MQTT connection… ");
        String clientId = "ESP32Client";
        // Attempt to connect
        if (client.connect(clientId.c_str(), mqtt_username, mqtt_password)) {
          display.println();
          display.println("Connected to MQTT");
          display.display();
          Serial.println("connected!");
          // subscribe to every topic
          client.subscribe(("user/"+userBrokerId+"/#").c_str());
        } else {
          Serial.print("failed, rc = ");
          Serial.print(client.state());
          Serial.println(" try again in 5 seconds");
          // Wait 5 seconds before retrying
          delay(5000);
        }
      }
    }

    void setup() {
      Serial.begin(115200);
      pinMode(lightPin, OUTPUT);
      pinMode(exFanPin, OUTPUT);
      pinMode(waterValvePin, OUTPUT);
      pinMode(rightVentilationRollerShutterPinUp, OUTPUT);
      pinMode(rightVentilationRollerShutterPinDown, OUTPUT);
      pinMode(leftVentilationRollerShutterPinUp, OUTPUT);
      pinMode(leftVentilationRollerShutterPinDown, OUTPUT);
      pinMode(soilMoisturePin, INPUT);
      digitalWrite(lightPin, !RELAY_ON);
      digitalWrite(exFanPin, RELAY_ON);
      digitalWrite(waterValvePin, !RELAY_ON);
      digitalWrite(rightVentilationRollerShutterPinUp, !RELAY_ON);
      digitalWrite(rightVentilationRollerShutterPinDown, !RELAY_ON);
      digitalWrite(leftVentilationRollerShutterPinUp, !RELAY_ON);
      digitalWrite(leftVentilationRollerShutterPinDown, !RELAY_ON);

      if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
        Serial.println(F("SSD1306 allocation failed"));
        for (;;);
      }
      display.display(); // Initialize with an empty display

      delay(2000); // Pause for 2 seconds
      display.clearDisplay();
      
      if (!rtc.begin()) {
        Serial.println("Could not find RTC! Check circuit.");
        while (1)
        ;
      }

      if (rtc.lostPower()) {
        Serial.println("RTC lost power, lets set the time!");
        // following line sets the RTC to the date & time this sketch was compiled
        rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
      }
      if (!bme.begin()) {
        Serial.println("Could not find a valid BME680 sensor, check wiring!");
        while (1);
      }
      prefs.begin("my-app", false);
      static float defaultThreshold = 25.0;
      prefs.putFloat("temp", defaultThreshold);
      randomSeed(micros());
      WiFi.mode(WIFI_STA);
      WiFi.begin(ssid, password);
      while (WiFi.status() != WL_CONNECTED) {
        Serial.println("Connecting to wifi.....");
        delay(1000);
      }
      display.setTextSize(1);
      display.setTextColor(SSD1306_WHITE);
      display.setCursor(0, 0);
      display.println(F("localIP:"));
      display.print(WiFi.localIP());
      WiFi.softAP("${credentials.ap}", "${credentials.apPassword}");
      display.println();
      display.println("AP IP address: ");
      display.print(WiFi.softAPIP());
      display.display();

      webSocket.begin();
      webSocket.onEvent(onWebSocketEvent);
      // only for mqtts
      // espClient.setCACert(root_ca);

      client.setServer(mqtt_server, mqtt_port);
      client.setCallback(callback);

      prefs.end();
      delay(500);
    }

    void loop() {
      if (!client.connected())
        reconnect();
      client.loop();
      webSocket.loop();
      prefs.begin("my-app", false);
      float tempThreshold = prefs.getFloat("temp");
      float humThreshold = prefs.getFloat("hum");
      prefs.end();
      Serial.println(tempThreshold);
      Serial.println(humThreshold);

      for (int i = 1; i <= 3; i++) {
        checkSlot(i);
        // You can add delays or other handling if needed between checking slots
        delay(100); // Example delay between slot checks
      }

      Serial.println("------");
      float temperature = bme.readTemperature();
      float humidity = bme.readHumidity();
      Serial.println(temperature);
      Serial.println(humidity);
      

      if (temperature > tempThreshold && !isnan(temperature)) {
        Serial.println("Temperature is greater than threshold");
        digitalWrite(exFanPin, RELAY_ON);
        digitalWrite(rightVentilationRollerShutterPinUp, RELAY_ON);
        digitalWrite(leftVentilationRollerShutterPinUp, RELAY_ON);
        digitalWrite(rightVentilationRollerShutterPinDown, !RELAY_ON);
        digitalWrite(leftVentilationRollerShutterPinDown, !RELAY_ON);
      }
      
      if (humidity > humThreshold && !isnan(humidity)) {
        Serial.println("Humidity is greater than threshold");
        digitalWrite(exFanPin, RELAY_ON);
        digitalWrite(rightVentilationRollerShutterPinUp, RELAY_ON);
        digitalWrite(leftVentilationRollerShutterPinUp, RELAY_ON);
        digitalWrite(rightVentilationRollerShutterPinDown, !RELAY_ON);
        digitalWrite(leftVentilationRollerShutterPinDown, !RELAY_ON);
      }

      if (temperature < tempThreshold || humidity < humThreshold) {
        if (!isFanManuallyOn) {
          digitalWrite(exFanPin, !RELAY_ON);
        }
        if (!leftRollerShutterManuallyOn) {
          digitalWrite(leftVentilationRollerShutterPinUp, !RELAY_ON);
          digitalWrite(leftVentilationRollerShutterPinDown, RELAY_ON);
        }
        if (!rightRollerShutterManuallyOn) {
          digitalWrite(rightVentilationRollerShutterPinUp, !RELAY_ON);
          digitalWrite(rightVentilationRollerShutterPinDown, RELAY_ON);
        }
      }

      unsigned long currentTime = millis();
      if (currentTime - lastReadingTime >= 0.5 * 60 * 1000 && webSocket.connectedClients() > 0) {
        // the readings are sent after 30secs from the current elapsed time
        int soilMoisture = getMoisturePercentage(analogRead(soilMoisturePin));
        if (!isnan(temperature) && !isnan(humidity && !isnan(soilMoisture))) {
          webSocket.broadcastTXT("temperature:" + String(temperature));
          webSocket.broadcastTXT("humidity:" + String(humidity));
          webSocket.broadcastTXT("soilMoisture:" + String(soilMoisture));
        } else {
          Serial.println("Failed to read from BME sensor!");
        }
        lastReadingTime = currentTime;
      }

      if (currentTime - lastMqttPublishTime >= 60 * 1000) {
        int soilMoisture = getMoisturePercentage(analogRead(soilMoisturePin));
        if (!isnan(temperature) && !isnan(humidity) && !isnan(soilMoisture)) {
          String mqttMessage = "temperature:" + String(temperature) +
            "|humidity:" + String(humidity) +
            "|soilMoisture:" + String(soilMoisture);
          client.publish(("user/"+userBrokerId+ "/" + controllerBrokerId + "/readings").c_str(), mqttMessage.c_str());
          lastMqttPublishTime = currentTime;
        } else {
          Serial.println("Failed to read from BME sensor!");
        }
      }
    }
  `;
}
