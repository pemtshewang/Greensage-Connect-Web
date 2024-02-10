import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";
import { db } from "@/lib/db";
import { verifyCode } from "@/utils/verify-sms";
import { createEmqxUser } from "./emqx";
import { generateBrokerId } from "./emqx";

export async function PATCH(req: NextRequest, res: Response) {
  const { id, code, phoneNumber } = await req.json();
  console.log(id, code, phoneNumber)
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  const isVerified = await verifyCode(phoneNumber, code);
  if (isVerified) {
    await db.user.update({
      where: {
        id: id as string,
      },
      data: {
        verifiedAt: new Date(),
      },
    });
    await db.accessToken.create({
      data: {
        token: generateAccessToken(), // You need to implement a function to generate a secure token
        userId: id as string, // Associate the access token with the user
        expiresAt: expirationDate.toISOString(), // Set the expiration timestamp
      },
    });
    const user = await db.user.findUnique({
      where: {
        id: id as string,
      },
    });
    //create emqx username and password
    const emqxUserCreated = await createEmqxUser({
      username: user?.username as string,
      password: user?.password as string,
    })
    if (emqxUserCreated) {
      const brokerId = generateBrokerId(user?.username as string, user?.mobile as string);
      const createdBroker = await db.mqtt_user.create({
        data: {
          username: user?.username as string,
          password: user?.password as string,
          brokerId: brokerId,
          brokerIp: "10.42.0.1",
          brokerPort: 8083,
        }
      })
      console.log("broker created", createdBroker)
      if (createdBroker) {
        return NextResponse.json(
          {
            message: "User verified successfully, You may now login",
          },
          { status: 201 }
        );
      }
    }
    return NextResponse.json(
      {
        message: "There was an error while creating the user in the MQTT broker",
      },
      { status: 500 }
    );
  }
  return NextResponse.json(
    {
      message: "There was an error while verifying the user",
    },
    { status: 500 }
  );
}
// Example function to generate a secure access token
function generateAccessToken() {
  return crypto.randomUUID()
}
