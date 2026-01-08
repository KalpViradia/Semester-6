"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function AddUserAction(formData: FormData) {
    // console.log(formData)
    const UserName = formData.get("UserName") as string;
    const Password = formData.get("Password") as string;
    const data = { UserName, Password };
    await prisma.users.create({ data });
    revalidatePath("/users");
    redirect("/users")
}
export { AddUserAction }
