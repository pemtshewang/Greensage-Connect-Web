import { NextRequest, NextResponse } from "next/server";
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
interface User {
  username: string
  password: string
  cid: string
  mobile: string
  gewog: string
  dzongkhag: string
  brokerId: string
  brokerIp: string
  brokerPort: number
  posLat?: string
  posLong?: string
}
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const brokerId = generateBrokerId(form.get("username").toString().trim(), form.get("username").toString().trim());
  const lat = form.get("lat").toString();
  const long = form.get("long").toString();

  const trimmedUser: User = {
    username: form.get("username").toString().trim(),
    password: form.get("password").toString().trim(),
    cid: form.get("cid").toString().trim(),
    mobile: form.get("mobile").toString().trim(),
    gewog: form.get("gewog").toString().trim(),
    dzongkhag: form.get("dzongkhag").toString().trim(),
    brokerId: brokerId,
    brokerIp: "192.168.137.180",
    brokerPort: 8083,
  }

  if (lat && long) {
    trimmedUser.posLat = lat
    trimmedUser.posLong = long
    console.log(trimmedUser)
  }
  const hashedPassword = await hashPassword(form.get("password").toString());
  const user = await db.user.create({
    data: {
      ...trimmedUser,
      password: hashedPassword, // Use the hashed password
    },
  });
  const validNumber = await verifyNumber(form.get("mobile").toString());
  if (validNumber) {
    console.log("is valid")
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
    });
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

export async function DELETE(req: Request) {
  const userIsAuthenticated = await getUser();
  const { id } = await req.json();
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
