import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/utils/bcryptMgr";
import { db } from "@/lib/db";
import { generateBrokerId } from "./verify-user/emqx";
import { env } from "@/env";
import { Prisma } from "@prisma/client";
import { getUser } from "@/lib/session";

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
  registrantId: string;
  posLat?: string;
  posLong?: string;
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const registrantId = req.headers.get("registrantId")?.toString();

  if (!registrantId) {
    return NextResponse.json(
      { message: "Registrant ID is required" },
      { status: 400 },
    );
  }

  try {
    await db.$transaction(async (prisma) => {
      const validRegistrantToken = await prisma.registrantToken.findUnique({
        where: { token: registrantId },
      });

      if (!validRegistrantToken) {
        throw new Error("Invalid registrant token");
      }

      if (validRegistrantToken.hasUser) {
        throw new Error("Registrant token has already been used");
      }

      const brokerId = generateBrokerId(
        form.get("username")?.toString().trim() || "",
        form.get("mobile")?.toString().trim() || "",
      );

      const trimmedUser: User = {
        username: form.get("username")?.toString().trim() || "",
        password: await hashPassword(form.get("password")?.toString() || ""),
        cid: form.get("cid")?.toString().trim() || "",
        mobile: form.get("mobile")?.toString().trim() || "",
        gewog: form.get("gewog")?.toString().trim() || "",
        dzongkhag: form.get("dzongkhag")?.toString().trim() || "",
        brokerId: brokerId,
        brokerIp: env.EMQX_BASE_URL,
        brokerPort: Number(env.EMQX_PORT),
        registrantId: validRegistrantToken.token,
      };

      const lat = form.get("lat")?.toString();
      const long = form.get("long")?.toString();
      if (lat && long) {
        trimmedUser.posLat = lat;
        trimmedUser.posLong = long;
      }

      const savedUser = await prisma.user.create({
        data: trimmedUser,
      });

      await prisma.registrantToken.update({
        where: { token: registrantId },
        data: { hasUser: true },
      });

      return savedUser;
    });

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target = error.meta?.target as string[];
        if (target) {
          const field = target[0];
          let message = "";
          switch (field) {
            case "username":
              message = "Username is already taken";
              break;
            case "cid":
              message = "CID is already registered";
              break;
            case "mobile":
              message = "Mobile number is already in use";
              break;
            case "brokerId":
              message = "Broker ID is already assigned";
              break;
            default:
              message = `${field} already exists`;
          }
          return NextResponse.json({ message }, { status: 409 });
        }
      }
    }

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "An unexpected error occurred during registration" },
      { status: 500 },
    );
  }
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
