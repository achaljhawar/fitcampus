import { Link, createLazyFileRoute } from "@tanstack/react-router";
import runImg from "../../assets/running.png";
import SlotBox from "../../components/SlotBox";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/Book/cardio")({
  component: Cardio,
});

function Cardio() {
  const [slotsAvailable, setSlotsAvailable] = useState(5);
  const [slotsBooked, setSlotsBooked] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    async function getSlots() {
      const slots = await fetch("/api/slots/cardio", {
        method: "GET",
      });
      setSlots(await slots.json());
    }
    getSlots();
  }, []);

  function bookTreadmill(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `0${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function bookStairmill(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `1${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function bookBicycle(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `2${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function cancel(confirm, booking) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => slotsBooked.filter((v) => v !== booking));
    setSlotsAvailable((slotsAvailable) => slotsAvailable + 1);
  }

  return (
    <div className="flex flex-col bg-[rgb(17,17,17)]">
      <div className="flex p-4 pb-12 gap-10  h-56 bg-white relative">
        <div className="flex flex-col items-start">
          <Link to=".." className="text-black flex-1 flex">
            ⇦ Back
          </Link>
          <p className="text-secondary">Program</p>
          <h1 className="flex-1 text-[36px] text-primary-foreground font-semibold pb-2">
            Cardio
          </h1>
          <p className="text-secondary rounded-full px-2 border border-green-500">
            Fitness
          </p>
        </div>

        <img
          className="absolute right-0 bottom-6 h-[85%]"
          alt="cardio"
          src={runImg}
        />
      </div>
      <div className="rounded-t-3xl bg-[rgb(17,17,17)] -translate-y-8 z-30 flex flex-col gap-4 p-4">
        <div className="flex gap-2">
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Calories</p>
            <p className="font-semibold text-lg">
              1000 <span className="text-xs text-[rgb(89,89,89)]">Kcal</span>
            </p>
          </div>
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Time</p>
            <p className="font-semibold text-lg">
              40 <span className="text-xs text-[rgb(89,89,89)]">Minutes</span>
            </p>
          </div>
        </div>

        <div className="flex pt-2 gap-2 justify-between">
          {[...Array(5)].map((_x, i) => (
            <p
              key={i}
              className="flex-1 max-w-12 flex flex-col items-center text-sm text-gray-400"
            >{`${i + 5} am`}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Treadmill
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Treadmill slot ${i + 1}?`),
                    `0${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`0${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookTreadmill(confirm(`Book Treadmill slot ${i + 1}?`), i + 1)
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-2 gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Stairmill
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Stairmill slot ${i + 1}?`),
                    `1${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`1${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookStairmill(confirm(`Book Stairmill slot ${i + 1}?`), i + 1)
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-2 gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Bicycle
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(confirm(`Cancel Bicycle slot ${i + 1}?`), `2${i + 1}`)
                }
                booked={slotsBooked.includes(`2${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookBicycle(confirm(`Book Bicycle slot ${i + 1}?`), i + 1)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
