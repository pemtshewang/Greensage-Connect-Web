import { MQTTServiceHandler } from "./mqtt.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const mqttService = new MQTTServiceHandler();
  const { topic, payload } = await request.json();
  console.log(topic, payload);
  try {
    await mqttService.handleMQTTMessage(topic, payload);
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ok" }, { status: 400 });
  }
}
