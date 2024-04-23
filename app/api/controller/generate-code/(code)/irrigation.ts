import { env } from "@/env";

export function generateIrrigationCode(credentials: {
  ap: string;
  apPassword: string;
  brokerPort: string;
  password: string;
  brokerUsername: string;
  controllerBrokerId: string;
  userBrokerId: string;
  wifiSSID: string;
  wifiPassword: string;
}) {
  return `
/** @file main.cpp
 * @brief This code is for an ESP32 device that controls a water irrigation system.
 * It includes functionality for controlling water valves and a motor using WebSocket and MQTT.
 * It also reads soil moisture data from a sensor and allows scheduling of irrigation events.
 * @author Pem Tshewang
 * @date 2024-04-23
 */

#include <WiFi.h>
#include <WebSocketsServer.h>
#include <PubSubClient.h>
#include <Wire.h>
#include "RTClib.h"
#include <Preferences.h>

#define SOILMOISTURE_PIN 34  // Pin for soil moisture sensor

// Define pins for water valves
const int waterValvePins[] = {2, 4, 5, 12, 13, 14, 27};
const int numValves = sizeof(waterValvePins) / sizeof(int);

const int motorPin = 26;  // Pin for controlling the motor

// WiFi and MQTT credentials
const char* ssid = ${credentials.wifiSSID};
const char* password = ${credentials.wifiPassword};
const char* mqtt_server = ${env.EMQX_CONNECT_URL};
const char* mqtt_username = ${credentials.brokerUsername};
const char* mqtt_password = ${credentials.password};
const int mqtt_port = ${credentials.brokerPort};

// MQTT broker IDs
static String controllerBrokerId = ${credentials.controllerBrokerId};
static String userBrokerId = ${credentials.userBrokerId};

WiFiClientSecure espClient;
PubSubClient mqtt_client(espClient);
WebSocketsServer webSocket = WebSocketsServer(80);
// rtc obj def
RTC_DS3231 rtc;
// for storage persist
Preferences prefs;


unsigned long lastMqttPublishTime = 0;

const char* ca_cert = R"EOF(
-----BEGIN CERTIFICATE-----
MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh
MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD
QTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT
MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j
b20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB
CSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97
nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt
43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P
T19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4
gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO
BgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR
TLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw
DQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr
hMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg
06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF
PnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls
YSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk
CAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=
-----END CERTIFICATE-----
)EOF";

// Soil moisture sensor calibration values
const int dryValue = 4095;  // Value for dry soil
const int wetValue = 1500;  // Value for wet soil

bool isValveScheduled[numValves] = {false};  // Keeps track of scheduled valves
DateTime scheduledStartTime[numValves];      // Start time for each valve
DateTime scheduledEndTime[numValves];        // End time for each valve

void setup() {
  Serial.begin(115200);

  // Initialize water valve and motor pins
  for (int i = 0; i < numValves; i++) {
    pinMode(waterValvePins[i], OUTPUT);
    digitalWrite(waterValvePins[i], HIGH);  // Close all valves initially
  }
  pinMode(motorPin, OUTPUT);
  digitalWrite(motorPin, LOW);

  // Initialize WiFi and MQTT
  WiFi.begin(ssid, password);
  
  espClient.setCACert(ca_cert);
  mqtt_client.setKeepAlive(120);
  mqtt_client.setServer(mqtt_server, mqtt_port);
  mqtt_client.setCallback(callback);

  // Initialize RTC and Preferences
  if (!rtc.begin()) {
    Serial.println("Could not find RTC!");
  }
  rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  prefs.begin("irrigation_system", false);
  
  Serial.println("Connected WiFi address: ");
  Serial.println(WiFi.localIP());
  WiFi.softAP("${credentials.ap}", "${credentials.apPassword}");
  Serial.println("AP IP address: ");
  Serial.print(WiFi.softAPIP());

  // WebSocket setup
  webSocket.begin();
  webSocket.onEvent(onWebSocketEvent);
}

void loop() {
  if (!mqtt_client.connected()) {
    reconnect();
  }
  mqtt_client.loop();
  webSocket.loop();

  checkScheduledIrrigations();
  publishSensorData();
}

// Function to get soil moisture percentage from sensor value
int getMoisturePercentage(int sensorValue) {
  return map(sensorValue, dryValue, wetValue, 0, 100);
}

// Callback function for handling MQTT messages

void callback(char* topic, byte* payload, unsigned int length) {
  String receivedTopic = String(topic);
  String receivedPayload;
  for (int i = 0; i < length; i++) {
    receivedPayload += (char)payload[i];
  }

  int lastSlashIndex = extractMainTopicIndex(receivedTopic);
  const String modifiedTopic = receivedTopic.substring(lastSlashIndex + 1);
  const int firstSlashPosition = modifiedTopic.indexOf("/");
  const String identifier = modifiedTopic.substring(0, firstSlashPosition);
  const String extractedTopic = modifiedTopic.substring(firstSlashPosition + 1);

  if (identifier == "actuator") {
    if (extractedTopic == "valve") {
      String valveIndex = receivedPayload.substring(0, receivedPayload.indexOf(":"));
      String action = receivedPayload.substring(receivedPayload.indexOf(":") + 1);
      int valveNum = valveIndex.toInt();
      if (valveNum >= 0 && valveNum < numValves) {
        if (action == "open") {
          digitalWrite(waterValvePins[valveNum], LOW);
        } else if (action == "close") {
          digitalWrite(waterValvePins[valveNum], HIGH);
        }
      }
    } else if (extractedTopic == "motor") {
      if (receivedPayload == "on") {
        digitalWrite(motorPin, HIGH);
      } else if (receivedPayload == "off") {
        digitalWrite(motorPin, LOW);
      }
    }
  } else if (identifier == "schedule") {
    if (extractedTopic == "valve") {
      String valveIndex = receivedPayload.substring(0, receivedPayload.indexOf("|"));
      int valveNum = valveIndex.toInt();
      if (valveNum >= 0 && valveNum < numValves) {
        String startTime = receivedPayload.substring(receivedPayload.indexOf("|") + 1, receivedPayload.lastIndexOf("|"));
        String endTime = receivedPayload.substring(receivedPayload.lastIndexOf("|") + 1);
        scheduleValve(valveNum, startTime, endTime);
      }
    }
  }
}

// Callback function for handling WebSocket events
void onWebSocketEvent(uint8_t num, WStype_t type, uint8_t* payload, size_t length) {
  if (type == WStype_TEXT) {
    String message = (char*)payload;
    if (message.startsWith("valve:")) {
      String valveIndex = message.substring(6, message.indexOf(":"));
      String action = message.substring(message.indexOf(":") + 1);
      int valveNum = valveIndex.toInt();
      if (valveNum >= 0 && valveNum < numValves) {
        if (action == "open") {
          digitalWrite(waterValvePins[valveNum], LOW);
        } else if (action == "close") {
          digitalWrite(waterValvePins[valveNum], HIGH);
        }
      }
    } else if (message.startsWith("motor:")) {
      String action = message.substring(6);
      if (action == "on") {
        digitalWrite(motorPin, HIGH);
      } else if (action == "off") {
        digitalWrite(motorPin, LOW);
      }
    } else if (message.startsWith("schedule:")) {
      String scheduleInfo = message.substring(9);
      int delimiterPos = scheduleInfo.indexOf("|");
      String valveIndex = scheduleInfo.substring(0, delimiterPos);
      String startTime = scheduleInfo.substring(delimiterPos + 1, scheduleInfo.lastIndexOf("|"));
      String endTime = scheduleInfo.substring(scheduleInfo.lastIndexOf("|") + 1);
      int valveNum = valveIndex.toInt();
      if (valveNum >= 0 && valveNum < numValves) {
        scheduleValve(valveNum, startTime, endTime);
      }
    }
  }
}
// Function to extract the main topic index from a given string
int extractMainTopicIndex(String str) {
 int firstSlashPos = str.indexOf("/"); // Find the position of the first "/"
 if (firstSlashPos != -1) {
   int secondSlashPos = str.indexOf("/", firstSlashPos + 1); // Find the position of the second "/"
   if (secondSlashPos != -1) {
     int thirdPos = str.indexOf("/", secondSlashPos + 1); // Find the position of the third "/"
     return thirdPos;
   }
 }
 return -1;
}

// Function to schedule irrigation for a specific valve
void scheduleValve(int valveNum, String startTime, String endTime) {
 isValveScheduled[valveNum] = true;
 scheduledStartTime[valveNum] = DateTime(rtc.now().unixtime() + parseTimeString(startTime));
 scheduledEndTime[valveNum] = DateTime(rtc.now().unixtime() + parseTimeString(endTime));
}

// Function to parse time string in HH:MM format to seconds
unsigned long parseTimeString(String timeStr) {
 unsigned long hours = timeStr.substring(0, 2).toInt();
 unsigned long minutes = timeStr.substring(3, 5).toInt();
 return (hours * 3600UL) + (minutes * 60UL);
}

// Function to check and execute scheduled irrigation events
void checkScheduledIrrigations() {
 DateTime now = rtc.now();
 for (int i = 0; i < numValves; i++) {
   if (isValveScheduled[i]) {
     if (now >= scheduledStartTime[i] && now < scheduledEndTime[i]) {
       // Open valve
       digitalWrite(waterValvePins[i], LOW);
     } else if (now >= scheduledEndTime[i]) {
       // Close valve and clear schedule
       digitalWrite(waterValvePins[i], HIGH);
       isValveScheduled[i] = false;
     }
   }
 }
}

// Function to publish sensor data via MQTT
void publishSensorData() {
 unsigned long currentTime = millis();
 if (currentTime - lastMqttPublishTime >= 60000) {  // Publish every minute
   int soilMoisture = getMoisturePercentage(analogRead(SOILMOISTURE_PIN));
   if (!isnan(soilMoisture)) {
     String mqttMessage = "soilMoisture:" + String(soilMoisture);
     mqtt_client.publish(("user/" + userBrokerId + "/" + controllerBrokerId + "/readings").c_str(), mqttMessage.c_str());
     lastMqttPublishTime = currentTime;
   } else {
     Serial.println("Failed to read from soil moisture sensor!");
   }
 }
}

// Function to reconnect to MQTT broker if connection is lost
void reconnect() {
 // Loop until we're reconnected
 while (!mqtt_client.connected()) {
   Serial.print("Attempting MQTT connection... ");
   if (mqtt_client.connect("ESP32IrrigationClient", mqtt_username, mqtt_password)) {
     Serial.println("connected");
     // Subscribe to relevant topics
     mqtt_client.subscribe(("user/" + userBrokerId + "/" + controllerBrokerId + "/actuator/#").c_str());
     mqtt_client.subscribe(("user/" + userBrokerId + "/" + controllerBrokerId + "/schedule/#").c_str());
   } else {
     Serial.print("failed, rc=");
     Serial.print(mqtt_client.state());
     Serial.println(" try again in 5 seconds");
     delay(5000);
   }
 }
}
  `;
}
