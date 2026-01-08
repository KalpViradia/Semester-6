"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "../generated/prisma/client";

export async function ToggleTaskAction(taskId: number, userId?: number) {
    try {
        // First get the current task to toggle its status
        const currentTask = await prisma.tasks.findUnique({
            where: { TaskID: taskId },
        });

        if (!currentTask) {
            return { success: false, message: "Task not found" };
        }

        await prisma.tasks.update({
            where: { TaskID: taskId },
            data: {
                IsCompleted: !currentTask.IsCompleted,
            },
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
        return { success: false, message: "Failed to toggle task status" };
    }
}
