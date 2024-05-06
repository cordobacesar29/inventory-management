import { ItemType } from "@/constants/items.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data:ItemType = await request.json();
    console.log(data)
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a item",
      },
      {
        status: 500,
      }
    );
  }
}
