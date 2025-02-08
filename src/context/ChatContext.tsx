import React from 'react'
import { Chat } from './chat-context'
import supabase from '@/api/supabase'
import { Link, useRouterState } from '@tanstack/react-router'
import toast from 'react-hot-toast'
import Tables from '@/api/Tables'

export default function ChatContext({ children }: { children: React.ReactNode }) {
  const c = useChat()
  return <Chat.Provider value={c}>{children}</Chat.Provider>
}

const channel = supabase.channel('room-1')

function useChat() {
  const {
    location: { pathname },
  } = useRouterState()
  const [name, setName] = React.useState('Anonymous')
  const [messages, setMessages] = React.useState<Message[]>([])
  const pathnameRef = React.useRef(pathname)
  pathnameRef.current = pathname
  React.useEffect(() => {
    channel
      .on('broadcast', { event: 'msg' }, ({ payload: { text, name, id, created_at } }) => {
        if (pathnameRef.current !== '/chat')
          toast(
            <Link to="/chat">
              <span className="font-bold">{name}: </span>
              {text}
            </Link>,
            { icon: '💬' }
          )
        setMessages((prev) => [
          ...prev,
          {
            id,
            text,
            name,
            created_at,
          },
        ])
      })
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [])

  async function sendMessage(text: string) {
    const msg = {
      text,
      name,
      id: Math.random().toString(36).substring(7),
      created_at: Date.now(),
    } as Message
    channel.send({
      type: 'broadcast',
      event: 'msg',
      payload: msg,
    })
    setMessages((prev) => [...prev, msg])
    const [row] = await Tables.token.read()
    if (!row) return
    const { token } = row
    fetch('https://email.tim-ddf.workers.dev/push', {
      method: 'POST',
      body: JSON.stringify({
        to: token,
        title: name,
        body: text,
      }),
    })
      .then((res) => res.text())
      .then((data) => console.log(data))
  }

  return {
    messages,
    sendMessage,
    name,
    setName,
  }
}

type Message = {
  id: string
  text: string
  created_at: number
  name: string
}

export type ChatContextType = ReturnType<typeof useChat>
