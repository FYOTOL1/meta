import React from "react";

export default function Card({ src_img, name }) {
  return (
    <div className="relative h-full lg:h-[480px] w-full bg-gray-500 rounded-[18px]">
      <img
        className="object-cover h-full w-full rounded-[18px]"
        src={src_img}
        alt={name}
      />
      <button className="absolute left-[50%] x-center bottom-[-24px] p2 px-8 sm:p-3 sm:px-12 bg-[#04092C] text-lg text-white rounded-full outline outline-3 outline-white">
        {name}
      </button>
    </div>
  );
}
