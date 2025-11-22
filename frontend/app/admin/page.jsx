"use client";

import { useState } from "react";
import { adminLogin, getAllFeedbacks } from "@/lib/api";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [token, setToken] = useState("");

  async function handleLogin() {
    const res = await adminLogin(email, password);

    if (!res.ok) {
      alert("Invalid admin login");
      return;
    }

    setToken(res.token);

    const fb = await getAllFeedbacks(res.token);

    setFeedbacks(fb.feedbacks || []);
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Admin Login</h1>

      <div className="mt-6 space-y-3 max-w-sm">
        <input
          className="border p-2 rounded w-full"
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Admin Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      {/* Display feedback */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">All Feedback</h2>

        {feedbacks.map((fb) => (
          <div key={fb.feedbackId} className="border p-3 mb-2 rounded">
            ⭐ {fb.stars}  
            <br />
            {fb.comments}
          </div>
        ))}
      </div>
    </div>
  );
}
