import LevelCard from '@/components/LevelCard'

const LEVELS = [
  {
    level: '11+',
    slug: '11plus',
    description: 'Maths, English, Verbal & Non-Verbal Reasoning for selective school entrance exams.',
    color: 'bg-violet-600',
    subjectCount: 4,
  },
  {
    level: 'GCSE',
    slug: 'gcse',
    description: 'Past papers, revision notes and practice questions for all GCSE subjects.',
    color: 'bg-blue-600',
    subjectCount: 9,
  },
  {
    level: 'A Level',
    slug: 'alevel',
    description: 'Comprehensive resources across all major A Level subjects and exam boards.',
    color: 'bg-emerald-600',
    subjectCount: 9,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Everything you need to <span className="text-indigo-600">ace your exams</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Find resources for 11+, GCSE and A Level in one place. Build a personalised study plan and track your progress.
        </p>
      </div>

      {/* Level cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {LEVELS.map(l => (
          <LevelCard key={l.slug} {...l} />
        ))}
      </div>

      {/* Feature strip */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { icon: '📚', title: 'Curated Resources', body: 'Past papers, notes, videos and quizzes — all in one place.' },
          { icon: '📅', title: 'Study Planner', body: 'Schedule your revision by subject and topic. Stay on track.' },
          { icon: '✅', title: 'Track Progress', body: 'Mark sessions complete and see how far you have come.' },
        ].map(f => (
          <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}