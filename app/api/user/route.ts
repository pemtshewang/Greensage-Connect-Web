import { NextResponse } from "next/server"; import { hashPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";
import { initiateVerification, verifyNumber } from "@/utils/verify-sms";
import { getUser } from "@/lib/session";
import { generateBrokerId } from "./verify-user/emqx";

export async function POST(req: Request, res: Response) {
  const { username, password, cid, mobile, gewog, dzongkhag } = await req.json();
  const brokerId = generateBrokerId(username as string, mobile as string);
  const trimmedUser = {
    username: username.trim(),
    password: password.trim(),
    cid: cid.trim(),
    mobile: mobile.trim(),
    gewog: gewog.trim(),
    dzongkhag: dzongkhag.trim(),
    brokerId: brokerId,
    brokerIp: "192.168.0.163",
    brokerPort: 8083,
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
    const verificationIsSent = await initiateVerification(mobile);
    if (verificationIsSent) {
      return NextResponse.json(
        {
          id: user.id,
          message: `Verification code sent to ${mobile}`,
        },
        { status: 200 }
      );
    }
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
