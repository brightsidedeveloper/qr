import React from 'react'
import { Chat } from './chat-context'

export default function useChat() {
  const c = React.useContext(Chat)
  if (!c) throw new Error('useChat must be used within a ChatContext')
  return c
}
