import { checkPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { env } from "@/env";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
      id: true,
      mobile: true,
      dzongkhag: true,
      gewog: true,
      greenhouseCount: true,
      irrigationCount: true,
      cid: true,
      brokerId: true,
      password: true,
      brokerPort: true,
      verifiedAt: true,
    },
  });
  const accessToken = await db.accessToken.findUnique({
    where: {
      userId: user?.id,
    },
  });
  const isPasswordCorrect = await checkPassword(
    password,
    user?.password as string,
  );
  if (user?.verifiedAt) {
    delete user["verifiedAt"];
    if (isPasswordCorrect) {
      if (user) {
        const modifiedUser = {
          ...user,
          brokerIp: 8883,
          accessToken: accessToken,
        };
        const userAny = modifiedUser as any;
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 1);
        userAny.expirationDate = expirationDate.toISOString();
        return NextResponse.json(userAny, {
          status: 200,
        });
      }
    }
  }

  return NextResponse.json(
    { message: "Invalid username or password" },
    {
      status: 401,
    },
  );
}
