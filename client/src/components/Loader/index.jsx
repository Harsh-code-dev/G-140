export default function Loader({ label = 'Loading' }) {
  return (
    <div className="flex items-center gap-2 text-ink-400 text-sm px-1">
      <span className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-recall-400 animate-bounce [animation-delay:-0.2s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-recall-400 animate-bounce [animation-delay:-0.1s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-recall-400 animate-bounce" />
      </span>
      {label}
    </div>
  )
}