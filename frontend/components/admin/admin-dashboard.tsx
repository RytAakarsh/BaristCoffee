

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









// "use client";

// import { useState, useEffect } from "react";
// import { useToast } from "@/hooks/use-toast";

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
// } from "recharts";

// export default function AdminDashboard({ token, onLogout }) {
//   const [feedback, setFeedback] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     country: "",
//     stars: "",
//     startDate: "",
//     endDate: "",
//   });

//   const { toast } = useToast();
//   const itemsPerPage = 10;
//   const API = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     fetchFeedback();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [filters]);

//   // Helper to normalise id field (support id OR feedbackId)
//   const idOf = (item) => item.id || item.feedbackId || item.feedback_id;

//   const fetchFeedback = async () => {
//     setIsLoading(true);
//     try {
//       const params = new URLSearchParams();
//       if (filters.country) params.append("country", filters.country);
//       if (filters.stars) params.append("stars", filters.stars);
//       if (filters.startDate) params.append("startDate", filters.startDate);
//       if (filters.endDate) params.append("endDate", filters.endDate);

//       const res = await fetch(`${API}/admin/feedbacks?${params}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) {
//         throw new Error("Failed to fetch feedbacks");
//       }

//       const data = await res.json();
//       setFeedback(data.feedbacks || data || []);
//       setCurrentPage(1);
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error",
//         description: "Failed to load feedback",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Export PDF / DOCX - server returns file buffer directly
//   const handleExport = async (format = "pdf") => {
//     try {
//       const res = await fetch(`${API}/admin/export`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           format,
//           feedbackIds: feedback.map((f) => idOf(f)),
//         }),
//       });

//       if (!res.ok) {
//         const text = await res.text().catch(() => "");
//         console.error("Export failed:", res.status, text);
//         toast({
//           title: "Export failed",
//           description: `Server returned ${res.status}`,
//           variant: "destructive",
//         });
//         return;
//       }

//       const blob = await res.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `feedback.${format}`;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.error("Export error:", err);
//       toast({
//         title: "Error",
//         description: "Failed to export",
//         variant: "destructive",
//       });
//     }
//   };

//   // Pagination & derived values
//   const paginatedFeedback = feedback.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   const totalPages = Math.max(1, Math.ceil(feedback.length / itemsPerPage));
//   const avgRating =
//     feedback.length > 0
//       ? (feedback.reduce((s, f) => s + (Number(f.stars) || 0), 0) / feedback.length).toFixed(1)
//       : 0;

//   // Graph data
//   const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
//     star: `${star}★`,
//     count: feedback.filter((f) => Number(f.stars) === star).length,
//   }));

//   const countryCounts = Object.values(
//     feedback.reduce((acc, f) => {
//       const name = f.country || "Unknown";
//       if (!acc[name]) acc[name] = { name, value: 0 };
//       acc[name].value++;
//       return acc;
//     }, {})
//   );

//   const COLORS = ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F4A460", "#C19A6B"];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-serif font-bold text-foreground">Feedback Management</h1>

//         <div className="flex gap-4">
//           <button
//             onClick={() => handleExport("pdf")}
//             className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
//           >
//             Export PDF
//           </button>

//           <button
//             onClick={() => handleExport("docx")}
//             className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90"
//           >
//             Export DOCX
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
//             <p className="text-3xl font-bold text-foreground mt-2">{feedback.length}</p>
//           </div>

//           <div className="bg-card border border-border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Average Rating</p>
//             <p className="text-3xl font-bold text-foreground mt-2">{avgRating}/5</p>
//           </div>

//           <div className="bg-card border border-border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Showing</p>
//             <p className="text-3xl font-bold text-foreground mt-2">
//               {paginatedFeedback.length} / {feedback.length}
//             </p>
//           </div>
//         </div>

//         {/* Graphs */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-card border border-border rounded-lg p-4">
//             <h3 className="text-lg font-semibold mb-4">Rating Breakdown</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={ratingCounts}>
//                 <XAxis dataKey="star" tick={{ fontSize: 12 }} />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#8B4513" radius={[6, 6, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

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
//                   innerRadius={40}
//                   outerRadius={90}
//                   paddingAngle={4}
//                   label={(entry) => `${entry.name} (${entry.value})`}
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

//         {/* Filters */}
//         <div className="bg-card border border-border rounded-lg p-4">
//           <h3 className="font-semibold text-foreground mb-4">Filters</h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
//             <input
//               type="date"
//               value={filters.startDate}
//               onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             />
//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             />
//             <select
//               value={filters.country}
//               onChange={(e) => setFilters({ ...filters, country: e.target.value })}
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
//             >
//               <option value="">All countries</option>
//               {Array.from(new Set(feedback.map((f) => f.country).filter(Boolean))).map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={filters.stars}
//               onChange={(e) => setFilters({ ...filters, stars: e.target.value })}
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

//         {/* Table */}
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
//                 {isLoading ? (
//                   <tr>
//                     <td colSpan={5} className="p-6 text-center text-muted-foreground">
//                       Loading...
//                     </td>
//                   </tr>
//                 ) : paginatedFeedback.length === 0 ? (
//                   <tr>
//                     <td colSpan={5} className="p-6 text-center text-muted-foreground">
//                       No feedback found
//                     </td>
//                   </tr>
//                 ) : (
//                   paginatedFeedback.map((item) => (
//                     <tr key={idOf(item)} className="border-b border-border">
//                       <td className="px-4 py-3 text-sm text-foreground">
//                         {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "-"}
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <span className="text-lg">
//                           {"★".repeat(Number(item.stars) || 0)}
//                           {"☆".repeat(5 - (Number(item.stars) || 0))}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 text-sm text-foreground">{item.country || "—"}</td>
//                       <td className="px-4 py-3 text-sm text-muted-foreground truncate max-w-xs">
//                         {item.comments || "—"}
//                       </td>
//                       <td className="px-4 py-3 text-sm">
//                         <button
//                           className="text-primary hover:underline"
//                           onClick={() => alert(JSON.stringify(item, null, 2))}
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
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
//                   page === currentPage ? "bg-primary text-primary-foreground" : "border border-border hover:bg-secondary"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}

//             <button
//               onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//               disabled={currentPage === totalPages}
//               className="px-3 py-2 text-sm border border-border rounded-lg"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { useToast } from "@/hooks/use-toast";

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
// } from "recharts";

// export default function AdminDashboard({ token, onLogout }) {
//   const [feedback, setFeedback] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     country: "",
//     stars: "",
//     startDate: "",
//     endDate: "",
//   });

//   const { toast } = useToast();
//   const itemsPerPage = 10;
//   const API = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     fetchFeedback();
//   }, [filters]);

//   const idOf = (item) => item.id || item.feedbackId || item.feedback_id;

//   const fetchFeedback = async () => {
//     setIsLoading(true);
//     try {
//       const params = new URLSearchParams();
//       if (filters.country) params.append("country", filters.country);
//       if (filters.stars) params.append("stars", filters.stars);
//       if (filters.startDate) params.append("startDate", filters.startDate);
//       if (filters.endDate) params.append("endDate", filters.endDate);

//       const res = await fetch(`${API}/admin/feedbacks?${params}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) throw new Error("Failed to fetch feedbacks");

//       const data = await res.json();
//       setFeedback(data.feedbacks || data || []);
//       setCurrentPage(1);
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error",
//         description: "Failed to load feedback",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleExport = async (format = "pdf") => {
//     try {
//       const res = await fetch(`${API}/admin/export`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           format,
//           feedbackIds: feedback.map((f) => idOf(f)),
//         }),
//       });

//       if (!res.ok) {
//         toast({
//           title: "Export failed",
//           description: `Server returned ${res.status}`,
//           variant: "destructive",
//         });
//         return;
//       }

//       const blob = await res.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `feedback.${format}`;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       toast({
//         title: "Error",
//         description: "Failed to export",
//         variant: "destructive",
//       });
//     }
//   };

//   const paginatedFeedback = feedback.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   const totalPages = Math.max(1, Math.ceil(feedback.length / itemsPerPage));

//   const avgRating =
//     feedback.length > 0
//       ? (feedback.reduce((s, f) => s + (Number(f.stars) || 0), 0) / feedback.length).toFixed(1)
//       : 0;

//   /** -------------------  📊 DATA TRANSFORMATIONS ------------------- **/

//   // ⭐ Rating Distribution
//   const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
//     star: `${star}★`,
//     count: feedback.filter((f) => Number(f.stars) === star).length,
//   }));

//   // 🌍 Country Counts
//   const countryCounts = Object.values(
//     feedback.reduce((acc, f) => {
//       const name = f.country || "Unknown";
//       if (!acc[name]) acc[name] = { name, value: 0 };
//       acc[name].value++;
//       return acc;
//     }, {})
//   );

//   // 🚻 Gender Breakdown
//   const genderCounts = Object.values(
//     feedback.reduce((acc, f) => {
//       const g = (f.gender || "Other").trim();
//       if (!acc[g]) acc[g] = { name: g, value: 0 };
//       acc[g].value++;
//       return acc;
//     }, {})
//   );

//   // 🎂 Age Groups
//   const ageGroups = [
//     { range: "18-25", min: 18, max: 25 },
//     { range: "26-35", min: 26, max: 35 },
//     { range: "36-45", min: 36, max: 45 },
//     { range: "46-60", min: 46, max: 60 },
//     { range: "60+", min: 61, max: 100 },
//   ];

//   const ageGroupCounts = ageGroups.map((group) => ({
//     name: group.range,
//     value: feedback.filter(
//       (f) => f.age && f.age >= group.min && f.age <= group.max
//     ).length,
//   }));

//   // 🇧🇷 Brazilian State Breakdown
//   const stateCounts = Object.values(
//     feedback.reduce((acc, f) => {
//       if (f.country === "Brazil" && f.state) {
//         if (!acc[f.state]) acc[f.state] = { name: f.state, value: 0 };
//         acc[f.state].value++;
//       }
//       return acc;
//     }, {})
//   );

//   const COLORS = ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F4A460", "#C19A6B"];


//   return (
//     <div className="min-h-screen bg-background">
//       {/* ---------- HEADER ---------- */}
//       <header className="border-b bg-card px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold font-serif">Feedback Dashboard</h1>

//         <div className="flex gap-3">
//           <button onClick={() => handleExport("pdf")} className="px-4 py-2 bg-primary text-white rounded-lg">
//             Export PDF
//           </button>

//           <button onClick={() => handleExport("docx")} className="px-4 py-2 bg-secondary text-white rounded-lg">
//             Export DOCX
//           </button>

//           <button onClick={onLogout} className="px-4 py-2 border rounded-lg">
//             Logout
//           </button>
//         </div>
//       </header>

//       <div className="p-6 space-y-6">

//         {/* ---------- STATS ---------- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <Card title="Total Feedback" value={feedback.length} />
//           <Card title="Average Rating" value={`${avgRating} / 5`} />
//           <Card title="Displayed" value={`${paginatedFeedback.length} / ${feedback.length}`} />
//         </div>

//         {/* ---------- FULL ANALYTICS ---------- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* ⭐ Rating */}
//           <ChartCard title="Rating Breakdown">
//             <ResponsiveContainer width="100%" height={260}>
//               <BarChart data={ratingCounts}>
//                 <XAxis dataKey="star" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#8B4513" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </ChartCard>

//           {/* 🚻 Gender */}
//           <ChartCard title="Gender %">
//             <ResponsiveContainer width="100%" height={260}>
//               <PieChart>
//                 <Pie data={genderCounts} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
//                   {genderCounts.map((_, i) => (
//                     <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </ChartCard>

//           {/* 🎂 Age */}
//           <ChartCard title="Age Groups">
//             <ResponsiveContainer width="100%" height={260}>
//               <BarChart data={ageGroupCounts}>
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#C19A6B" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </ChartCard>

//           {/* 🇧🇷 Brazilian State Map */}
//           <ChartCard title="Brazil - Feedback by State">
//             <ResponsiveContainer width="100%" height={260}>
//               <PieChart>
//                 <Pie data={stateCounts} cx="50%" cy="50%" innerRadius={40} outerRadius={90} dataKey="value" label>
//                   {stateCounts.map((_, i) => (
//                     <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </ChartCard>

//           {/* 🌍 Countries List */}
//           <ChartCard title="Countries Breakdown">
//             <ul className="space-y-1 text-sm">
//               {countryCounts.map((c) => (
//                 <li key={c.name} className="flex justify-between border-b py-1">
//                   <span>{c.name}</span>
//                   <span className="font-bold">{c.value}</span>
//                 </li>
//               ))}
//             </ul>
//           </ChartCard>
//         </div>

//         {/* ---------- FILTERS ---------- */}
//         <Filters
//           filters={filters}
//           setFilters={setFilters}
//           feedback={feedback}
//         />

//         {/* ---------- TABLE ---------- */}
//         <Table feedback={paginatedFeedback} isLoading={isLoading} idOf={idOf} />

//         {/* ---------- PAGINATION ---------- */}
//         <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

//       </div>
//     </div>
//   );
// }

// /* ---------- REUSABLE COMPONENTS ---------- */

// function Card({ title, value }) {
//   return (
//     <div className="bg-card border rounded-lg p-4">
//       <p className="text-sm text-muted-foreground">{title}</p>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }

// function ChartCard({ title, children }) {
//   return (
//     <div className="bg-card border rounded-lg p-4">
//       <h3 className="text-lg font-semibold mb-3">{title}</h3>
//       {children}
//     </div>
//   );
// }

// function Filters({ filters, setFilters, feedback }) {
//   return (
//     <div className="bg-card border p-4 rounded-lg">
//       <h3 className="font-semibold mb-3">Filters</h3>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
//         <input type="date" value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} className="border p-2 rounded-lg" />
//         <input type="date" value={filters.endDate} onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} className="border p-2 rounded-lg" />

//         <select value={filters.country} onChange={(e) => setFilters({ ...filters, country: e.target.value })} className="border p-2 rounded-lg">
//           <option value="">All countries</option>
//           {Array.from(new Set(feedback.map((f) => f.country?.trim()).filter(Boolean))).map((c) => (
//             <option key={c}>{c}</option>
//           ))}
//         </select>

//         <select value={filters.stars} onChange={(e) => setFilters({ ...filters, stars: e.target.value })} className="border p-2 rounded-lg">
//           <option value="">All ratings</option>
//           {[5, 4, 3, 2, 1].map((s) => (
//             <option key={s} value={s}>{s} stars</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// function Table({ feedback, isLoading, idOf }) {
//   return (
//     <div className="bg-card border rounded-lg overflow-hidden">
//       <table className="w-full text-sm">
//         <thead className="bg-secondary border-b">
//           <tr>
//             <th className="p-3 text-left">Date</th>
//             <th className="p-3 text-left">Rating</th>
//             <th className="p-3 text-left">Country</th>
//             <th className="p-3 text-left">Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {isLoading ? (
//             <tr><td colSpan={4} className="p-6 text-center">Loading...</td></tr>
//           ) : feedback.length === 0 ? (
//             <tr><td colSpan={4} className="p-6 text-center text-muted-foreground">No feedback available</td></tr>
//           ) : (
//             feedback.map((item) => (
//               <tr key={idOf(item)} className="border-b">
//                 <td className="p-3">{new Date(item.createdAt).toLocaleDateString()}</td>
//                 <td className="p-3">{"★".repeat(item.stars)}</td>
//                 <td className="p-3">{item.country || "-"}</td>
//                 <td className="p-3 truncate max-w-xs">{item.comments || "-"}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function Pagination({ totalPages, currentPage, setCurrentPage }) {
//   if (totalPages <= 1) return null;
//   return (
//     <div className="flex justify-center gap-2">
//       <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="px-3 py-2 border rounded-lg">Prev</button>
//       {[...Array(totalPages)].map((_, i) => (
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i + 1)}
//           className={`px-3 py-2 rounded-lg ${currentPage === i + 1 ? "bg-primary text-white" : "border"}`}
//         >
//           {i + 1}
//         </button>
//       ))}
//       <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} className="px-3 py-2 border rounded-lg">
//         Next
//       </button>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { useToast } from "@/hooks/use-toast";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend
// } from "recharts";

// export default function AdminDashboard({ token, onLogout }) {
//   const [feedback, setFeedback] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 10;
//   const API = process.env.NEXT_PUBLIC_API_URL;
//   const { toast } = useToast();

//   const fetchFeedback = async () => {
//     try {
//       const res = await fetch(`${API}/admin/feedbacks`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       const data = await res.json();
//       setFeedback(data.feedbacks || data || []);
//       setIsLoading(false);
//     } catch {
//       toast({ title: "Error loading data", variant: "destructive" });
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFeedback();
//   }, []);

//   // ---------------------------- DERIVED DATA ----------------------------

//   const avgRating =
//     feedback.length > 0
//       ? (
//           feedback.reduce((s, f) => s + (Number(f.stars) || 0), 0) /
//           feedback.length
//         ).toFixed(1)
//       : 0;

//   const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
//     star: `${star}★`,
//     count: feedback.filter((f) => Number(f.stars) === star).length
//   }));

//   const genderCounts = ["Male", "Female", "Other"].map((g) => ({
//     name: g,
//     value: feedback.filter((f) => f.sex === g).length
//   }));

//   const currentYear = new Date().getFullYear();

//   const ageData = [
//     { range: "18–25", count: 0 },
//     { range: "26–35", count: 0 },
//     { range: "36–45", count: 0 },
//     { range: "46–60", count: 0 },
//     { range: "60+", count: 0 }
//   ];

//   feedback.forEach((f) => {
//     const age = currentYear - Number(f.yearOfBirth);
//     if (age >= 18 && age <= 25) ageData[0].count++;
//     else if (age <= 35) ageData[1].count++;
//     else if (age <= 45) ageData[2].count++;
//     else if (age <= 60) ageData[3].count++;
//     else ageData[4].count++;
//   });

//   const brazilStatePercent = Object.values(
//     feedback
//       .filter((f) => f.country === "Brazil")
//       .reduce((acc, f) => {
//         if (!acc[f.state]) acc[f.state] = { name: f.state, value: 0 };
//         acc[f.state].value++;
//         return acc;
//       }, {})
//   );

//   const countryCounts = Object.entries(
//     feedback.reduce((acc, f) => {
//       acc[f.country] = (acc[f.country] || 0) + 1;
//       return acc;
//     }, {})
//   ).map(([country, count]) => ({ country, count }));

//   const COLORS = ["#8B4513", "#C2783B", "#E5B68F", "#A66E4F", "#F4A460"];

//   const paginatedFeedback = feedback.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // ---------------------------- EXPORT ----------------------------
//   const exportFile = async (format) => {
//     const res = await fetch(`${API}/admin/export`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//       body: JSON.stringify({ format })
//     });

//     const blob = await res.blob();
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `feedback.${format}`;
//     a.click();
//   };

//   return (
//     <div className="p-6 bg-[#FAF7F2] min-h-screen">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-serif font-bold">Analytics Dashboard</h1>
//         <button className="bg-black text-white px-4 py-2 rounded" onClick={onLogout}>
//           Logout
//         </button>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-xl shadow">
//           <p className="text-sm text-gray-500">Total Feedback</p>
//           <h2 className="text-3xl font-bold">{feedback.length}</h2>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow">
//           <p className="text-sm text-gray-500">Average Rating</p>
//           <h2 className="text-3xl font-bold">{avgRating}</h2>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow">
//           <p className="text-sm text-gray-500">Countries Count</p>
//           <h2 className="text-3xl font-bold">{countryCounts.length}</h2>
//         </div>
//       </div>

//       {/* Graphs */}
//       <div className="grid grid-cols-2 gap-6 mt-6">

//         {/* Ratings */}
//         <div className="bg-white p-4 rounded-xl shadow">
//           <h3 className="font-semibold mb-3">Rating Breakdown</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={ratingCounts}>
//               <XAxis dataKey="star" />
//               <YAxis />
//               <Bar dataKey="count" fill="#8B4513" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Gender */}
//         <div className="bg-white p-4 rounded-xl shadow">
//           <h3 className="font-semibold mb-3">Gender Distribution</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie data={genderCounts} dataKey="value" nameKey="name" innerRadius={50}>
//                 {genderCounts.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* AGE */}
//         <div className="bg-white p-4 rounded-xl shadow">
//           <h3 className="font-semibold mb-3">Age Groups</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={ageData}>
//               <XAxis dataKey="range" />
//               <YAxis />
//               <Bar dataKey="count" fill="#8B4513" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Brazil */}
//         <div className="bg-white p-4 rounded-xl shadow">
//           <h3 className="font-semibold mb-3">% by Brazilian States</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie data={brazilStatePercent} dataKey="value" innerRadius={40}>
//                 {brazilStatePercent.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Countries List */}
//       <div className="mt-6 bg-white p-4 rounded-xl shadow">
//         <h3 className="font-semibold mb-3">Countries with Feedback</h3>
//         {countryCounts.map((c) => (
//           <p key={c.country}>
//             {c.country}: <strong>{c.count}</strong>
//           </p>
//         ))}
//       </div>

//       {/* Export Buttons */}
//       <div className="mt-6 flex gap-4">
//         <button onClick={() => exportFile("pdf")} className="bg-[#8B4513] text-white px-4 py-2 rounded">
//           Export PDF
//         </button>
//         <button onClick={() => exportFile("docx")} className="bg-gray-400 text-white px-4 py-2 rounded">
//           Export DOCX
//         </button>
//       </div>

//       {/* Feedback Table */}
//       <div className="mt-8 bg-white p-4 rounded-xl shadow">
//         <h3 className="font-semibold mb-3">All Feedback</h3>

//         <table className="w-full">
//           <thead>
//             <tr className="border-b text-left">
//               <th className="p-2">Rating</th>
//               <th className="p-2">Age</th>
//               <th className="p-2">Sex</th>
//               <th className="p-2">Country</th>
//               <th className="p-2">Comment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedFeedback.map((f, i) => (
//               <tr key={i} className="border-b">
//                 <td className="p-2">{f.stars} ★</td>
//                 <td className="p-2">{currentYear - f.yearOfBirth}</td>
//                 <td className="p-2">{f.sex}</td>
//                 <td className="p-2">{f.country}</td>
//                 <td className="p-2 text-gray-500">{f.comments || "—"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// 


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

  // const genderStats = ["Male", "Female", "Other"].map(type => ({
  //   name: type,
  //   value: feedback.filter(f => f.sex === type).length
  // }));
   const totalGenderCount = feedback.length;

  const genderStats = ["Male", "Female", "Other"].map(type => {
    const count = feedback.filter(f => f.sex === type).length;
    return {
      name: type,
      value: count,
      percentage: totalGenderCount
        ? ((count / totalGenderCount) * 100).toFixed(1)
        : 0
    };
  });

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

        {/* <Chart title="Gender Distribution">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie data={genderStats} dataKey="value" nameKey="name" label>
                {genderStats.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Chart> */}

       <Chart title="Gender Distribution">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={genderStats}
                dataKey="value"
                nameKey="name"
                label={({ name, percentage }) => `${name}: ${percentage}%`}
              >
                {genderStats.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name, props) => {
                  const { percentage } = props.payload;
                  return [`${value} (${percentage}%)`, name];
                }}
              />
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


