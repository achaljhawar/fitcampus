import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/Routine/")({
  component: Routine,
});

function Routine() {
  return <div className="p-2">Hello from Routine!</div>;
}
