import { Link, createLazyFileRoute } from "@tanstack/react-router";
import legImg from "../../assets/leg.png";
import SlotBox from "../../components/SlotBox";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/Book/lower")({
  component: Lower,
});

function Lower() {
  const [slotsAvailable, setSlotsAvailable] = useState(5);
  const [slotsBooked, setSlotsBooked] = useState([]);

  useEffect(() => {
    async function getSlots() {
      const slots = await fetch("/api/slots/lower", {
        method: "GET",
      });
      console.log(slots);
    }
    getSlots();
  }, []);

  function bookLegPress(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `0${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function bookLegCurl(confirm, i) {
    if (!confirm) {
      return;
    }
    setSlotsBooked((slotsBooked) => [...slotsBooked, `1${i}`]);
    setSlotsAvailable((slotsAvailable) => slotsAvailable - 1);
  }

  function bookLegExtention(confirm, i) {
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
            Lower
          </h1>
          <p className="text-secondary rounded-full px-2 border border-green-500">
            Muscle Building
          </p>
        </div>

        <img
          className="absolute right-0 bottom-6 h-[85%]"
          alt="lower"
          src={legImg}
        />
      </div>
      <div className="rounded-t-3xl bg-[rgb(17,17,17)] -translate-y-8 z-30 flex flex-col gap-4 p-4">
        <div className="flex gap-2">
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Calories</p>
            <p className="font-semibold text-lg">
              300 <span className="text-xs text-[rgb(89,89,89)]">Kcal</span>
            </p>
          </div>
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Time</p>
            <p className="font-semibold text-lg">
              30 <span className="text-xs text-[rgb(89,89,89)]">Minutes</span>
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
            Leg Press
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Leg Press slot ${i + 1}?`),
                    `0${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`0${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookLegPress(confirm(`Book Leg Press slot ${i + 1}?`), i + 1)
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-2 gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Leg Curl
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(confirm(`Cancel Leg Curl slot ${i + 1}?`), `1${i + 1}`)
                }
                booked={slotsBooked.includes(`1${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookLegCurl(confirm(`Book Leg Curl slot ${i + 1}?`), i + 1)
                }
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pt-2 gap-2">
          <p className="text-2xl flex gap-2 justify-between items-center">
            Leg Extention
            <span className="text-sm rounded-full px-2 text-gray-400">
              {slotsAvailable} slots available
            </span>
          </p>
          <div className="flex gap-2 justify-between">
            {[...Array(5)].map((_x, i) => (
              <SlotBox
                cancel={() =>
                  cancel(
                    confirm(`Cancel Leg Extension slot ${i + 1}?`),
                    `2${i + 1}`
                  )
                }
                booked={slotsBooked.includes(`2${i + 1}`)}
                disabled={slotsBooked.find((v) => v.endsWith(i + 1))}
                num={i + 1}
                key={i}
                clicked={() =>
                  bookLegExtention(
                    confirm(`Book Leg Extension slot ${i + 1}?`),
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
