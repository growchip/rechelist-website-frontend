import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, product, message } = body;

  try {
    const res = await fetch(`${process.env.SERVER_API_URL}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY as string,
      },
      body: JSON.stringify({ name, email, phone, product, message }),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
