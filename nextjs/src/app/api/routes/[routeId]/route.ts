import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { routeId: string } }
) {
  const id = params.routeId;

  const apiUrl = process.env.API_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/routes/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return NextResponse.json(await response.json());
}
