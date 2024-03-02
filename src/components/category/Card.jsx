import React from "react";

export default function Card({ src_img, name }) {
  return (
    <div className="relative w-full lg:max-w-[24%]  bg-gray-500 rounded-[14px] lg:rounded-[18px]">
      <img
        className=" object-cover h-full w-full rounded-[8%] lg:rounded-[18px]"
        src={src_img}
        alt={name}
      />
      <button className="absolute bg-slate-500 outline outline-3 outline-white w-[75%] sm:w-[50%] h-[10%] rounded-full left-[50%] x-center bottom-[-5%] text-[7px] [line-height:7px] sm:text-[14px] md:text-[16px] lg:text-lg ">
        {name}
      </button>
    </div>
  );
}
