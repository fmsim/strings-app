// to use event handlers
"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Form() {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch("api/login", {
      method: "post",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/feed");
    } else {
      alert("log in failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg"
    >
      <div className="text-center">
        <h3 className="text-semibold text-white">Sign In</h3>
      </div>
      <div className="my-3">
        <hr />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-white">
          Username
        </label>
        <input
          className="p-3 border border-slate-700 rounded-lg"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          id="username"
          placeholder="Username"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          className="p-3 border border-slate-700 rounded-lg"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 p-3 bg-slate-900 text-white rounded-lg"
      >
        Sign In
      </button>
    </form>
  );
}

export default Form;
