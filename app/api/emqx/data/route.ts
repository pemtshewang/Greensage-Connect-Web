import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  return NextResponse.json({
    message: "success",
    id: id,
  });
}
