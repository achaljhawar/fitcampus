import { createLazyFileRoute } from "@tanstack/react-router";
import armImg from "../assets/arm.png";
import runImg from "../assets/running.png";
import legImg from "../assets/leg.png";
import WorkoutTypeCard from "../components/WorkoutTypeCard";

import { AuthContext } from "../main";
import { useContext } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { authStatus, setAuthStatus } = useContext(AuthContext);
  return (
    <div className="flex p-4 py-6 flex-col gap-6 bg-[rgb(17,17,17)]">
      <div className="flex gap-10">
        <h1 className="flex-1 text-[42px]">Tracking Your Fitness Now</h1>
        <img
          className={"h-12 w-12 p-1 bg-secondary rounded-full" + (authStatus ? "" : " cursor-pointer")}
          alt="pfp"
          onClick={authStatus ? () => {location.href="/logout"} : () => {location.href="/login/google/callback"}}
          src={authStatus ? authStatus.picture : "https://image.similarpng.com/very-thumbnail/2020/12/Google-logo-design-isolated-illustration-premium-vector-PNG.png"}
        />
      </div>
      <WorkoutTypeCard title="Upper" description="Muscle Building" image={armImg} gradFro="rgb(29,116,106)" gradTo="rgb(69,187,174)" link={"/program/upper"} />
      <WorkoutTypeCard title="Lower" description="Muscle Building" image={legImg} gradFro="rgb(139,153,33)" gradTo="rgb(221,236,94)" link={"/program/lower"} />
      <WorkoutTypeCard title="Running" description="Cardio" image={runImg} gradFro="rgb(205,132,13)" gradTo="rgb(236,178,83)" link={"/program/cardio"} />
    </div>
  );
}
