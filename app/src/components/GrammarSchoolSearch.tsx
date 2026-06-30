'use client'

import { useState } from 'react'

interface School {
  id: string
  name: string
  address: string
  postcode: string
  local_authority: string
  gender: string
  website: string | null
  distance_miles: number
}

const GENDER_BADGE: Record<string, string> = {
  Boys:  'bg-blue-100 text-blue-700',
  Girls: 'bg-pink-100 text-pink-700',
  Mixed: 'bg-purple-100 text-purple-700',
}

export default function GrammarSchoolSearch() {
  const [query, setQuery] = useState('')
  const [schools, setSchools] = useState<School[]>([])
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  async function search(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setSearched(false)

    const res = await fetch(`/api/grammar-schools?query=${encodeURIComponent(query)}`)
    const data = await res.json()
    setLoading(false)
    setSearched(true)

    if (!res.ok) {
      setError(data.error)
      setSchools([])
      return
    }
    setSchools(data.schools)
    setLocation(data.location)
  }

  return (
    <div className="mt-12">
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Find Nearest Grammar Schools</h2>
        <p className="text-gray-500 text-sm mb-6">
          Search by postcode <span className="text-gray-400">(e.g. HP20 2JN)</span> or
          town / city <span className="text-gray-400">(e.g. Tonbridge, Reading)</span>
        </p>

        <form onSubmit={search} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Postcode or town name…"
            required
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition disabled:opacity-60 whitespace-nowrap"
          >
            {loading ? 'Searching…' : 'Search'}
          </button>
        </form>

        {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
      </div>

      {searched && schools.length === 0 && !error && (
        <p className="mt-6 text-gray-500 text-center">No grammar schools found near that location.</p>
      )}

      {schools.length > 0 && (
        <div className="mt-6 space-y-3">
          <p className="text-sm text-gray-500 font-medium">
            10 nearest grammar schools to <span className="text-gray-800 font-semibold">{location}</span>
          </p>
          {schools.map((school, i) => (
            <div
              key={school.id}
              className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:shadow-md transition"
            >
              <div className="text-2xl font-bold text-violet-300 w-8 shrink-0 text-center">
                {i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  {school.website ? (
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      {school.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-gray-900">{school.name}</span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${GENDER_BADGE[school.gender] || 'bg-gray-100 text-gray-600'}`}>
                    {school.gender}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{school.address}</p>
                <p className="text-xs text-gray-400 mt-1">{school.local_authority} · {school.postcode}</p>
              </div>

              <div className="text-right shrink-0">
                <p className="text-lg font-bold text-violet-600">{school.distance_miles}</p>
                <p className="text-xs text-gray-400">miles</p>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(school.name + ' ' + school.postcode)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-500 hover:underline mt-1 block"
                >
                  Map →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}