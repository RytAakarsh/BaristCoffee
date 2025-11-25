

// 'use client'

// import { useState, useEffect } from 'react'
// import { useToast } from '@/hooks/use-toast'

// export default function AdminDashboard({ token, onLogout }) {
//   const [feedback, setFeedback] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [filters, setFilters] = useState({
//     country: '',
//     stars: '',
//     startDate: '',
//     endDate: ''
//   })

//   const { toast } = useToast()
//   const itemsPerPage = 10
//   const API = process.env.NEXT_PUBLIC_API_URL

//   // Load feedback on filters change
//   useEffect(() => {
//     fetchFeedback()
//   }, [filters])

//   // Fetch feedback with filters applied
//   const fetchFeedback = async () => {
//     setIsLoading(true)
//     try {
//       const params = new URLSearchParams()
//       if (filters.country) params.append('country', filters.country)
//       if (filters.stars) params.append('stars', filters.stars)
//       if (filters.startDate) params.append('startDate', filters.startDate)
//       if (filters.endDate) params.append('endDate', filters.endDate)

//       const response = await fetch(`${API}/admin/feedbacks?${params}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })

//       if (response.ok) {
//         const data = await response.json()
//         setFeedback(data.feedbacks || [])
//         setCurrentPage(1)
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to load feedback',
//         variant: 'destructive'
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   // Export PDF — direct file download
//   const handleExport = async (format) => {
//     try {
//       const response = await fetch(`${API}/admin/export`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           format,
//           feedbackIds: feedback.map((f) => f.id) // IMPORTANT: use "id"
//         })
//       })

//       if (!response.ok) {
//         toast({
//           title: 'Export failed',
//           description: 'Server returned an error',
//           variant: 'destructive'
//         })
//         return
//       }

//       const blob = await response.blob()
//       const url = window.URL.createObjectURL(blob)

//       const a = document.createElement('a')
//       a.href = url
//       a.download = `feedback.${format}`
//       a.click()

//       window.URL.revokeObjectURL(url)
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to export',
//         variant: 'destructive'
//       })
//     }
//   }

//   // Pagination
//   const paginatedFeedback = feedback.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   )

//   const totalPages = Math.ceil(feedback.length / itemsPerPage)

//   const avgRating =
//     feedback.length > 0
//       ? (feedback.reduce((sum, f) => sum + f.stars, 0) / feedback.length).toFixed(1)
//       : 0

//   return (
//     <div className="min-h-screen bg-background">
      
//       {/* Header */}
//       <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-serif font-bold text-foreground">
//           Feedback Management
//         </h1>

//         <div className="flex gap-4">
//           <button
//             onClick={() => handleExport('pdf')}
//             className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
//           >
//             Export PDF
//           </button>

//           <button
//             onClick={onLogout}
//             className="px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       <div className="p-6 space-y-6">

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-card border border-border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Total Feedback</p>
//             <p className="text-3xl font-bold text-foreground mt-2">
//               {feedback.length}
//             </p>
//           </div>

//           <div className="bg-card border border-border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Average Rating</p>
//             <p className="text-3xl font-bold text-foreground mt-2">{avgRating}/5</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-card border border-border rounded-lg p-4">
//           <h3 className="font-semibold text-foreground mb-4">Filters</h3>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

//             <input
//               type="date"
//               value={filters.startDate}
//               onChange={(e) =>
//                 setFilters({ ...filters, startDate: e.target.value })
//               }
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             />

//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) =>
//                 setFilters({ ...filters, endDate: e.target.value })
//               }
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             />

//             <select
//               value={filters.country}
//               onChange={(e) =>
//                 setFilters({ ...filters, country: e.target.value })
//               }
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             >
//               <option value="">All countries</option>
//               <option value="India">India</option>
//               <option value="Brazil">Brazil</option>
//               <option value="United States">United States</option>
//               <option value="Mexico">Mexico</option>
//               <option value="United Kingdom">United Kingdom</option>
//             </select>

//             <select
//               value={filters.stars}
//               onChange={(e) =>
//                 setFilters({ ...filters, stars: e.target.value })
//               }
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             >
//               <option value="">All ratings</option>
//               <option value="5">5 stars</option>
//               <option value="4">4 stars</option>
//               <option value="3">3 stars</option>
//               <option value="2">2 stars</option>
//               <option value="1">1 star</option>
//             </select>

//           </div>
//         </div>

//         {/* Feedback Table */}
//         <div className="bg-card border border-border rounded-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">

//               <thead className="bg-secondary border-b border-border">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Date</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Rating</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Country</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Comments</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {paginatedFeedback.map((item) => (
//                   <tr key={item.id} className="border-b border-border">
                    
//                     <td className="px-4 py-3 text-sm text-foreground">
//                       {new Date(item.createdAt).toLocaleDateString()}
//                     </td>

//                     <td className="px-4 py-3 text-sm">
//                       <span className="text-lg">
//                         {'★'.repeat(item.stars)}
//                         {'☆'.repeat(5 - item.stars)}
//                       </span>
//                     </td>

//                     <td className="px-4 py-3 text-sm text-foreground">
//                       {item.country}
//                     </td>

//                     <td className="px-4 py-3 text-sm text-muted-foreground truncate max-w-xs">
//                       {item.comments || '—'}
//                     </td>

//                     <td className="px-4 py-3 text-sm">
//                       <button
//                         className="text-primary hover:underline"
//                         onClick={() => alert(`Full details for ${item.id}`)}
//                       >
//                         View
//                       </button>
//                     </td>

//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">

//             <button
//               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-2 text-sm border border-border rounded-lg"
//             >
//               Previous
//             </button>

//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`px-3 py-2 text-sm rounded-lg ${
//                   page === currentPage
//                     ? 'bg-primary text-primary-foreground'
//                     : 'border border-border hover:bg-secondary'
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}

//             <button
//               onClick={() =>
//                 setCurrentPage(Math.min(totalPages, currentPage + 1))
//               }
//               disabled={currentPage === totalPages}
//               className="px-3 py-2 text-sm border border-border rounded-lg"
//             >
//               Next
//             </button>

//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import { useToast } from '@/hooks/use-toast'

// // 📊 Recharts Imports (NEW)
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts'

// export default function AdminDashboard({ token, onLogout }) {
//   const [feedback, setFeedback] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [filters, setFilters] = useState({
//     country: '',
//     stars: '',
//     startDate: '',
//     endDate: ''
//   })

//   const { toast } = useToast()
//   const itemsPerPage = 10
//   const API = process.env.NEXT_PUBLIC_API_URL

//   useEffect(() => {
//     fetchFeedback()
//   }, [filters])

//   const fetchFeedback = async () => {
//     setIsLoading(true)
//     try {
//       const params = new URLSearchParams()
//       if (filters.country) params.append('country', filters.country)
//       if (filters.stars) params.append('stars', filters.stars)
//       if (filters.startDate) params.append('startDate', filters.startDate)
//       if (filters.endDate) params.append('endDate', filters.endDate)

//       const response = await fetch(`${API}/admin/feedbacks?${params}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })

//       if (response.ok) {
//         const data = await response.json()
//         setFeedback(data.feedbacks || [])
//         setCurrentPage(1)
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to load feedback',
//         variant: 'destructive',
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleExport = async (format) => {
//     try {
//       const response = await fetch(`${API}/admin/export`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           format,
//           feedbackIds: feedback.map((f) => f.id),
//         }),
//       })

//       if (!response.ok) {
//         toast({
//           title: 'Export failed',
//           description: 'Server returned an error',
//           variant: 'destructive',
//         })
//         return
//       }

//       const blob = await response.blob()
//       const url = window.URL.createObjectURL(blob)

//       const a = document.createElement('a')
//       a.href = url
//       a.download = `feedback.${format}`
//       a.click()

//       window.URL.revokeObjectURL(url)
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to export',
//         variant: 'destructive',
//       })
//     }
//   }

//   // Pagination
//   const paginatedFeedback = feedback.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   )

//   const totalPages = Math.ceil(feedback.length / itemsPerPage)

//   const avgRating =
//     feedback.length > 0
//       ? (feedback.reduce((sum, f) => sum + f.stars, 0) / feedback.length).toFixed(1)
//       : 0

//   // 📊 Prepare Graph Data
//   const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
//     star,
//     count: feedback.filter((f) => f.stars === star).length,
//   }))

//   const countryCounts = Object.values(
//     feedback.reduce((acc, f) => {
//       if (!acc[f.country]) acc[f.country] = { name: f.country, value: 0 }
//       acc[f.country].value++
//       return acc
//     }, {})
//   )

//   const COLORS = ['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#F4A460']

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-serif font-bold text-foreground">
//           Feedback Management
//         </h1>

//         <div className="flex gap-4">
//           <button
//             onClick={() => handleExport('pdf')}
//             className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
//           >
//             Export PDF
//           </button>

//           <button
//             onClick={onLogout}
//             className="px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       <div className="p-6 space-y-6">
        
//         {/* Stats — Your existing code */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-card border border-border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Total Feedback</p>
//             <p className="text-3xl font-bold text-foreground mt-2">{feedback.length}</p>
//           </div>

//           <div className="bg-card border border-border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Average Rating</p>
//             <p className="text-3xl font-bold text-foreground mt-2">{avgRating}/5</p>
//           </div>
//         </div>

//         {/* 📊 GRAPH SECTION — NEWLY ADDED */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
//           {/* Rating Distribution */}
//           <div className="bg-card border border-border rounded-lg p-4">
//             <h3 className="text-lg font-semibold mb-4">Rating Breakdown</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={ratingCounts}>
//                 <XAxis dataKey="star" tick={{ fontSize: 12 }} />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#8B4513" radius={[5, 5, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Country Chart */}
//           <div className="bg-card border border-border rounded-lg p-4">
//             <h3 className="text-lg font-semibold mb-4">Feedback by Country</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={countryCounts}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={100}
//                   label
//                 >
//                   {countryCounts.map((_, i) => (
//                     <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//         </div>

//         {/* Feedback Table — your existing code */}
//         {/* (not repeating for brevity) */}
//       </div>
//     </div>
//   )
// }

// app/admin/AdminDashboard.jsx  (or wherever your component lives)
"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AdminDashboard({ token, onLogout }) {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    country: "",
    stars: "",
    startDate: "",
    endDate: "",
  });

  const { toast } = useToast();
  const itemsPerPage = 10;
  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetchFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  // Helper to normalise id field (support id OR feedbackId)
  const idOf = (item) => item.id || item.feedbackId || item.feedback_id;

  const fetchFeedback = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.country) params.append("country", filters.country);
      if (filters.stars) params.append("stars", filters.stars);
      if (filters.startDate) params.append("startDate", filters.startDate);
      if (filters.endDate) params.append("endDate", filters.endDate);

      const res = await fetch(`${API}/admin/feedbacks?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch feedbacks");
      }

      const data = await res.json();
      setFeedback(data.feedbacks || data || []);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to load feedback",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Export PDF / DOCX - server returns file buffer directly
  const handleExport = async (format = "pdf") => {
    try {
      const res = await fetch(`${API}/admin/export`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          format,
          feedbackIds: feedback.map((f) => idOf(f)),
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Export failed:", res.status, text);
        toast({
          title: "Export failed",
          description: `Server returned ${res.status}`,
          variant: "destructive",
        });
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `feedback.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export error:", err);
      toast({
        title: "Error",
        description: "Failed to export",
        variant: "destructive",
      });
    }
  };

  // Pagination & derived values
  const paginatedFeedback = feedback.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.max(1, Math.ceil(feedback.length / itemsPerPage));
  const avgRating =
    feedback.length > 0
      ? (feedback.reduce((s, f) => s + (Number(f.stars) || 0), 0) / feedback.length).toFixed(1)
      : 0;

  // Graph data
  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star: `${star}★`,
    count: feedback.filter((f) => Number(f.stars) === star).length,
  }));

  const countryCounts = Object.values(
    feedback.reduce((acc, f) => {
      const name = f.country || "Unknown";
      if (!acc[name]) acc[name] = { name, value: 0 };
      acc[name].value++;
      return acc;
    }, {})
  );

  const COLORS = ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F4A460", "#C19A6B"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif font-bold text-foreground">Feedback Management</h1>

        <div className="flex gap-4">
          <button
            onClick={() => handleExport("pdf")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Export PDF
          </button>

          <button
            onClick={() => handleExport("docx")}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90"
          >
            Export DOCX
          </button>

          <button
            onClick={onLogout}
            className="px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Total Feedback</p>
            <p className="text-3xl font-bold text-foreground mt-2">{feedback.length}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Average Rating</p>
            <p className="text-3xl font-bold text-foreground mt-2">{avgRating}/5</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Showing</p>
            <p className="text-3xl font-bold text-foreground mt-2">
              {paginatedFeedback.length} / {feedback.length}
            </p>
          </div>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Rating Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ratingCounts}>
                <XAxis dataKey="star" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#8B4513" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Feedback by Country</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={countryCounts}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={90}
                  paddingAngle={4}
                  label={(entry) => `${entry.name} (${entry.value})`}
                >
                  {countryCounts.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            />
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            />
            <select
              value={filters.country}
              onChange={(e) => setFilters({ ...filters, country: e.target.value })}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            >
              <option value="">All countries</option>
              {Array.from(new Set(feedback.map((f) => f.country).filter(Boolean))).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              value={filters.stars}
              onChange={(e) => setFilters({ ...filters, stars: e.target.value })}
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            >
              <option value="">All ratings</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Rating</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Country</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Comments</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : paginatedFeedback.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-muted-foreground">
                      No feedback found
                    </td>
                  </tr>
                ) : (
                  paginatedFeedback.map((item) => (
                    <tr key={idOf(item)} className="border-b border-border">
                      <td className="px-4 py-3 text-sm text-foreground">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "-"}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="text-lg">
                          {"★".repeat(Number(item.stars) || 0)}
                          {"☆".repeat(5 - (Number(item.stars) || 0))}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground">{item.country || "—"}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground truncate max-w-xs">
                        {item.comments || "—"}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          className="text-primary hover:underline"
                          onClick={() => alert(JSON.stringify(item, null, 2))}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm border border-border rounded-lg"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm rounded-lg ${
                  page === currentPage ? "bg-primary text-primary-foreground" : "border border-border hover:bg-secondary"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm border border-border rounded-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

