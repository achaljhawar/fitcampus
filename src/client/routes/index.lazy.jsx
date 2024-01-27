import { createLazyFileRoute } from "@tanstack/react-router";
import armImg from "../assets/arm.png";
import runImg from "../assets/running.png";
import WorkoutTypeCard from "../components/WorkoutTypeCard";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex p-4 pt-6 m-4 flex-col h-full gap-6 bg-[rgb(17,17,17)] rounded-3xl">
      <div className="flex gap-8">
        <h1 className="flex-1 text-[40px]">Tracking Your Fitness Now</h1>
        <img
          className="h-12 w-12 p-1 bg-secondary rounded-full"
          alt="pfp"
          src="https://github.com/Shiv-Patil.png"
        />
      </div>
      <WorkoutTypeCard title="Upper" description="Muscle Building" image={armImg} gradFro="rgb(29,116,106)" gradTo="rgb(69,187,174)" />
      <WorkoutTypeCard title="Runninng" description="Cardio" image={runImg} gradFro="rgb(29,116,106)" gradTo="rgb(69,187,11)" />
    </div>
  );
}
