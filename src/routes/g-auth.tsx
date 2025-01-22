import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/g-auth')({
  component: Auth,
})

function Auth() {
  useEffect(() => {
    window.location.href = 'r84l://'
  }, [])

  return <div>Logging In</div>
}
