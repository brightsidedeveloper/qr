import useChat from '@/context/useChat'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/chat')({
  component: Chat,
})

function Chat() {
  const { messages, sendMessage, name, setName } = useChat()
  const [text, setText] = useState('')

  const handleSendMessage = () => {
    if (text.trim()) {
      sendMessage(text)
      setText('')
    }
  }

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="h-dvh flex flex-col bg-gray-100 p-4">
      {/* Name Input */}
      <div className="mb-4 flex items-center gap-2">
        <Link to="/" className="text-gray-500">
          <ChevronLeft />
        </Link>
        <span className="font-bold">Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-40"
          placeholder="Enter your name"
        />
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-white p-4 rounded shadow-md space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`p-2 rounded-lg ${msg.name === name ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            <span className="font-bold">{msg.name}:</span> {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  )
}
