import Link from 'next/link'

interface Props {
  level: string
  slug: string
  description: string
  color: string
  subjectCount: number
}

export default function LevelCard({ level, slug, description, color, subjectCount }: Props) {
  return (
    <Link href={`/resources/${slug}`} className="block group">
      <div className={`rounded-2xl p-8 ${color} text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
        <h2 className="text-2xl font-bold mb-2">{level}</h2>
        <p className="text-sm opacity-90 mb-6">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium opacity-80">{subjectCount} subjects</span>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}