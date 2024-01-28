import { Link, createLazyFileRoute } from "@tanstack/react-router";
import armImg from "../../assets/arm.png";
import SlotBox from "../../components/SlotBox";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/Book/upper")({
  component: Upper,
});

function Upper() {
  const [slotsAvailable, setSlotsAvailable] = useState(5);
  const [slotsBooked, setSlotsBooked] = useState([]);

  useEffect(() => {
    async function getSlots() {
      const slots = await fetch("/api/slots/upper", {
        method: "GET",
      });
      console.log(slots);
    }
    getSlots();
  }, []);

  function bookChestPress(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `0${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function bookLatPulldown(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `1${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function bookBenchPress(confirm, i) {
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
          <Link to=".." className="text-black flex-1 flex">⇦ Back</Link>
          <p className="text-secondary">Program</p>
          <h1 className="flex-1 text-[36px] text-primary-foreground font-semibold pb-2">
            Upper
          </h1>
          <p className="text-secondary rounded-full px-2 border border-green-500">
            Muscle building
          </p>
        </div>

        <img
          className="absolute right-0 bottom-6 h-[85%]"
          alt="upper"
          src={armImg}
        />
      </div>
      <div className="rounded-t-3xl bg-[rgb(17,17,17)] -translate-y-8 z-30 flex flex-col gap-4 p-4">
        <div className="flex gap-2">
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Calories</p>
            <p className="font-semibold text-lg">
              400 <span className="text-xs text-[rgb(89,89,89)]">Kcal</span>
            </p>
          </div>
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Time</p>
            <p className="font-semibold text-lg">
              25 <span className="text-xs text-[rgb(89,89,89)]">Minutes</span>
            </p>
          </div>
        </div>

        <div className="flex pt-2 gap-2 justify-between">
          {[...Array(5)].map((_x, i) => (
            <p key={i} className="flex-1 max-w-12 flex flex-col items-center text-sm text-gray-400">{`${i + 5} am`}</p>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Chest Press
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Chest Press slot ${i + 1}?`),
                    `0${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`0${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookChestPress(
                    confirm(`Book Chest Press slot ${i + 1}?`),
                    i + 1
                  )
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-2 gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Lat pulldown{" "}
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Lat Pulldown slot ${i + 1}?`),
                    `1${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`1${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookLatPulldown(
                    confirm(`Book Lat Pulldown slot ${i + 1}?`),
                    i + 1
                  )
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-2 gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Bench Press
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Bench Press slot ${i + 1}?`),
                    `2${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`2${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookBenchPress(
                    confirm(`Book bench Press slot ${i + 1}?`),
                    i + 1
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
