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


"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "@/components/admin/admin-dashboard";

export default function AdminPage() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("admin-auth") === "true") {
      setAllowed(true);
    } else {
      window.location.href = "/";
    }
  }, []);

  if (!allowed) return null;

  return <AdminDashboard />;
}
