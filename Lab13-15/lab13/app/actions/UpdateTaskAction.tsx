"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "../generated/prisma/client";

export async function UpdateTaskAction(taskId: number, formData: FormData) {
    try {
        const taskTitle = formData.get("TaskTitle") as string;
        const taskDescription = formData.get("TaskDescription") as string;
        const isCompleted = formData.get("IsCompleted") === "true";

        // Validation
        if (!taskTitle || taskTitle.trim().length === 0) {
            return { success: false, message: "Task title is required" };
        }

        if (taskTitle.length > 100) {
            return { success: false, message: "Task title must be 100 characters or less" };
        }

        const task = await prisma.tasks.update({
            where: { TaskID: taskId },
            data: {
                TaskTitle: taskTitle.trim(),
                TaskDescription: taskDescription?.trim() || null,
                IsCompleted: isCompleted,
            },
        });

        if (task.UserID) {
            revalidatePath(`/users/${task.UserID}`);
        }
        revalidatePath("/users");
        return { success: true };
    } catch (err: unknown) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                return { success: false, message: "Task not found" };
            }
        }
        return { success: false, message: "Failed to update task" };
    }
}
