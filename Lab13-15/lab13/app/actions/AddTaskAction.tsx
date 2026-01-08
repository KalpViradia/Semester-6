"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "../generated/prisma/client";

export async function AddTaskAction(formData: FormData) {
    try {
        const taskTitle = formData.get("TaskTitle") as string;
        const taskDescription = formData.get("TaskDescription") as string;
        const isCompleted = formData.get("IsCompleted") === "true";
        const userID = parseInt(formData.get("UserID") as string);

        // Validation
        if (!taskTitle || taskTitle.trim().length === 0) {
            return { success: false, message: "Task title is required" };
        }

        if (taskTitle.length > 100) {
            return { success: false, message: "Task title must be 100 characters or less" };
        }

        if (isNaN(userID)) {
            return { success: false, message: "Valid User ID is required" };
        }

        await prisma.tasks.create({
            data: {
                TaskTitle: taskTitle.trim(),
                TaskDescription: taskDescription?.trim() || null,
                IsCompleted: isCompleted,
                UserID: userID,
            },
        });

        revalidatePath(`/users/${userID}`);
        revalidatePath("/users");
        return { success: true };
    } catch (err: unknown) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2003") {
                return { success: false, message: "Invalid User ID" };
            }
        }
        return { success: false, message: "Failed to create task" };
    }
}
