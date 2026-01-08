"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "../generated/prisma/client";

export async function DeleteTaskAction(taskId: number, userId?: number) {
    try {
        await prisma.tasks.delete({
            where: { TaskID: taskId },
        });

        if (userId) {
            revalidatePath(`/users/${userId}`);
        }
        revalidatePath("/users");
        return { success: true };
    } catch (err: unknown) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                return { success: false, message: "Task not found" };
            }
        }
        return { success: false, message: "Failed to delete task" };
    }
}
