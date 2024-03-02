import React from "react";
import Card from "./Card.jsx";

export default function Top_Picks() {
  return (
    <>
      <div className="px-2 lg:container mx-auto mt-36">
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] md:text-3xl font-bold text-[#333]">
            Top Picks Near You
          </h1>
          <button className="flex items-baseline text-[16px] md:text-2xl gap-2">
            <i className="fa-solid fa-filter text-blue-500"></i>
            <p>Filter</p>
          </button>
        </div>
        <hr className="my-2 md:my-6" />
        <div className="Cards">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center w-full mt-8 md:mt-14">
          <button className="flex justify-center items-center flex-row-reverse gap-1 md:gap-5 bg-blue-500 w-full max-w-24 md:max-w-96 mx-auto h-5 md:h-14 rounded-full text-sm md:text-2xl text-white">
            <p>See More</p>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </>
  );
}
