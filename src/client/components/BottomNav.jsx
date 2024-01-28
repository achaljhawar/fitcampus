import { Link, useRouterState } from "@tanstack/react-router";
import homeBorder from "../assets/home_border.png";
import homeFilled from "../assets/home_filled.png";
import dumbellBorder from "../assets/dumbell_border.png";
import dumbellFilled from "../assets/dumbell_filled.png";
import nutritionBorder from "../assets/nutrition_border.png";
import nutritionFilled from "../assets/nutrition_filled.png";
import { useEffect, useState } from "react";

function BottomNav({}) {
  const router = useRouterState();
  const [location, setLocation] = useState(
    router.location.pathname.toLowerCase()
  );

  useEffect(() => {
    setLocation(router.location.pathname.toLowerCase());
  }, [router.location]);

  if (location.startsWith("/book/") && !location.endsWith("/book/"))
    return <></>;

  return (
    <div className="absolute z-50 flex gap-4 items-center justify-evenly bottom-4 w-60 left-1/2 -translate-x-1/2 h-16 bg-[rgba(28,27,29,120)] shadow-lg rounded-full">
      <Link to={"/"}>
        <img
          alt="home"
          className="h-[32px] w-[32px]"
          src={location === "/" ? homeFilled : homeBorder}
        ></img>
      </Link>
      <Link to={"/book"}>
        <img
          alt="book"
          className="h-[32px] w-[32px]"
          src={location.startsWith("/book") ? dumbellFilled : dumbellBorder}
        ></img>
      </Link>
      <Link to={"/nutrition"}>
        <img
          alt="nutrition"
          className="h-[32px] w-[32px]"
          src={location === "/nutrition" ? nutritionFilled : nutritionBorder}
        ></img>
      </Link>
    </div>
  );
}

export default BottomNav;
