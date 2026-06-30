import { notFound } from 'next/navigation'
import SubjectCard from '@/components/SubjectCard'

const LEVEL_META: Record<string, { title: string; description: string; color: string }> = {
  '11plus': {
    title: '11+ Resources',
    description: 'Maths, English, Verbal and Non-Verbal Reasoning for selective school entrance exams.',
    color: 'bg-violet-600',
  },
  gcse: {
    title: 'GCSE Resources',
    description: 'Past papers, revision notes and practice questions across all GCSE subjects.',
    color: 'bg-blue-600',
  },
  alevel: {
    title: 'A Level Resources',
    description: 'Comprehensive resources for all major A Level subjects and exam boards.',
    color: 'bg-emerald-600',
  },
}

async function getSubjects(level: string) {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/api/subjects?level=${level}`, { cache: 'no-store' })
  if (!res.ok) return []
  const { subjects } = await res.json()
  return subjects
}

export default async function ResourcesPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const meta = LEVEL_META[level]
  if (!meta) notFound()

  const subjects = await getSubjects(level)

  return (
    <div>
      <div className={`${meta.color} text-white rounded-2xl p-10 mb-8`}>
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="opacity-90">{meta.description}</p>
      </div>

      {subjects.length === 0 ? (
        <p className="text-gray-500">No subjects found. Run the seed script to populate subjects.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subjects.map((s: { id: string; name: string; description: string }) => (
            <SubjectCard key={s.id} name={s.name} description={s.description} />
          ))}
        </div>
      )}
    </div>
  )
}