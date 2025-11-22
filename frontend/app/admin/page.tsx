'use client'

import { useState } from 'react'
import AdminLogin from '@/components/admin/admin-login'
import AdminDashboard from '@/components/admin/admin-dashboard'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminToken, setAdminToken] = useState('')

  return isAuthenticated ? (
    <AdminDashboard token={adminToken} onLogout={() => {
      setIsAuthenticated(false)
      setAdminToken('')
    }} />
  ) : (
    <AdminLogin onSuccess={(token) => {
      setAdminToken(token)
      setIsAuthenticated(true)
    }} />
  )
}