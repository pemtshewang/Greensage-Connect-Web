import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export default async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");
  const authorizationHeader = request.headers.get('Authorization');

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.slice(7); // Remove "Bearer " from the token
    // Now 'token' contains the actual token value
    const isValid = await db.accessToken.findUnique({
      where: {
        token,
        createdAt: {
          gte: new Date(new Date().getTime() - 60 * 60 * 24 * 1000),
        },
      },
    });
    if (isValid) {
      switch (type) {
        case "readings":
          break;
      }
    }
  }
  return NextResponse.json({
    message: "Not Authorization"
  }, { status: 401 });
}
