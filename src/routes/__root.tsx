import { Themer } from '@brightsidedevelopers/themer'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  beforeLoad() {
    Themer.initializeTheme()
  },
  component: () => (
    <>
      <Outlet />
    </>
  ),
})
