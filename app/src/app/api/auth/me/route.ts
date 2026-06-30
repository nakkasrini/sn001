import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { verifyToken, COOKIE_NAME } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value
  if (!token) return NextResponse.json({ user: null })

  const payload = await verifyToken(token)
  if (!payload) return NextResponse.json({ user: null })

  const { rows } = await pool.query(
    'SELECT id, email, full_name, role FROM users WHERE id = $1',
    [payload.userId]
  )
  return NextResponse.json({ user: rows[0] || null })
}