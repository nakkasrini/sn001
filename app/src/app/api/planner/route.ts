import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { verifyToken, COOKIE_NAME } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value
  const payload = token ? await verifyToken(token) : null
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { rows } = await pool.query(
    'SELECT * FROM study_plans WHERE user_id = $1 ORDER BY created_at DESC',
    [payload.userId]
  )
  return NextResponse.json({ plans: rows })
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value
  const payload = token ? await verifyToken(token) : null
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { name, target_date } = await req.json()
  if (!name) return NextResponse.json({ error: 'Plan name required' }, { status: 400 })

  const { rows } = await pool.query(
    'INSERT INTO study_plans (user_id, name, target_date) VALUES ($1, $2, $3) RETURNING *',
    [payload.userId, name, target_date || null]
  )
  return NextResponse.json({ plan: rows[0] }, { status: 201 })
}