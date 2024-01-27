import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col w-full items-center bg-[rgb(59,59,59)]">
      <div className='max-w-sm w-full'><Outlet /></div>
      
      <TanStackRouterDevtools />
    </div>
  ),
})