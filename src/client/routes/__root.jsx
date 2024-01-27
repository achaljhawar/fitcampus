import { createRootRoute, redirect, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


export const Route = createRootRoute({
  beforeLoad: async ({context, location}) => {
    if (!context.authStatus && location.pathname.startsWith("/program")) {
      window.location.href = "/login/google/callback";
      throw redirect({to: "/"});
    }
  },
  component: () => (
    <div className="flex flex-col w-full items-center">
      <div className='max-w-sm w-full'><Outlet /></div>
      
      <TanStackRouterDevtools />
    </div>
  ),
})