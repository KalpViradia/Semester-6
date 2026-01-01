import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params.id)
    const id = (await params).id
    const res = await fetch(`${process.env.MOCK_API_URL}/${id}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = await res.json();

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user"},
      { status: 500 }
    );
  }
}
