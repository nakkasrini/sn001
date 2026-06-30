import pool from '@/lib/db'
import SubjectCard from '@/components/SubjectCard'
import GrammarSchoolSearch from '@/components/GrammarSchoolSearch'

async function getSubjects() {
  const { rows } = await pool.query(
    "SELECT * FROM subjects WHERE level = '11plus' ORDER BY name"
  )
  return rows
}

export default async function ElevenPlusPage() {
  const subjects = await getSubjects()

  return (
    <div>
      {/* Header */}
      <div className="bg-violet-600 text-white rounded-2xl p-10 mb-8">
        <p className="text-violet-200 text-sm font-medium uppercase tracking-wider mb-2">Resources</p>
        <h1 className="text-3xl font-bold mb-2">11+ Exam Preparation</h1>
        <p className="opacity-90">
          Everything you need for Maths, English, Verbal and Non-Verbal Reasoning entrance exams.
        </p>
      </div>

      {/* Subjects */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Subjects</h2>
      {subjects.length === 0 ? (
        <p className="text-gray-400">No subjects found. Run the seed script to populate.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {subjects.map((s: { id: string; name: string; description: string }) => (
            <SubjectCard key={s.id} name={s.name} description={s.description} />
          ))}
        </div>
      )}

      {/* Grammar school postcode search */}
      <GrammarSchoolSearch />
    </div>
  )
}