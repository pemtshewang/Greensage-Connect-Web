import { MQTTServiceHandler } from "./mqtt.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const mqttService = new MQTTServiceHandler();
  const text = await request.text();
  const parseJson = JSON.parse(text);
  try {
    await mqttService.handleMQTTMessage(parseJson.topic, parseJson.payload);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ok" }, { status: 400 });
  }
}
