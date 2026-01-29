import { NextRequest } from "next/server";
import { getStudentById, updateStudent, deleteStudent } from "../data";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const studentId = parseInt(id, 10);

  if (isNaN(studentId)) {
    return Response.json(
      { success: false, error: "Invalid student ID" },
      { status: 400 }
    );
  }

  const student = getStudentById(studentId);

  if (!student) {
    return Response.json(
      { success: false, error: "Student not found" },
      { status: 404 }
    );
  }

  return Response.json({ success: true, data: student });
}

export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const studentId = parseInt(id, 10);

  if (isNaN(studentId)) {
    return Response.json(
      { success: false, error: "Invalid student ID" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const { name, age, email, course } = body;

    if (!name && !age && !email && !course) {
      return Response.json(
        { success: false, error: "At least one field must be provided for update" },
        { status: 400 }
      );
    }

    const updatedStudent = updateStudent(studentId, { name, age, email, course });

    if (!updatedStudent) {
      return Response.json(
        { success: false, error: "Student not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch {
    return Response.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const studentId = parseInt(id, 10);

  if (isNaN(studentId)) {
    return Response.json(
      { success: false, error: "Invalid student ID" },
      { status: 400 }
    );
  }

  const deleted = deleteStudent(studentId);

  if (!deleted) {
    return Response.json(
      { success: false, error: "Student not found" },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
    message: "Student deleted successfully",
  });
}