import { NextRequest, NextResponse } from "next/server";
import { fetchFromAPI } from "@/apis/get-apis";

type Params = Promise<{ slug: string }>;

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { slug } = await params;
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page") || 1);

  try {
    const data = await fetchFromAPI(`/categories/${slug}/posts`, {
      params: { page },
      // next: { revalidate: 3600 },
      next: { revalidate: 10 },
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
