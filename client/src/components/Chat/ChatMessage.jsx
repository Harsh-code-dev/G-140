export default function ChatMessage({ role, content, usedMemory }) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-recall-600 text-white rounded-br-sm'
            : 'bg-white border border-ink-100 text-ink-800 rounded-bl-sm'
        }`}
      >
        {!isUser && usedMemory && (
          <div className="flex items-center gap-1.5 text-[11px] text-recall-600 font-medium mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-recall-400" />
            recalled from memory
          </div>
        )}
        <p>{content}</p>
      </div>
    </div>
  )
}