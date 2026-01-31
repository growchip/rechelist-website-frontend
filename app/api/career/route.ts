import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { emailCareer } = body;

  try {
    const res = await fetch(
      `${process.env.SERVER_API_URL}/talktohr`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.API_KEY as string,
        },
        body: JSON.stringify({ emailCareer }),
      }
    );

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
