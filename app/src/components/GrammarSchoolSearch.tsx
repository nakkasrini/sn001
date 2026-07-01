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
  exam_board: string | null
  distance_miles: number
}

const GENDER_BADGE: Record<string, string> = {
  Boys:  'bg-blue-100 text-blue-700',
  Girls: 'bg-pink-100 text-pink-700',
  Mixed: 'bg-purple-100 text-purple-700',
}

export default function GrammarSchoolSearch() {
  const [query, setQuery]         = useState('')
  const [schools, setSchools]     = useState<School[]>([])
  const [location, setLocation]   = useState('')
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [searched, setSearched]   = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  async function search(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setSearched(false)
    setExpandedId(null)

    const res  = await fetch(`/api/grammar-schools?query=${encodeURIComponent(query)}`)
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
      {/* Search panel */}
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
            10 nearest grammar schools to{' '}
            <span className="text-gray-800 font-semibold">{location}</span>
          </p>

          {schools.map((school, i) => {
            const isExpanded = expandedId === school.id
            return (
              <div
                key={school.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                {/* Card row */}
                <div className="p-5 flex items-start gap-4">
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
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${GENDER_BADGE[school.gender] ?? 'bg-gray-100 text-gray-600'}`}
                      >
                        {school.gender}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{school.address}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {school.local_authority} · {school.postcode}
                    </p>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : school.id)}
                      className="mt-2 text-xs text-violet-600 hover:text-violet-800 font-medium flex items-center gap-1 transition"
                    >
                      {isExpanded ? 'Hide info ▲' : 'More info ▼'}
                    </button>
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

                {/* Expandable admissions panel */}
                {isExpanded && (
                  <div className="border-t border-violet-100 bg-violet-50 px-5 py-4">
                    <h4 className="text-xs font-semibold text-violet-700 uppercase tracking-wider mb-3">
                      Admissions Info
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-xs text-gray-500">Entry year</p>
                        <p className="font-medium text-gray-800">Year 7 (age 11)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">School type</p>
                        <p className="font-medium text-gray-800">{school.gender} grammar school</p>
                      </div>
                      {school.exam_board && (
                        <div className="sm:col-span-2">
                          <p className="text-xs text-gray-500">Entrance exam</p>
                          <p className="font-medium text-gray-800">{school.exam_board}</p>
                        </div>
                      )}
                      {school.website && (
                        <div className="sm:col-span-2 mt-1 flex flex-col gap-1">
                          <a
                            href={school.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-1.5 bg-violet-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-violet-700 transition"
                          >
                            School Website ↗
                          </a>
                          <p className="text-xs text-gray-400">
                            Find admissions details and registration forms on the school's website
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}