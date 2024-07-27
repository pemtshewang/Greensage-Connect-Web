import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";
import { getUser } from "@/lib/session";
import { generateBrokerId } from "./verify-user/emqx";
import { env } from "@/env";

interface User {
  username: string;
  password: string;
  cid: string;
  mobile: string;
  gewog: string;
  dzongkhag: string;
  brokerId: string;
  brokerIp: string;
  brokerPort: number;
  posLat?: string;
  posLong?: string;
}
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const brokerId = generateBrokerId(
    form.get("username").toString().trim(),
    form.get("mobile").toString().trim(),
  );
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
    brokerIp: env.EMQX_BASE_URL,
    brokerPort: Number(env.EMQX_PORT),
  };

  if (lat && long) {
    trimmedUser.posLat = lat;
    trimmedUser.posLong = long;
  }
  const hashedPassword = await hashPassword(form.get("password").toString());
  // verify if the provided number is valid or not
  return NextResponse.json(
    {
      message: "There was an error while creating the user",
    },
    { status: 500 },
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
        { status: 500 },
      );
    }
    return NextResponse.json(
      {
        message: "User deleted successfully",
      },
      { status: 200 },
    );
  }
  return NextResponse.json(
    {
      message: "Operation unauthorized",
    },
    { status: 401 },
  );
}
