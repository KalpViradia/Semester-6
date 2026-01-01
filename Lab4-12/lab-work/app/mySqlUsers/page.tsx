import { RowDataPacket } from "mysql2";
import { db } from "@/lib/db";
import User from "@/types/User";
import Link from "next/link";

type UserRow = User & RowDataPacket;

export default async function BankPage() {
  const [rows] = await db.query<UserRow[]>(
    "SELECT * FROM user"
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bank List</h2>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.userId}>
              <td className="p-4">{row.userId}</td>
              <td className="p-4">{row.name}</td>
              <td className="p-4">{row.email}</td>
              <td className="p-4">{row.age}</td>
              <td>
                <Link
                  href={`/mySqlUsers/${row.userId}`}
                  className="text-blue-600 underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
