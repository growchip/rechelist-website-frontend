import { NextRequest, NextResponse } from "next/server";
import { fetchFromAPI } from "@/apis/get-apis";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page") || 1);

  try {
    const data = await fetchFromAPI(`/products`, {
      params: { page, per_page: 9 },
      // next: { revalidate: 600 },
      next: { revalidate: 10 },
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
