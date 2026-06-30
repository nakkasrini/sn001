'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  full_name: string
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/auth/me')
      .then(r => r.json())
      .then(({ user }) => setUser(user))
      .catch(() => setUser(null))
  }, [])

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    setUser(null)
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-indigo-200 transition">
          ExamPortal
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/resources/11plus" className="hover:text-indigo-200 transition">11+</Link>
          <Link href="/resources/gcse" className="hover:text-indigo-200 transition">GCSE</Link>
          <Link href="/resources/alevel" className="hover:text-indigo-200 transition">A Level</Link>
          <Link href="/planner" className="hover:text-indigo-200 transition">Planner</Link>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-indigo-200">{user.full_name || user.email}</span>
              <button
                onClick={logout}
                className="bg-white text-indigo-700 px-3 py-1 rounded-md hover:bg-indigo-100 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="hover:text-indigo-200 transition">Login</Link>
              <Link
                href="/signup"
                className="bg-white text-indigo-700 px-3 py-1 rounded-md hover:bg-indigo-100 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}