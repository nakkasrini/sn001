export const dynamic = 'force-dynamic'

import pool from '@/lib/db'
import SubjectResourceBox from '@/components/SubjectResourceBox'
import GrammarSchoolSearch from '@/components/GrammarSchoolSearch'

interface Resource {
  id: string
  title: string
  url: string
  content: string
}

interface SubjectWithResources {
  id: string
  name: string
  description: string
  resources: Resource[]
}

async function getSubjectsWithResources(): Promise<SubjectWithResources[]> {
  const { rows } = await pool.query(`
    SELECT
      s.id          AS subject_id,
      s.name        AS subject_name,
      s.description AS subject_description,
      r.id          AS resource_id,
      r.title,
      r.url,
      r.content
    FROM subjects s
    LEFT JOIN topics t    ON t.subject_id = s.id AND t.name = 'Past Papers & Practice'
    LEFT JOIN resources r ON r.topic_id = t.id
    WHERE s.level = '11plus'
    ORDER BY s.name, r.title
  `)

  const map = new Map<string, SubjectWithResources>()
  for (const row of rows) {
    if (!map.has(row.subject_id)) {
      map.set(row.subject_id, {
        id: row.subject_id,
        name: row.subject_name,
        description: row.subject_description ?? '',
        resources: [],
      })
    }
    if (row.resource_id) {
      map.get(row.subject_id)!.resources.push({
        id: row.resource_id,
        title: row.title,
        url: row.url,
        content: row.content ?? '',
      })
    }
  }
  return Array.from(map.values())
}

export default async function ElevenPlusPage() {
  const subjects = await getSubjectsWithResources()

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-600 text-white rounded-2xl p-10 mb-8">
        <p className="text-violet-200 text-sm font-medium uppercase tracking-wider mb-2">Resources</p>
        <h1 className="text-3xl font-bold mb-2">11+ Exam Preparation</h1>
        <p className="opacity-90">
          Free past papers and practice resources for Maths, English, Verbal and Non-Verbal Reasoning.
        </p>
      </div>

      {/* Subject resource boxes */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Past Papers &amp; Practice by Subject</h2>
      {subjects.length === 0 ? (
        <p className="text-gray-400">No subjects found. Run the seed script to populate.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {subjects.map(s => (
            <SubjectResourceBox key={s.id} subject={s} resources={s.resources} />
          ))}
        </div>
      )}

      {/* Grammar school finder */}
      <GrammarSchoolSearch />
    </div>
  )
}