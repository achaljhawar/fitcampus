// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./routes/__root"

// Create Virtual Routes

const IndexLazyImport = createFileRoute("/")()
const RoutineIndexLazyImport = createFileRoute("/Routine/")()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route))

const RoutineIndexLazyRoute = RoutineIndexLazyImport.update({
  path: "/Routine/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/Routine/index.lazy").then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    "/Routine/": {
      preLoaderRoute: typeof RoutineIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  RoutineIndexLazyRoute,
])
