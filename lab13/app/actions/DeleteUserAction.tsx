"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function DeleteUserAction(id: number) {
    await prisma.users.delete({ where: { UserID: id } });
    revalidatePath("/users");
    redirect("/users");
}
export { DeleteUserAction };