import ChatContext from '@/context/ChatContext'
import { Themer } from '@brightsidedevelopers/themer'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'

export const Route = createRootRoute({
  beforeLoad() {
    Themer.initializeTheme()
  },
  component: () => (
    <ChatContext>
      <Outlet />
      <Toaster />
    </ChatContext>
  ),
})
