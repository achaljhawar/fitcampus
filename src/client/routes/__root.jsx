import { createRootRoute, redirect, Outlet } from "@tanstack/react-router";
import BottomNav from "../components/BottomNav";

export const Route = createRootRoute({
  beforeLoad: async ({ context, location }) => {
    if (!context.authStatus && location.pathname.startsWith("/book")) {
      window.location.href = "/login/google/callback";
      throw redirect({ to: "/" });
    }
  },
  component: () => (
    <div className="flex flex-col w-full h-full items-center">
      <div className="max-w-sm w-full bg-[rgb(17,17,17)] h-full overflow-auto relative">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  ),
});
