import { db } from "@/lib/db";
import { RowDataPacket } from "mysql2";
import User from "@/types/User";
import Link from "next/link";

type UserRow = User & RowDataPacket;

export default async function BankByIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const bankId = Number(id);

  if (Number.isNaN(bankId)) {
    return <h2 className="p-4 text-red-600">Invalid Bank ID</h2>;
  }

  const [rows] = await db.query<UserRow[]>(
    "SELECT * FROM user WHERE userId = ?",
    [bankId]
  );

  if (rows.length === 0) {
    return (
      <div className="p-4">
        <h2 className="text-red-600 text-xl">Record not found</h2>
        <Link href="/user" className="text-blue-600 underline">
          Back
        </Link>
      </div>
    );
  }

  const user = rows[0];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Details</h2>

      <p><b>ID:</b> {user.userId}</p>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Age:</b> {user.age}</p>

      <Link href="/mySqlUsers" className="text-blue-600 underline mt-4 block">
        ← Back to list
      </Link>
    </div>
  );
}