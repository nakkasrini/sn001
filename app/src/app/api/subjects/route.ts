import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const level = req.nextUrl.searchParams.get('level')
    const { rows } = level
      ? await pool.query('SELECT * FROM subjects WHERE level = $1 ORDER BY name', [level])
      : await pool.query('SELECT * FROM subjects ORDER BY level, name')
    return NextResponse.json({ subjects: rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}