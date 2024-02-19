import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUser } from "@/lib/session";

export async function GET(request: NextRequest) {
  const user = await getUser();
  const id = request.nextUrl.searchParams.get('id');
  if (user) {
    const userData = await db.user.findUnique({
      where: {
        id: id as string
      },
      select: {
        WaterScheduleRecord: {
          select: {
            startTime: true,
            endTime: true,
            repetitionDays: true
          }
        },
        HumidityThresholdRecord: {
          select: {
            value: true,
            recordedAt: true
          }
        },
        TemperatureThresholdRecord: {
          select: {
            value: true,
            recordedAt: true
          }
        },
        SoilMoistureThresholdRecord: {
          select: {
            value: true,
            recordedAt: true
          }
        },
        Reading: {
          select: {
            recordedAt: true,
            Pressure: true,
            temperature: true,
            soilMoisture: true,
            humidity: true,
          }
        },
      }
    })
    return NextResponse.json(userData);
  }
  return NextResponse.json({ message: "Not Authorized" }, { status: 401 })
}
