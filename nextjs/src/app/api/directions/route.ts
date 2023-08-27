import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const originId = url.searchParams.get("originId");
  const destinationId = url.searchParams.get("destinationId");

  const apiUrl = process.env.API_URL || "http://localhost:3000";
  const response = await fetch(
    `${apiUrl}/directions?originId=${originId}&destinationId=${destinationId}`,
    {
      next: {
        revalidate: 60, // tempo de cache em segundos
      },
    }
  );
  return NextResponse.json(await response.json());
}
