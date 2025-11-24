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

//       const response = await fetch(`/admin/feedback?${params}`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       })
      
//       if (response.ok) {
//         const data = await response.json()
//         setFeedback(data)
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

//   const handleExport = async (format) => {
//     try {
//       const response = await fetch('/admin/export', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           format,
//           feedbackIds: feedback.map(f => f.id)
//         })
//       })

//       if (response.ok) {
//         const data = await response.json()
//         window.open(data.downloadUrl, '_blank')
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to export',
//         variant: 'destructive'
//       })
//     }
//   }

//   const paginatedFeedback = feedback.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   )

//   const totalPages = Math.ceil(feedback.length / itemsPerPage)

//   const avgRating = feedback.length > 0 
//     ? (feedback.reduce((sum, f) => sum + f.stars, 0) / feedback.length).toFixed(1)
//     : 0

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-serif font-bold text-foreground">Feedback Management</h1>
//         <button
//           onClick={onLogout}
//           className="px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
//         >
//           Logout
//         </button>
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
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleExport('pdf')}
//                 className="flex-1 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
//               >
//                 Export PDF
//               </button>
//               <button
//                 onClick={() => handleExport('docx')}
//                 className="flex-1 px-3 py-2 text-sm bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
//               >
//                 Export DOCX
//               </button>
//             </div>
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
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//               placeholder="Start date"
//             />
//             <input
//               type="date"
//               value={filters.endDate}
//               onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//               placeholder="End date"
//             />
//             <select
//               value={filters.country}
//               onChange={(e) => setFilters({ ...filters, country: e.target.value })}
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//             >
//               <option value="">All countries</option>
//               <option value="Brazil">Brazil</option>
//               <option value="United States">United States</option>
//               <option value="Other">Other</option>
//             </select>
//             <select
//               value={filters.stars}
//               onChange={(e) => setFilters({ ...filters, stars: e.target.value })}
//               className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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

//         {/* Feedback table */}
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
//                   <tr key={item.id} className="border-b border-border hover:bg-secondary/50">
//                     <td className="px-4 py-3 text-sm text-foreground">
//                       {new Date(item.createdAt).toLocaleDateString()}
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <span className="text-lg">{'★'.repeat(item.stars)}{'☆'.repeat(5-item.stars)}</span>
//                     </td>
//                     <td className="px-4 py-3 text-sm text-foreground">{item.country}</td>
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
//               className="px-3 py-2 text-sm border border-border rounded-lg hover:bg-secondary disabled:opacity-50"
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
//               onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//               disabled={currentPage === totalPages}
//               className="px-3 py-2 text-sm border border-border rounded-lg hover:bg-secondary disabled:opacity-50"
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
//           feedbackIds: feedback.map((f) => f.feedbackId)
//         })
//       })

//       if (response.ok) {
//         const data = await response.json()
//         window.open(data.downloadUrl, '_blank')
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to export',
//         variant: 'destructive'
//       })
//     }
//   }

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
//       <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-serif font-bold text-foreground">
//           Feedback Management
//         </h1>
//         <button
//           onClick={onLogout}
//           className="px-4 py-2 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
//         >
//           Logout
//         </button>
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
//           <div className="bg-card border border-border rounded-lg p-4">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleExport('pdf')}
//                 className="flex-1 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
//               >
//                 Export PDF
//               </button>
//               {/* <button
//                 onClick={() => handleExport('docx')}
//                 className="flex-1 px-3 py-2 text-sm bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
//               >
//                 Export DOCX
//               </button> */}
//             </div>
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
//               <option value="India">India</option>
//               <option value="Brazil">Brazil</option>
//               <option value="United States">United States</option>
//               <option value="Mexico">Mexico</option>
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

//         {/* Feedback table */}
//         <div className="bg-card border border-border rounded-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-secondary border-b border-border">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
//                     Date
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
//                     Rating
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
//                     Country
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
//                     Comments
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedFeedback.map((item) => (
//                   <tr key={item.feedbackId} className="border-b border-border">
//                     <td className="px-4 py-3 text-sm text-foreground">
//                       {new Date(item.createdAt).toLocaleDateString()}
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <span className="text-lg">
//                         {'★'.repeat(item.stars)}
//                         {'☆'.repeat(5 - item.stars)}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3 text-sm text-foreground">{item.country}</td>
//                     <td className="px-4 py-3 text-sm text-muted-foreground truncate max-w-xs">
//                       {item.comments || '—'}
//                     </td>
//                     <td className="px-4 py-3 text-sm">
//                       <button
//                         className="text-primary hover:underline"
//                         onClick={() => alert(`Full details for ${item.feedbackId}`)}
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
//               onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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



'use client'

import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function AdminDashboard({ token, onLogout }) {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    country: '',
    stars: '',
    startDate: '',
    endDate: ''
  })

  const { toast } = useToast()
  const itemsPerPage = 10
  const API = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    fetchFeedback()
  }, [filters])

  const fetchFeedback = async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (filters.country) params.append('country', filters.country)
      if (filters.stars) params.append('stars', filters.stars)
      if (filters.startDate) params.append('startDate', filters.startDate)
      if (filters.endDate) params.append('endDate', filters.endDate)

      const response = await fetch(`${API}/admin/feedbacks?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      if (response.ok) {
        const data = await response.json()
        setFeedback(data.feedbacks || [])
        setCurrentPage(1)
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load feedback',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  // NEW WORKING PDF EXPORT
  const handleExport = async (format) => {
    try {
      const response = await fetch(`${API}/admin/export`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          format,
          feedbackIds: feedback.map((f) => f.feedbackId)
        })
      })

      if (!response.ok) {
        toast({
          title: 'Export failed',
          description: 'Server returned an error',
          variant: 'destructive'
        })
        return
      }

      // GET FILE BLOB
      const blob = await response.blob()

      // Filename
      const filename =
        format === 'pdf' ? 'barist-feedbacks.pdf' : 'barist-feedbacks.docx'

      // TRIGGER DOWNLOAD
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to export file',
        variant: 'destructive'
      })
    }
  }

  const paginatedFeedback = feedback.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(feedback.length / itemsPerPage)

  const avgRating =
    feedback.length > 0
      ? (feedback.reduce((sum, f) => sum + f.stars, 0) / feedback.length).toFixed(
          1
        )
      : 0

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif font-bold text-foreground">
          Feedback Management
        </h1>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => handleExport('pdf')}
            className="px-3 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Export PDF
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
            <p className="text-3xl font-bold text-foreground mt-2">
              {feedback.length}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Average Rating</p>
            <p className="text-3xl font-bold text-foreground mt-2">
              {avgRating}/5
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <button
              onClick={() => handleExport('pdf')}
              className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Export PDF
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) =>
                setFilters({ ...filters, startDate: e.target.value })
              }
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            />
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) =>
                setFilters({ ...filters, endDate: e.target.value })
              }
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            />
            <select
              value={filters.country}
              onChange={(e) =>
                setFilters({ ...filters, country: e.target.value })
              }
              className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
            >
              <option value="">All countries</option>
              <option value="India">India</option>
              <option value="Brazil">Brazil</option>
              <option value="United States">United States</option>
              <option value="Mexico">Mexico</option>
            </select>

            <select
              value={filters.stars}
              onChange={(e) =>
                setFilters({ ...filters, stars: e.target.value })
              }
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

        {/* Feedback Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Rating
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Country
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Comments
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedFeedback.map((item) => (
                  <tr key={item.feedbackId} className="border-b border-border">
                    <td className="px-4 py-3 text-sm text-foreground">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="text-lg">
                        {'★'.repeat(item.stars)}
                        {'☆'.repeat(5 - item.stars)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {item.country}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground truncate max-w-xs">
                      {item.comments || '—'}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        className="text-primary hover:underline"
                        onClick={() =>
                          alert(JSON.stringify(item, null, 2))
                        }
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm border border-border rounded-lg"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm rounded-lg ${
                    page === currentPage
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:bg-secondary'
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm border border-border rounded-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
