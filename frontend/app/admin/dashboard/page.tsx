"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { useRouter } from "next/navigation";

export default function AdminDashboard({ token }) {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  const API = process.env.NEXT_PUBLIC_API_URL;
  const COLORS = ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F4A460", "#C19A6B"];

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const res = await fetch(`${API}/admin/feedbacks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setFeedback(data.feedbacks || []);
    } catch (err) {
      toast({ title: "Error", description: "Failed to load", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  // ⭐ Logout Fix: Redirect to live site
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("https://mvp.baristai.online/");
  };

  // --------- ANALYTICS ----------
  const avgRating = feedback.length
    ? (feedback.reduce((s, f) => s + Number(f.stars), 0) / feedback.length).toFixed(1)
    : 0;

  const ratingCounts = [5,4,3,2,1].map(star => ({
    star: `${star}★`,
    count: feedback.filter(f => Number(f.stars) === star).length
  }));

  const genderStats = ["Male", "Female", "Other"].map(type => ({
    name: type,
    value: feedback.filter(f => f.sex === type).length
  }));

  const ageGroups = [
    { label: "18–25", range: [18,25] },
    { label: "26–35", range: [26,35] },
    { label: "36–45", range: [36,45] },
    { label: "46–60", range: [46,60] },
    { label: "60+", range: [61,200] }
  ].map(({label,range}) => ({
    age: label,
    count: feedback.filter(f => {
      const age = new Date().getFullYear() - f.yearOfBirth;
      return age >= range[0] && age <= range[1];
    }).length
  }));

  const stateData = Object.entries(
    feedback.reduce((acc, f) => {
      if (f.country === "Brazil" && f.state) {
        acc[f.state] = (acc[f.state] || 0) + 1;
      }
      return acc;
    }, {})
  ).map(([name,value]) => ({ name, value }));

  // -------- EXPORT FUNCTIONS --------
  async function exportFile(type) {
    const res = await fetch(`${API}/admin/export`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ format: type, feedbackIds: feedback.map(f => f.id || f.feedbackId) }),
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `feedback.${type}`;
    a.click();
  }

  return (
    <div className="p-6 space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold">Analytics Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat title="Total Feedback" value={feedback.length} />
        <Stat title="Average Rating" value={avgRating} />
        <Stat title="Countries Count" value={new Set(feedback.map(f => f.country)).size} />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Chart title="Rating Breakdown">
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={ratingCounts}>
              <XAxis dataKey="star"/><YAxis/><Tooltip/>
              <Bar dataKey="count" fill="#8B4513"/>
            </BarChart>
          </ResponsiveContainer>
        </Chart>

        <Chart title="Gender Distribution">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie data={genderStats} dataKey="value" nameKey="name" label>
                {genderStats.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Chart>

        <Chart title="Age Groups">
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={ageGroups}>
              <XAxis dataKey="age"/><YAxis/><Tooltip/>
              <Bar dataKey="count" fill="#8B4513"/>
            </BarChart>
          </ResponsiveContainer>
        </Chart>

        <Chart title="% by Brazilian States">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie data={stateData} dataKey="value" nameKey="name" label>
                {stateData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Chart>
      </div>

      {/* EXPORT BUTTONS */}
      <div className="flex flex-wrap gap-4">
        <button onClick={() => exportFile("pdf")} className="px-4 py-2 bg-amber-900 text-white rounded-lg">
          Export PDF
        </button>
        <button onClick={() => exportFile("docx")} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
          Export DOCX
        </button>
      </div>

      {/* FEEDBACK TABLE */}
      <div className="overflow-x-auto border rounded-lg bg-white shadow p-4">
        <h2 className="text-lg font-semibold mb-3">All Feedback</h2>

        {isLoading ? (
          <p className="text-gray-400 text-center py-4">Loading...</p>
        ) : feedback.length === 0 ? (
          <p className="text-gray-400 text-center py-4">No data available</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <Th>Rating</Th><Th>Age</Th><Th>Sex</Th><Th>Country</Th><Th>State</Th><Th>Comments</Th>
              </tr>
            </thead>
            <tbody>
              {feedback.map(f => {
                const age = new Date().getFullYear() - f.yearOfBirth;
                return (
                  <tr key={f.id || f.feedbackId} className="border-b">
                    <Td>{f.stars} ★</Td>
                    <Td>{age}</Td>
                    <Td>{f.sex}</Td>
                    <Td>{f.country}</Td>
                    <Td>{f.state || "-"}</Td>
                    <Td>{f.comments || "-"}</Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const Stat = ({ title, value }) => (
  <div className="p-4 border rounded-lg bg-white shadow text-center">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

const Chart = ({ title, children }) => (
  <div className="p-4 border rounded-lg bg-white shadow">
    <h3 className="font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const Th = ({ children }) => (
  <th className="px-4 py-2 font-semibold text-left">{children}</th>
);

const Td = ({ children }) => (
  <td className="px-4 py-2 text-gray-700">{children}</td>
);
