import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import MemoryCard from '../components/Memory/MemoryCard'
import Loader from '../components/Loader'

export default function Memory() {
  const [memories, setMemories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        // Replace with a real call to the backend once /memories exists
        await new Promise((r) => setTimeout(r, 600))
        setMemories([
          {
            id: 1,
            text: 'User prefers concise answers with code examples.',
            createdAt: Date.now() - 86400000,
          },
          {
            id: 2,
            text: "User's project is called Recall — a persistent-memory chat agent.",
            createdAt: Date.now() - 3600000,
          },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="font-display text-xl font-semibold text-ink-900 mb-1">Memory</h1>
        <p className="text-ink-500 text-sm mb-6">Everything Recall has learned about you so far.</p>

        {loading ? (
          <Loader label="Loading memories" />
        ) : memories.length === 0 ? (
          <p className="text-ink-400 text-sm">No memories yet — start a conversation.</p>
        ) : (
          <div className="grid gap-3">
            {memories.map((m) => (
              <MemoryCard key={m.id} text={m.text} createdAt={m.createdAt} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}