import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export default async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get('Authorization');

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.slice(7); // Remove "Bearer " from the token
    // Now 'token' contains the actual token value
    const isValid = await db.accessToken.findUnique({
      where: {
        token,
        createdAt: {
          gte: new Date(new Date().getTime() - 60 * 60 * 24 * 1000),
        },
      },
      select: {
        userId: true
      }
    });
    if (isValid) {
      const data = await db.controller.findMany({
        where: {
          userId: isValid.userId
        },
        select: {
          readings: {
            select: {
              Pressure: true,
              soilMoisture: true,
              temperature: true,
              humidity: true,
              recordedAt: true,
            }
          },
          waterScheduleRecords: {
            select: {
              startTime: true,
              endTime: true,
              repetitionDays: true
            }
          },
          HumidityThresholdRecord: {
            select: {
              recordedAt: true,
              value: true
            }
          },
          TemperatureThresholdRecord: {
            select: {
              recordedAt: true,
              value: true,
            }
          },
          soilMoistureThresholdRecords: {
            select: {
              recordedAt: true,
              value: true,
            }
          },
        }
      })
      console.log(data)
      return NextResponse.json(data);
    }
  }
  return NextResponse.json({
    message: "Not Authorization"
  }, { status: 401 });
}
