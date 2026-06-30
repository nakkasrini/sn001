import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { verifyToken, COOKIE_NAME } from '@/lib/auth'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const token = req.cookies.get(COOKIE_NAME)?.value
  const payload = token ? await verifyToken(token) : null
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { rows } = await pool.query(
    `SELECT pi.*, t.name AS topic_name, s.name AS subject_name
     FROM plan_items pi
     JOIN topics t ON pi.topic_id = t.id
     JOIN subjects s ON t.subject_id = s.id
     WHERE pi.plan_id = $1
     ORDER BY pi.scheduled_date`,
    [id]
  )
  return NextResponse.json({ items: rows })
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const token = req.cookies.get(COOKIE_NAME)?.value
  const payload = token ? await verifyToken(token) : null
  if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { topic_id, scheduled_date, duration_mins, notes } = await req.json()
  if (!topic_id || !scheduled_date) {
    return NextResponse.json({ error: 'topic_id and scheduled_date required' }, { status: 400 })
  }

  const { rows } = await pool.query(
    'INSERT INTO plan_items (plan_id, topic_id, scheduled_date, duration_mins, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [id, topic_id, scheduled_date, duration_mins || 60, notes || null]
  )
  return NextResponse.json({ item: rows[0] }, { status: 201 })
}