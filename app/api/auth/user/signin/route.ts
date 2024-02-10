import { checkPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = await db.user.findUnique({
    where: {
      username: username
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
      password: true,
    },
  });
  const broker = await db.mqtt_user.findUnique({
    where: {
      username: username
    },
  });
  const accessToken = await db.accessToken.findUnique({
    where: {
      userId: user?.id,
    },
  });
  const isPasswordCorrect = await checkPassword(password, user?.password as string);

  if (isPasswordCorrect) {
    // Remove password from user object
    if (user) {
      const modifiedUser = {
        ...user,
        brokerId: broker?.brokerId,
        brokerIp: broker?.brokerIp,
        brokerPort: broker?.brokerPort,
        accessToken: accessToken,
      }
      const userAny = modifiedUser as any;

      // Add expiration date one month from the current date
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1);

      userAny.expirationDate = expirationDate.toISOString();
      console.log(userAny);
      return NextResponse.json(userAny, {
        status: 200,
      });
    }
  }

  return NextResponse.json({ message: "Invalid username or password" }, {
    status: 401,
  });
}
