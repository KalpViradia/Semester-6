"use client"

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignupPage() {
    const router = useRouter();

    const handleSignUp = (e : FormEvent) => {
        e.preventDefault();

        router.push("/");
    }

  return (
    <div>
      <h2 className="mb-4 text-center">Signup</h2>

      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create password"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>

        <button className="btn btn-success w-100">Create Account</button>
      </form>

      <p className="text-center mt-3">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
