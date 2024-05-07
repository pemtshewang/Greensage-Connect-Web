import { NextResponse } from "next/server";

import { db } from "@/lib/db";

interface Data {
  temperature: number;
  humidity: number;
  soilMoisture: number;
}

class MQTTServiceHandler {
  async handleMQTTMessage(topic: string, payload: string) {
    this.identifyTopics(topic, payload);
  }

  identifyTopics(topic: string, payload: string) {
    const [identifier, ...topicFormatted] = topic.split("/");

    switch (identifier) {
      case "user":
        this.handleUserMessage(topicFormatted, payload);
        break;
      default:
        break;
    }
  }

  private async handleUserMessage(topic: string[], payload: string) {
    const [userBrokerId, controllerId, actionIdentifier, ...action] = topic;
    console.log(userBrokerId, controllerId, actionIdentifier, action, payload);

    switch (actionIdentifier) {
      case "readings":
        console.log("updaing readings");
        const readings = payload.split("|");
        const readingData: Data = {
          temperature: 0,
          humidity: 0,
          soilMoisture: 0,
        };
        readings.forEach((item) => {
          const [identifier, value] = item.split(":");
          switch (identifier) {
            case "temperature":
              readingData.temperature = parseFloat(value);
              break;
            case "humidity":
              readingData.humidity = parseFloat(value);
              break;
            case "soilMoisture":
              readingData.soilMoisture = parseFloat(value);
              break;
          }
        });
        try {
          await db.reading.create({
            data: {
              controllerId: controllerId,
              soilMoisture: readingData.soilMoisture,
              temperature: readingData.temperature,
              humidity: readingData.humidity,
            },
          });
          console.log("successful", readingData);
        } catch (err) {
          console.log(err);
        }
        break;
      case "threshold":
        const type = action[0];
        const value = parseFloat(payload);

        switch (type) {
          case "temperature":
            await db.temperatureThresholdRecord.create({
              data: {
                controllerId,
                value,
              },
            });
            break;
          case "soilMoisture":
            await db.soilMoistureThresholdRecord.create({
              data: {
                controllerId,
                value,
              },
            });
            break;
          case "humidity":
            await db.humidityThresholdRecord.create({
              data: {
                controllerId,
                value,
              },
            });
            break;
        }
        break;
      case "wschedule":
        const [startTime, endTime, repetitionDays] = payload.split("|");
        await db.waterScheduleRecord.create({
          data: {
            controllerId,
            startTime,
            endTime,
            repetitionDays: Number(repetitionDays),
          },
        });
        break;
      default:
        break;
    }
  }
}

export async function POST(request: Request) {
  const mqttService = new MQTTServiceHandler();
  const { topic, payload } = await request.json();
  try {
    await mqttService.handleMQTTMessage(topic, payload);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ok" }, { status: 400 });
  }
}
