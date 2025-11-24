// 'use client'

// import { useState } from 'react'
// import { useToast } from '@/hooks/use-toast'

// export default function AdminLogin({ onSuccess }) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const { toast } = useToast()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const response = await fetch('/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       })

//       if (response.ok) {
//         const data = await response.json()
//         onSuccess(data.token)
//       } else {
//         toast({
//           title: 'Login failed',
//           description: 'Invalid email or password',
//           variant: 'destructive'
//         })
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to login',
//         variant: 'destructive'
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background p-4">
//       <div className="bg-card border border-border rounded-xl p-8 max-w-sm w-full">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
//             Barist.Ai Admin
//           </h1>
//           <p className="text-muted-foreground">Feedback Management Portal</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-foreground mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-foreground mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="text-xs text-muted-foreground text-center mt-4">
//           Demo credentials: admincoffee@gmail.com / admincoffee@123321
//         </p>
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { useToast } from '@/hooks/use-toast'

// export default function AdminLogin({ onSuccess }) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const { toast } = useToast()

//   const API = process.env.NEXT_PUBLIC_API_URL

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       const response = await fetch(`${API}/admin/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       })

//       if (response.ok) {
//         const data = await response.json()
//         onSuccess(data.token)
//       } else {
//         toast({
//           title: 'Login failed',
//           description: 'Invalid email or password',
//           variant: 'destructive'
//         })
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to login',
//         variant: 'destructive'
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background p-4">
//       <div className="bg-card border border-border rounded-xl p-8 max-w-sm w-full">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
//             Barist.Ai Admin
//           </h1>
//           <p className="text-muted-foreground">Feedback Management Portal</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-foreground mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-foreground mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="text-xs text-muted-foreground text-center mt-4">
//           Demo credentials: admincoffee@gmail.com / admincoffee@123321
//         </p>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const API = process.env.NEXT_PUBLIC_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`${API}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        toast({
          title: 'Login failed',
          description: 'Invalid email or password',
          variant: 'destructive'
        })
        return
      }

      const data = await response.json()
      onSuccess(data.token)

    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to login',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-card border border-border rounded-xl p-8 max-w-sm w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
            Barist.Ai Admin
          </h1>
          <p className="text-muted-foreground">Feedback Management Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Demo credentials: admincoffee@gmail.com / admincoffee@123321
        </p>
      </div>
    </div>
  )
}
