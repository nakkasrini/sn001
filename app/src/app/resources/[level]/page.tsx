import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GCSE_SUBJECT_CARDS } from '@/lib/gcse-subjects'
import { ALEVEL_SUBJECT_CARDS } from '@/lib/alevel-subjects'

const LEVEL_META = {
  gcse: {
    title: 'GCSE Resources',
    description: 'Subject guides with exam board breakdowns, what to focus on, free past papers and top tips for every major GCSE subject.',
    color: 'bg-blue-600',
    cards: GCSE_SUBJECT_CARDS,
  },
  alevel: {
    title: 'A Level Resources',
    description: 'Detailed subject guides covering all major A Level subjects — exam board formats, topic checklists, free past papers and exam technique tips.',
    color: 'bg-emerald-600',
    cards: ALEVEL_SUBJECT_CARDS,
  },
}

export function generateStaticParams() {
  return Object.keys(LEVEL_META).map(level => ({ level }))
}

export default async function ResourcesPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const meta = LEVEL_META[level as keyof typeof LEVEL_META]
  if (!meta) notFound()

  return (
    <div>
      {/* Header */}
      <div className={`${meta.color} text-white rounded-2xl p-10 mb-8`}>
        <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Resources</p>
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="opacity-90">{meta.description}</p>
      </div>

      {/* Subject guide cards */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">Subject Guides</h2>
      <p className="text-sm text-gray-500 mb-5">
        Click a subject to see exam board breakdowns, what to focus on, free past papers and top exam tips.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {meta.cards.map(s => (
          <Link
            key={s.slug}
            href={`/resources/${level}/${s.slug}`}
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
    </div>
  )
}