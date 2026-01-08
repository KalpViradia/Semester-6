"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "../generated/prisma/client";

export async function ChangePasswordAction(
    userId: number,
    currentPassword: string,
    newPassword: string
) {
    try {
        // Validation
        if (!currentPassword || !newPassword) {
            return { success: false, message: "All fields are required" };
        }

        if (newPassword.length < 6) {
            return { success: false, message: "New password must be at least 6 characters" };
        }

        if (newPassword.length > 50) {
            return { success: false, message: "New password must be 50 characters or less" };
        }

        // Get user and verify current password
        const user = await prisma.users.findUnique({
            where: { UserID: userId },
        });

        if (!user) {
            return { success: false, message: "User not found" };
        }

        // Note: In production, you should use proper password hashing (bcrypt, argon2, etc.)
        // For now, comparing plain text passwords as per the schema
        if (user.Password !== currentPassword) {
            return { success: false, message: "Current password is incorrect" };
        }

        // Update password
        await prisma.users.update({
            where: { UserID: userId },
            data: {
                Password: newPassword,
            },
        });

        revalidatePath(`/users/${userId}`);
        return { success: true };
    } catch (err: unknown) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                return { success: false, message: "User not found" };
            }
        }
        return { success: false, message: "Failed to change password" };
    }
}
