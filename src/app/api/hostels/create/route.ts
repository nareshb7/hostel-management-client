import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = req.body;
  console.log("body:::", payload);
  try {
    // MAKE AN API CALL
    const data = {
      ...payload,
      _id: new Date().getTime(),
    };
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to create a hostel" },
      { status: 400 }
    );
  }
}
