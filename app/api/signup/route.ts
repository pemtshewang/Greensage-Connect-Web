import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";

export async function POST(req: Request, res: Response) {
  const { username, password, email } = await req.json();
  const hashedPassword = await hashPassword(password);
  const user = await db.admin.create({
    data: {
      email: email,
      password: hashedPassword,
      username: username,
      isSuper: false,
    },
  });
  if (user) {
    return NextResponse.json(
      {
        username,
        password: hashedPassword,
        email,
      },
      { status: 201 }
    );
  }
  return NextResponse.json(
    {
      message: "There was an error while creating the user",
    },
    { status: 500 }
  );
}
