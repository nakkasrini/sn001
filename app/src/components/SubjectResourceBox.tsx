interface Resource {
  id: string
  title: string
  url: string
  content: string
}

interface Props {
  subject: { id: string; name: string; description: string }
  resources: Resource[]
}

const SUBJECT_STYLES: Record<string, { emoji: string; bg: string; border: string; heading: string }> = {
  Mathematics: {
    emoji: '🔢',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    heading: 'text-blue-700',
  },
  English: {
    emoji: '📝',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    heading: 'text-amber-700',
  },
  'Verbal Reasoning': {
    emoji: '💬',
    bg: 'bg-green-50',
    border: 'border-green-200',
    heading: 'text-green-700',
  },
  'Non-Verbal Reasoning': {
    emoji: '🔷',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    heading: 'text-purple-700',
  },
}

export default function SubjectResourceBox({ subject, resources }: Props) {
  const style = SUBJECT_STYLES[subject.name] ?? {
    emoji: '📚',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    heading: 'text-gray-700',
  }

  return (
    <div className={`${style.bg} ${style.border} border rounded-2xl p-6 flex flex-col h-full`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{style.emoji}</span>
        <h3 className={`text-lg font-bold ${style.heading}`}>{subject.name}</h3>
      </div>
      <p className="text-xs text-gray-500 mb-5 leading-relaxed">{subject.description}</p>

      <div className="flex-1 space-y-4">
        {resources.length === 0 ? (
          <p className="text-sm text-gray-400">Resources coming soon.</p>
        ) : (
          resources.map(r => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 group"
            >
              <span className="mt-0.5 text-gray-300 group-hover:text-violet-500 transition text-sm">↗</span>
              <div>
                <p className="text-sm font-medium text-gray-800 group-hover:text-violet-700 transition leading-snug">
                  {r.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{r.content}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  )
}