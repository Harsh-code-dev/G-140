import { UserButton } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
    isActive ? 'bg-recall-600 text-white' : 'text-ink-600 hover:bg-ink-100'
  }`

export default function Navbar() {
  return (
    <header className="border-b border-ink-100 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="px-4 h-14 flex items-center justify-between">
        <span className="font-display font-semibold text-lg tracking-tight text-ink-900">
          Recall
        </span>
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/chat" className={linkClass}>
            Chat
          </NavLink>
          <NavLink to="/memory" className={linkClass}>
            Memory
          </NavLink>
          <UserButton afterSignOutUrl="/" />
        </nav>
      </div>
    </header>
  )
}