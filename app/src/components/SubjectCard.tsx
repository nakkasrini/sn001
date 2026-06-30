interface Props {
  name: string
  description?: string
  onClick?: () => void
}

export default function SubjectCard({ name, description, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-md transition-all group"
    >
      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition">{name}</h3>
      {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </button>
  )
}