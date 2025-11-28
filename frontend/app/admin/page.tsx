// 'use client'

// import { useState } from 'react'
// import AdminLogin from '@/components/admin/admin-login'
// import AdminDashboard from '@/components/admin/admin-dashboard'

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [adminToken, setAdminToken] = useState('')

//   return isAuthenticated ? (
//     <AdminDashboard token={adminToken} onLogout={() => {
//       setIsAuthenticated(false)
//       setAdminToken('')
//     }} />
//   ) : (
//     <AdminLogin onSuccess={(token) => {
//       setAdminToken(token)
//       setIsAuthenticated(true)
//     }} />
//   )
// }

// 'use client';

// import { useEffect, useState } from "react";
// import AdminDashboard from "@/components/admin/admin-dashboard";
// import AuthModal from "@/components/auth/auth-modal";

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // 🔐 Check authentication from localStorage
//   useEffect(() => {
//     const auth = localStorage.getItem("admin-auth");
//     if (auth === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // 🔑 Save login
//   const handleAdminLogin = () => {
//     localStorage.setItem("admin-auth", "true");
//     setIsAuthenticated(true);
//   };

//   // 🔓 Logout
//   const handleLogout = () => {
//     localStorage.removeItem("admin-auth");
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       {isAuthenticated ? (
//         <AdminDashboard token="local-admin" onLogout={handleLogout} />
//       ) : (
//         <AuthModal onClose={() => {}} onSuccess={handleAdminLogin} />
//       )}
//     </>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import AdminDashboard from "@/components/admin/admin-dashboard";

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const auth = localStorage.getItem("admin-auth");
//     if (auth === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("admin-auth");
//     setIsAuthenticated(false);
//   };

//   if (!isAuthenticated) {
//     if (typeof window !== "undefined") {
//       window.location.href = "/"; // go back home → login modal
//     }
//     return null;
//   }

//   return <AdminDashboard token="local-admin" onLogout={handleLogout} />;
// }


// 'use client'

// import { useState, useEffect } from "react"
// import AdminLogin from "@/components/admin/admin-login"
// import AdminDashboard from "@/components/admin/admin-dashboard"

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   useEffect(() => {
//     const saved = localStorage.getItem("admin-auth")
//     if (saved === "granted") {
//       setIsAuthenticated(true)
//     }
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("admin-auth")
//     setIsAuthenticated(false)
//   }

//   return isAuthenticated ? (
//     <AdminDashboard token="local-admin" onLogout={handleLogout} />
//   ) : (
//     <AdminLogin onSuccess={() => setIsAuthenticated(true)} />
//   )
// }


// "use client";

// import { useEffect, useState } from "react";
// import AdminDashboard from "@/components/admin/admin-dashboard";

// export default function AdminPage() {
//   const [allowed, setAllowed] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("admin-auth") === "true") {
//       setAllowed(true);
//     } else {
//       window.location.href = "/";
//     }
//   }, []);

//   if (!allowed) return null;

//   return <AdminDashboard />;
// }

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  // Check auth on load
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin-auth');

    if (isLoggedIn === 'true') {
      router.replace("/admin/dashboard");
    }

    setLoading(false);
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('admin-auth', 'true');
      router.push("/admin/dashboard");
    } else {
      alert('Invalid login credentials');
    }
  };

  if (loading) return null;

  return (
    <div className="p-10 max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          className="border p-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Admin Password"
          className="border p-2 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
