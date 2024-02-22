import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";
import { verifyNumber } from "@/utils/verify-sms";
import { getUser } from "@/lib/session";
import { generateBrokerId } from "./verify-user/emqx";

function getRandomDigits(): number {
  const randomDigits = Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
  const formattedDigits = randomDigits.toString().padStart(6, '0'); // Ensure it's 6 digits long
  return Number(formattedDigits);
}

export async function POST(req: Request) {
  const { username, password, cid, mobile, gewog, dzongkhag, location } = await req.json();
  const brokerId = generateBrokerId(username as string, mobile as string);
  const trimmedUser = {
    username: username.trim(),
    password: password.trim(),
    cid: cid.trim(),
    mobile: mobile.trim(),
    gewog: gewog.trim(),
    dzongkhag: dzongkhag.trim(),
    brokerId: brokerId,
    brokerIp: "192.168.137.73",
    brokerPort: 8083,
  }
  if (location) {
    trimmedUser.posLat = location.latitude as string,
      trimmedUser.posLong = location.longitude as string
  }
  const hashedPassword = await hashPassword(password);
  const user = await db.user.create({
    data: {
      ...trimmedUser,
      password: hashedPassword, // Use the hashed password
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        message: "There was an error while creating the user",
      },
      { status: 500 }
    );
  }
  const validNumber = await verifyNumber(mobile);
  if (validNumber) {
    const randomDigits = getRandomDigits();
    const expirationTime = new Date(new Date().getTime() + 10 * 60000);
    await db.user.update({
      where: {
        id: user.id
      },
      data: {
        otp: randomDigits,
        otpExpiresAt: expirationTime
      }
    })
    return NextResponse.json({
      id: user.id,
      code: randomDigits
    }, { status: 200 });
  }
  return NextResponse.json(
    {
      message: "There was an error while creating the user",
    },
    { status: 500 }
  );
}
export async function DELETE(req: Request, res: Response) {
  const userIsAuthenticated = await getUser();
  const { id } = await req.json();
  console.log("delete id received", id);
  if (userIsAuthenticated) {
    const user = await db.user.delete({
      where: {
        id,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: "There was an error while deleting the user",
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        message: "User deleted successfully",
      },
      { status: 200 }
    );
  }
  return NextResponse.json({
    message: "Operation unauthorized",
  }, { status: 401 })
}
