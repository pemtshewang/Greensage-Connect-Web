import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";
import { db } from "@/lib/db";
import { verifyCode } from "@/utils/verify-sms";

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
    console.log("User is", user);
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

function generateAccessToken() {
  return crypto.randomUUID()
}
