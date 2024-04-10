import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";
import { db } from "@/lib/db";

export async function PATCH(req: NextRequest) {
  const { id, code } = await req.json();
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  const otp = await db.user.findUnique({
    where: {
      id: id,
    },
    select: {
      otp: true,
      otpExpiresAt: true,
    },
  });
  const verified =
    otp?.otp === code && (otp?.otpExpiresAt as Date) >= new Date();
  if (verified) {
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
    return NextResponse.json(
      {
        message: "Account Verification Successful",
      },
      {
        status: 200,
      },
    );
  }
  return NextResponse.json(
    {
      message: "There was an error while verifying the user",
    },
    { status: 500 },
  );
}

function generateAccessToken() {
  return crypto.randomUUID();
}
