export default function MemoryCard({ text, createdAt }) {
  return (
    <div className="bg-white border border-ink-100 rounded-xl p-4 hover:border-recall-200 transition-colors">
      <p className="text-sm text-ink-800 leading-relaxed">{text}</p>
      {createdAt && (
        <p className="text-xs text-ink-400 mt-2">{new Date(createdAt).toLocaleString()}</p>
      )}
    </div>
  )
}