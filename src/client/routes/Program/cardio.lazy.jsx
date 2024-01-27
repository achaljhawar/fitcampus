import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Program/cardio')({
  component: () => <div>Hello /Program/cardio!</div>
})