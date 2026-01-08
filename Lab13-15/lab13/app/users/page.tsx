import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';
import DeleteButton from '../ui/DeleteButton';
import { users } from '../generated/prisma/browser';

async function UserList() {
    const data = await prisma.users.findMany({
        include: {
            _count: {
                select: { tasks: true }
            }
        }
    });

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">User List</h1>
                <Link
                    href="/users/add"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add User
                </Link>
            </div>

            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-left">Name</th>
                        <th className="border px-4 py-2 text-center">Tasks</th>
                        <th className="border px-4 py-2">Detail</th>
                        <th className="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((u: any) => (
                        <tr key={u.UserID} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{u.UserName}</td>
                            <td className="border px-4 py-2 text-center">
                                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                    {u._count.tasks}
                                </span>
                            </td>
                            <td className="border px-4 py-2 text-center">
                                <Link
                                    href={`/users/${u.UserID}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Detail
                                </Link>
                            </td>
                            <td className="border px-4 py-2 text-center">
                                <DeleteButton id={u.UserID} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
