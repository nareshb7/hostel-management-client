// app/api/hostels/route.ts
import { NextRequest, NextResponse } from "next/server";

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
    const data = {
      hostels: [
        {
          _id: "xyz123",
          name: "Red View PG",
          address: { city: "Hyderabad", state: "Telangana" },
          roomCount: 15,
          tenantCount: 50,
        },
        {
          _id: "abc123",
          name: "Green View PG",
          address: { city: "Hyderabad", state: "Telangana" },
          roomCount: 10,
          tenantCount: 25,
        },
      ],
    };

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to connect to backend" },
      { status: 500 }
    );
  }
}
