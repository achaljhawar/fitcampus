import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import nutritionImg from "../../assets/nutrition.png";

export const Route = createLazyFileRoute("/Nutrition/")({
  component: Nutrition,
});

function Nutrition() {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col bg-[rgb(17,17,17)]">
      <div className="flex p-4 pb-12 gap-10  h-56 bg-white relative">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[36px] text-primary-foreground font-semibold pb-2">
            Nutrition
          </h1>
          <p className="text-secondary rounded-full px-2 border border-green-500">
            Protein Calculator
          </p>
        </div>

        <img
          className="absolute right-0 bottom-6 h-[85%]"
          alt="lower"
          src={nutritionImg}
        />
      </div>
      <div className="rounded-t-3xl bg-[rgb(17,17,17)] -translate-y-8 z-30 flex flex-col gap-4 p-4">
        <div className="flex gap-2">
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Roti</p>
            <p className="font-semibold text-lg">
              4 <span className="text-xs text-[rgb(89,89,89)]">grams/roti</span>
            </p>
          </div>
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Dal</p>
            <p className="font-semibold text-lg">
              10 <span className="text-xs text-[rgb(89,89,89)]">grams/serving</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Rice</p>
            <p className="font-semibold text-lg">
              3 <span className="text-xs text-[rgb(89,89,89)]">grams/serving</span>
            </p>
          </div>
          <div className="flex-1 bg-[rgb(30,30,30)] flex flex-col gap-2 p-4 rounded-3xl">
            <p>Curd</p>
            <p className="font-semibold text-lg">
              10 <span className="text-xs text-[rgb(89,89,89)]">grams/serving</span>
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400">*These are approximate values</p>
        <p className="text-2xl pt-2">Daily protein requirements:</p>
        <p className="text-sm text-gray-400">Can be approximated by multiplying 0.8 with your current body weight</p>
      </div>
    </div>
  );
}
