import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col items-center">
      <div className='max-w-sm'><Outlet /></div>
      
      <TanStackRouterDevtools />
    </div>
  ),
})