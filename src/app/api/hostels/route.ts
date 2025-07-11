// app/api/hostels/route.ts
import { NextRequest, NextResponse } from "next/server";
import { data } from "./mockData";

export async function GET(req: NextRequest) {
  const ownerId = req.nextUrl.searchParams.get("ownerId");

  if (!ownerId) {
    return NextResponse.json(
      { message: "ownerId is required" },
      { status: 400 }
    );
  }

  try {
    // const response = await fetch(
    //   `http://localhost:5000/api/hostels?ownerId=${ownerId}`,
    //   {
    //     method: "GET",
    //   }
    // );
    // const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to connect to backend" },
      { status: 400 }
    );
  }
}
