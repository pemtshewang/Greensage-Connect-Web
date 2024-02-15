import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUser } from "@/lib/session";

export async function POST(request: NextRequest) {
  const { userId } = await request.json();
  const userAuth = await getUser();
  if (userAuth) {
    const user = await db.user.findUnique({
      where: {
        id: userId
      },
      select: {
        username: true,
        password: true
      }
    });
    const mqttDetails = await db.mqtt_user.findUnique({
      where: {
        username: user?.username
      },
      select: {
        brokerId: true,
        brokerIp: true,
        brokerPort: true
      }
    });
    const reformedUser = {
      ...user,
      ...mqttDetails
    }
    return NextResponse.json(reformedUser);
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
}

