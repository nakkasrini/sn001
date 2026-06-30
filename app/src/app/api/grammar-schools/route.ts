import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

function haversineMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLng = (lng2 - lng1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export async function GET(req: NextRequest) {
  const postcode = req.nextUrl.searchParams.get('postcode')
  if (!postcode) {
    return NextResponse.json({ error: 'postcode is required' }, { status: 400 })
  }

  const geocodeRes = await fetch(
    `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode.trim())}`
  )
  if (!geocodeRes.ok) {
    return NextResponse.json({ error: 'Invalid or unknown postcode' }, { status: 400 })
  }
  const { result } = await geocodeRes.json()
  const { latitude, longitude } = result

  const { rows } = await pool.query('SELECT * FROM grammar_schools ORDER BY name')

  const schools = rows
    .map(s => ({
      ...s,
      distance_miles: parseFloat(
        haversineMiles(latitude, longitude, s.lat, s.lng).toFixed(1)
      ),
    }))
    .sort((a, b) => a.distance_miles - b.distance_miles)
    .slice(0, 10)

  return NextResponse.json({ schools, postcode: result.postcode })
}