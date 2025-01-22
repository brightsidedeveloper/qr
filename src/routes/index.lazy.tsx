import Room8Landing from '@/App'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Room8Landing,
})
