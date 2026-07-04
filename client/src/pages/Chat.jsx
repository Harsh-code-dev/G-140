import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ChatBox from '../components/Chat/ChatBox'
import ChatInput from '../components/Chat/ChatInput'

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey — I'm Recall. Ask me anything, and I'll remember it next time." },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      // Replace with a real call to the backend once /chat exists
      await new Promise((r) => setTimeout(r, 800))
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'This is a placeholder reply — wire me up to /chat.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 max-w-2xl mx-auto flex flex-col px-4 py-4 h-[calc(100vh-3.5rem)]">
          <ChatBox messages={messages} loading={loading} />
          <ChatInput value={input} onChange={setInput} onSend={sendMessage} disabled={loading} />
        </div>
      </div>
    </div>
  )
}