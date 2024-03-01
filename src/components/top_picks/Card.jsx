import React from "react";

export default function Card({ src_img = "/sports.jpg" }) {
  return (
    <>
      <div className="hidden md:flex gap-10 mt-6">
        <img
          className="w-40 h-40 object-fill rounded-2xl"
          src={src_img}
          alt="Error"
        />
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl">
            <p>Aug 13</p>
            <p>Sun • 10:00am</p>
            <p>
              <b>
                Element Music And Arts Festival <br />
                Pocono Raceway
              </b>
            </p>
          </div>
          <div className="w-full max-w-[200px]">
            <button className="w-full h-10 rounded-full text-blue-500 text-xl my-2 outline outline-2 outline-blue-500">
              View Details
            </button>
            <button className="w-full bg-blue-500 h-10 rounded-full text-white text-xl my-2">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full px-5 my-10 md:hidden">
        <img
          className="w-full h-full max-h-[500px] object-cover rounded-t-2xl shadow-md"
          src={src_img}
          alt="Error"
        />
        <div className="text-2xl text-center [line-height:40px] bg-gray-100 rounded-b-2xl shadow-md">
          <p>Aug 13</p>
          <p>Sun • 10:00am</p>
          <p>
            <b>
              Element Music And Arts Festival <br />
              Pocono Raceway
            </b>
          </p>
          <div className="flex justify-around w-full gap-8">
            <button className="w-full h-10 rounded-full text-blue-500 text-xl my-2 outline outline-2 outline-blue-500">
              View Details
            </button>
            <button className="w-full bg-blue-500 outline-blue-500 h-10 rounded-full text-white text-xl my-2">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
