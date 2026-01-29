import { NextRequest } from "next/server";
import { getAllStudents, addStudent } from "./data";

export async function GET() {
  const students = getAllStudents();
  return Response.json({
    success: true,
    count: students.length,
    data: students,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, age, email, course } = body;
    if (!name || !age || !email || !course) {
      return Response.json(
        { success: false, error: "All fields (name, age, email, course) are required" },
        { status: 400 }
      );
    }

    const newStudent = addStudent({ name, age, email, course });
    
    return Response.json(
      { success: true, message: "Student created successfully", data: newStudent },
      { status: 201 }
    );
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}