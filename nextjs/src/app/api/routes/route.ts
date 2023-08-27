import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const apiUrl = process.env.API_URL || "http://localhost:3000";

export async function GET() {
  const response = await fetch(`${apiUrl}/routes`, {
    next: {
      revalidate: 60, // tempo de cache em segundos
      tags: ["routes"], //revalidação de cache sob demanda
    },
  });
  return NextResponse.json(await response.json());
}

export async function POST(request: Request) {
  const response = await fetch(`${apiUrl}/routes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(await request.json()),
  });
  revalidateTag("routes");
  return NextResponse.json(await response.json());
}
