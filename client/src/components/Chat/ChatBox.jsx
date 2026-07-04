import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'

export default function ChatBox({ messages, loading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div className="flex-1 overflow-y-auto space-y-3 pb-4">
      {messages.map((m, i) => (
        <ChatMessage key={i} {...m} />
      ))}
      {loading && (
        <div className="flex items-center gap-2 text-ink-400 text-sm px-1">
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-recall-400 animate-bounce [animation-delay:-0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-recall-400 animate-bounce [animation-delay:-0.1s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-recall-400 animate-bounce" />
          </span>
          Thinking
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  )
}