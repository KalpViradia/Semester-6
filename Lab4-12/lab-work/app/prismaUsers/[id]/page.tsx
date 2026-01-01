"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type User = {
  userId: number;
  name: string;
  email: string;
  age: number;
};

export default function UserDetails() {
  const params = useParams();
  const id = params.id as string;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`/api/prismaUsers/${id}`)
      .then(res => res.json())
      .then((data: User) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>
      <p><b>ID:</b> {user.userId}</p>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Age:</b> {user.age}</p>

      <a href={`/tasks/user/${user.userId}`}>
        View Tasks
      </a>
    </div>
  );
}
