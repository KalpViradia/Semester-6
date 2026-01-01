"use client";

import { useEffect, useState } from "react";

type User = {
  userId: number;
  userName: string;
  email: string;
  age: number;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/prismaUsers");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const searchUsers = async () => {
    if (!search.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/prismaUsers/search?name=${search}`);
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          User List
        </h1>

        {/* Search */}
        <div className="mb-6 flex gap-2">
          <input
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchUsers()}
          />
          <button
            onClick={searchUsers}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-500">
            No users found
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {users.map((user) => (
              <li
                key={user.userId}
                className="flex items-center justify-between py-3"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    Name: {user.userName}
                  </p>
                  <p className="text-sm text-gray-500">
                    Age: {user.age}
                  </p>
                </div>

                <a
                  href={`/users/${user.userId}`}
                  className="text-blue-600 hover:underline"
                >
                  View →
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
