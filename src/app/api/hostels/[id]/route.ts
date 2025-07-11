// app/api/hostels/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { data } from "../mockData";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // const response = await fetch(`http://localhost:5000/api/hostels/${params.id}`);
    // const data = await response.json();
    return NextResponse.json({ hostel: data.hostels[0] });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch hostel" },
      { status: 500 }
    );
  }
}
