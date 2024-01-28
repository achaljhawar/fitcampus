import { createLazyFileRoute } from "@tanstack/react-router";
import { AuthContext } from "../main";
import { useContext, useEffect, useState } from "react";
import moment from "moment";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { authStatus } = useContext(AuthContext);
  const [greeting, setGreeting] = useState(":)");
  const [gymStatus, setGymStatus] = useState("open");
  useEffect(() => {
    const currentHour = parseFloat(moment(new Date()).format("HH"));
    if (currentHour >= 12 && currentHour < 18) setGreeting("Good Afternoon");
    else if (currentHour >= 18) setGreeting("Good Evening");
    else setGreeting("Good Morning");
    setGymStatus(((currentHour >= 5.5 && currentHour < 9) || (currentHour > 16 && currentHour < 21)) ? "open" : "closed");
  }, []);
  return (
    <div className="flex p-4 py-6 flex-col gap-12">
      <div className="flex gap-10">
        <h1 className="flex-1 text-[42px]">{greeting}</h1>
        <img
          className="h-24 w-24 p-1 bg-secondary rounded-full"
          alt="pfp"
          src="https://data.org/wp-content/uploads/2023/05/BITS_Pilani-Logo.png"
        />
      </div>
      <div>
        <p className="text-xl text-center text-gray-400">The gym is</p>
        <p className={"text-5xl text-center font-semibold " + (gymStatus === "open" ? "text-green-400" : "text-red-500")}>{gymStatus.toUpperCase()}</p>
        <p className="text-xl text-center text-gray-400">right now.</p>
      </div>
      <div className="flex flex-col gap-6">
      <p className="text-lg text-gray-400">Gym timings</p>
        <div className="bg-[rgb(35,35,35)] rounded-3xl p-6">
          <p className="text-2xl">Morning</p>
          <p className="text-lg text-gray-400">5:30 am to 9 am</p>
        </div>
        <div className="bg-[rgb(35,35,35)] rounded-3xl p-6">
          <p className="text-2xl">Evening</p>
          <p className="text-lg text-gray-400">4 pm to 9 pm</p>
        </div>
      </div>
    </div>
  );
}
