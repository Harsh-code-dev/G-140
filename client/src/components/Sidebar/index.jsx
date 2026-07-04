export default function Sidebar() {
  return (
    <aside className="hidden md:block w-56 shrink-0 border-r border-ink-100 bg-white/60 h-[calc(100vh-3.5rem)] p-3">
      <p className="text-xs font-medium text-ink-400 uppercase tracking-wide mb-2 px-1">
        Recent
      </p>
      <div className="text-sm text-ink-400 px-1">No conversations yet</div>
    </aside>
  )
}