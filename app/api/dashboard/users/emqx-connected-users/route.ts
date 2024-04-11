import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

const reqURL = `${env.EMQX_BASE_URL}/clients?_page=1&_limit=50`;
const getConnectedUsers = async () => {
  const res = await fetch(reqURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Basic " + btoa(`${env.EMQX_APP_ID}:${env.EMQX_APP_SECRET}`),
    },
    cache: "no-store",
  });
  const result = await res.json();
  console.log(result?.meta);
  return result?.meta?.count;
};

export async function GET(request: NextRequest) {
  const count = await getConnectedUsers();
  return NextResponse.json(count);
}
