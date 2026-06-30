import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

const UK_POSTCODE_RE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i

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

async function resolveLocation(query: string): Promise<{ latitude: number; longitude: number; label: string } | null> {
  if (UK_POSTCODE_RE.test(query.trim())) {
    const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(query.trim())}`)
    if (!res.ok) return null
    const { result } = await res.json()
    return { latitude: result.latitude, longitude: result.longitude, label: result.postcode }
  }

  // Place / city search
  const res = await fetch(`https://api.postcodes.io/places?q=${encodeURIComponent(query.trim())}&limit=1`)
  if (!res.ok) return null
  const { result } = await res.json()
  if (!result || result.length === 0) return null
  const place = result[0]
  return { latitude: place.latitude, longitude: place.longitude, label: place.name_1 }
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || req.nextUrl.searchParams.get('postcode')
  if (!query) {
    return NextResponse.json({ error: 'query is required' }, { status: 400 })
  }

  const location = await resolveLocation(query)
  if (!location) {
    return NextResponse.json(
      { error: 'Could not find that postcode or place. Try a full UK postcode (e.g. HP20 2JN) or a town name (e.g. Tonbridge).' },
      { status: 400 }
    )
  }

  const { rows } = await pool.query('SELECT * FROM grammar_schools ORDER BY name')

  const schools = rows
    .map(s => ({
      ...s,
      distance_miles: parseFloat(
        haversineMiles(location.latitude, location.longitude, s.lat, s.lng).toFixed(1)
      ),
    }))
    .sort((a, b) => a.distance_miles - b.distance_miles)
    .slice(0, 10)

  return NextResponse.json({ schools, location: location.label })
}