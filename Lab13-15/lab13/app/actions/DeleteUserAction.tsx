"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "../generated/prisma/client";

export async function DeleteUserAction(id: number) {
  try {
    await prisma.users.delete({ where: { UserID: id } });
    revalidatePath("/users");
    return { success: true };
  } catch (err: unknown) {
    // Type-guard to check if it's a Prisma error
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2003") {
        return { success: false, message: "Cannot delete user because they have related tasks." };
      }
    }

    // If unknown, just return a generic error message
    return { success: false, message: "Failed to delete user." };
  }
}
