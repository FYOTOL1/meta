import React from "react";

export default function Card({ src_img = "/sports.jpg" }) {
  return (
    <>
      <div className="flex gap-6 md:gap-10 mt-4 md:mt-6">
        <img
          className="w-24 md:w-40 h-24 md:h-40 object-cover rounded-2xl"
          src={src_img}
          alt="Error"
        />
        <div className="flex justify-between items-center w-full">
          <div className="text-[14px] sm:text-lg md:text-2xl">
            <p>Aug 13</p>
            <p>Sun • 10:00am</p>
            <p>
              <b>
                Element Music And Arts Festival <br />
                Pocono Raceway
              </b>
            </p>
          </div>
          <div className="w-full max-w-[100px] sm:max-w-[125px] md:max-w-[150px] lg:max-w-[200px]">
            <button className="w-full h-8 md:h-10 rounded-full text-blue-500 text-[13px] md:text-xl my-2 outline outline-2 outline-blue-500">
              View Details
            </button>
            <button className="w-full bg-blue-500 h-8 md:h-10 rounded-full text-white text-[13px] md:text-xl my-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
