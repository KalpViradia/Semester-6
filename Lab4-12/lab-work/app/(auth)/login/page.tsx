"use client"

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e : FormEvent) => {
        e.preventDefault();

        router.push("/");
    }

  return (
    <div>
      <h2 className="mb-4 text-center">Login</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>

      <p className="text-center mt-3">
        Don&apos;t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}
