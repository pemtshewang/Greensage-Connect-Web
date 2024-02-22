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
        controllers: {
          select: {
            waterScheduleRecords: {
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
            soilMoistureThresholdRecords: {
              select: {
                value: true,
                recordedAt: true
              }
            },
            readings: {
              select: {
                recordedAt: true,
                Pressure: true,
                temperature: true,
                soilMoisture: true,
                humidity: true,
              }
            },
          }
        }
      }
    })
    console.log(userData);
    return NextResponse.json(userData);
  }
  return NextResponse.json({ message: "Not Authorized" }, { status: 401 })
}
