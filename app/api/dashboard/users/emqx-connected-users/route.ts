import { NextRequest, NextResponse } from "next/server";

// const reqURL = `${process.env.EMQX_BASE_URL}/api/v5/clients?page=1&limit=50&node=emqx@127.0.0.1&`;
const getConnectedUsers = async () => {
  // const res = await fetch(reqURL, {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Authorization': 'Basic ' + btoa(`${process.env.EMQX_API_KEY}:${process.env.EMQX_API_SECRET}`)
  //   },
  //   cache: "no-store"
  // })
  // const result = await res.json();
  // console.log(result?.meta)
  // return result?.meta?.count;
  return 2;
};

export async function GET(request: NextRequest) {
  const count = await getConnectedUsers();
  return NextResponse.json(count);
}
