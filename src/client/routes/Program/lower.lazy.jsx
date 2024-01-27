import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Program/lower')({
  component: () => <div>Hello /Program/lower!</div>
})