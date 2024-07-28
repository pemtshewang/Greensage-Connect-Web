import { NextRequest, NextResponse } from "next/server";
import * as crypto from "crypto";
import { db } from "@/lib/db";
import { createEMQXUser } from "./emqx";
import { User } from "@prisma/client";

export async function PATCH(req: NextRequest) {
  try {
    const { registrantId } = await req.json();

    const validRegistrantToken = await db.registrantToken.findUnique({
      where: { token: registrantId },
      include: {
        User: true,
      },
    });

    if (!validRegistrantToken || validRegistrantToken.hasUser) {
      return NextResponse.json(
        { message: "Invalid or already used registrant token" },
        { status: 400 },
      );
    }

    // Since User is an array in the schema, we need to check the first user
    const user: User | undefined = validRegistrantToken.User[0];

    if (!user) {
      return NextResponse.json(
        { message: "User not found for this registrant token" },
        { status: 404 },
      );
    }

    const emqxResponse = await createEMQXUser({
      user_id: user.username, // Changed from user.user to user.username
      password: user.password,
      is_superuser: false,
    });

    if (!emqxResponse.success) {
      throw new Error("Failed to create EMQX user");
    }

    const [updatedUser, accessToken] = await Promise.all([
      db.user.update({
        where: { id: user.id },
        data: { verifiedAt: new Date() },
      }),
      db.accessToken.create({
        data: {
          token: generateAccessToken(),
          userId: user.id,
          expiresAt: setExpirationDate(),
        },
      }),
      db.registrantToken.update({
        where: { id: validRegistrantToken.id },
        data: { hasUser: true },
      }),
    ]);

    return NextResponse.json(
      {
        message: "Account Verification Successful",
        accessToken: accessToken.token,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error during account verification:", error);
    return NextResponse.json(
      { message: "There was an error while verifying the user" },
      { status: 500 },
    );
  }
}

// access token functionality
function generateAccessToken(): string {
  return crypto.randomUUID();
}

function setExpirationDate(): Date {
  const expirationDate = new Date();
  expirationDate.setMonth(expirationDate.getMonth() + 1);
  return expirationDate;
}
