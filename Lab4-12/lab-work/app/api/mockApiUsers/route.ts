import User from "@/types/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.MOCK_API_URL}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = await res.json();

    user.map((u : User) => (
        console.log(u.id)
    ))

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
