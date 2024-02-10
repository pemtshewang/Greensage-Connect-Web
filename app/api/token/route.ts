import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/db";
import getUser from "@/lib/session";

export async function GET(req: NextRequest, res: NextResponse) {
  const token = crypto.randomBytes(16).toString("hex");
  const user = await getUser();
  const admin = await db.admin.findUnique({
    where: {
      username: user.username,
    },
  });
  const createdToken = await db.token.create({
    data: {
      token,
      admin,
    },
  });
  if (createdToken) {
    return NextResponse.json(token);
  }
  return NextResponse.json({ message: "Token Creation Failed" }, { status: 500 });
};
