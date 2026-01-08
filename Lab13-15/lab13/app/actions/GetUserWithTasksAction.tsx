"use server";
import { prisma } from "@/lib/prisma";

export async function GetUserWithTasksAction(userId: number) {
    return prisma.users.findUnique({
        where: { UserID: userId },
        include: {
            tasks: true,
        },
    });
}
