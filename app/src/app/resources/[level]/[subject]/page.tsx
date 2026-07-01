import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GCSE_SUBJECTS } from '@/lib/gcse-subjects'
import { ALEVEL_SUBJECTS } from '@/lib/alevel-subjects'

const LEVEL_META: Record<string, { label: string; color: string }> = {
  gcse:   { label: 'GCSE',    color: 'bg-blue-600'    },
  alevel: { label: 'A Level', color: 'bg-emerald-600' },
}

export function generateStaticParams() {
  return [
    ...GCSE_SUBJECTS.map(s => ({ level: 'gcse', subject: s.slug })),
    ...ALEVEL_SUBJECTS.map(s => ({ level: 'alevel', subject: s.slug })),
  ]
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ level: string; subject: string }>
}) {
  const { level, subject } = await params
  const levelMeta = LEVEL_META[level]
  if (!levelMeta) notFound()

  const subjects = level === 'gcse' ? GCSE_SUBJECTS : ALEVEL_SUBJECTS
  const data = subjects.find(s => s.slug === subject)
  if (!data) notFound()

  return (
    <div>
      {/* Back link */}
      <Link
        href={`/resources/${level}`}
        className="inline-flex items-center gap-1.5 text-sm text-violet-600 hover:text-violet-800 font-medium mb-6 transition"
      >
        ← Back to {levelMeta.label} Resources
      </Link>

      {/* Header */}
      <div className={`${data.headerColor} text-white rounded-2xl p-10 mb-8`}>
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
          {levelMeta.label}
        </p>
        <div className="text-4xl mb-3">{data.emoji}</div>
        <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
        <p className="opacity-90 text-lg">{data.tagline}</p>
      </div>

      {/* About */}
      <p className="text-gray-600 mb-10 leading-relaxed">{data.about}</p>

      {/* ── Exam Board Guide ──────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Exam Board Guide</h2>
        <p className="text-sm text-gray-500 mb-6">
          Your school chooses the exam board — check your teachers or timetable. Practise past papers from your specific board only; question style differs between boards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.boards.map(board => (
            <div
              key={board.id}
              className={`border ${board.color.border} rounded-xl overflow-hidden flex flex-col`}
            >
              {/* Board header */}
              <div
                className={`${board.color.header} ${board.color.headerText} px-5 py-3 flex items-center justify-between gap-3`}
              >
                <div>
                  <h3 className="font-bold text-base">{board.name}</h3>
                  <p className="text-white/70 text-xs">{board.specCode}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-white/20 shrink-0">
                  {board.format}
                </span>
              </div>

              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Meta */}
                <div className="flex flex-col gap-1 text-sm">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Used by: </span>
                    {board.usedBy}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">Duration: </span>
                    {board.duration}
                  </p>
                </div>

                {/* Topics */}
                <div>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    What&apos;s covered
                  </p>
                  <ul className="space-y-1.5">
                    {board.topics.map((t, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-300 mt-0.5 shrink-0">•</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Marking */}
                <div className="bg-gray-50 rounded-lg px-4 py-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Marking</p>
                  <p className="text-sm text-gray-600">{board.marking}</p>
                </div>

                {/* Tip */}
                <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
                  <p className="text-xs font-semibold text-amber-700 mb-1">💡 Tip for this board</p>
                  <p className="text-sm text-gray-700">{board.tip}</p>
                </div>

                {/* Paper link */}
                {board.paperLink && (
                  <a
                    href={board.paperLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-800 transition"
                  >
                    {board.paperLink.label} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What to Focus On ──────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What to Focus On</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {data.focusTopics.map((topic, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3"
            >
              <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
              <p className="text-sm text-gray-700">{topic}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Free Practice Papers ──────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Free Practice Papers &amp; Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.practiceLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 hover:border-violet-300 hover:shadow-sm transition group"
            >
              <span className="text-gray-300 group-hover:text-violet-500 transition mt-0.5 text-lg shrink-0">
                ↗
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-violet-700 transition leading-snug">
                  {link.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{link.note}</p>
                <span className="text-xs text-violet-400 mt-1 block">{link.board}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Top Tips ──────────────────────────────────────────────── */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Tips</h2>
        <div className="space-y-3">
          {data.topTips.map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-violet-50 border border-violet-100 rounded-xl px-5 py-4"
            >
              <span className="text-violet-600 font-bold text-sm shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer link back */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <Link
          href={`/resources/${level}`}
          className="text-sm text-violet-600 hover:text-violet-800 font-medium transition"
        >
          ← Back to {levelMeta.label} Resources
        </Link>
      </div>
    </div>
  )
}