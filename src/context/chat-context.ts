import { createContext } from 'react'
import { ChatContextType } from './ChatContext'

export const Chat = createContext<ChatContextType | null>(null)
