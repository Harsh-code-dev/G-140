import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import Loader from '../Loader'

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
      {loading && <Loader label="Thinking" />}
      <div ref={bottomRef} />
    </div>
  )
}