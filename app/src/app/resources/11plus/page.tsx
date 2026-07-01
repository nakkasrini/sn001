export const dynamic = 'force-dynamic'

import Link from 'next/link'
import pool from '@/lib/db'
import GrammarSchoolSearch from '@/components/GrammarSchoolSearch'
import { SUBJECT_CARDS } from '@/lib/11plus-subjects'

async function getSchoolCount() {
  const { rows } = await pool.query('SELECT COUNT(*) FROM grammar_schools')
  return parseInt(rows[0].count, 10)
}

export default async function ElevenPlusPage() {
  const schoolCount = await getSchoolCount()

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-600 text-white rounded-2xl p-10 mb-8">
        <p className="text-violet-200 text-sm font-medium uppercase tracking-wider mb-2">Resources</p>
        <h1 className="text-3xl font-bold mb-2">11+ Exam Preparation</h1>
        <p className="opacity-90">
          Subject guides, exam board breakdowns, free past papers and a grammar school finder — everything parents and children need in one place.
        </p>
      </div>

      {/* Subject guide cards */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">Subject Guides</h2>
      <p className="text-sm text-gray-500 mb-5">
        Click a subject to see exam board formats, what to focus on, free past papers and top tips.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        {SUBJECT_CARDS.map(s => (
          <Link
            key={s.slug}
            href={`/resources/11plus/${s.slug}`}
            className={`${s.bg} ${s.border} border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group`}
          >
            <span className="text-3xl">{s.emoji}</span>
            <div>
              <h3 className={`font-bold text-lg ${s.heading}`}>{s.name}</h3>
              <p className="text-sm text-gray-500 mt-1 leading-snug">{s.tagline}</p>
            </div>
            <span className={`text-xs font-semibold ${s.heading} group-hover:underline mt-auto`}>
              View full guide →
            </span>
          </Link>
        ))}
      </div>

      {/* Grammar school finder */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xl font-bold text-gray-900">Find Nearest Grammar Schools</h2>
        <span className="text-xs text-gray-400">{schoolCount} schools in England</span>
      </div>
      <GrammarSchoolSearch />
    </div>
  )
}