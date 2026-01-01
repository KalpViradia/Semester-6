"use client";
import React from "react";
import { AddUserAction } from "@/app/actions/AddUserAction";

function AddUser() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New User</h1>

      {/* Native form submission to server action */}
      <form action={AddUserAction} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">User Name</label>
          <input
            type="text"
            name="UserName"
            placeholder="Enter user name"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            maxLength={50}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Enter password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            maxLength={50}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
