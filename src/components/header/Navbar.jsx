import React, { useState } from "react";
import Auth from "../Auth";

export default function Navbar() {
  const [CanAuth, setCanAuth] = useState(false);
  return (
    <>
      {CanAuth ? (
        <>
          <Auth />
          <div
            onClick={() => setCanAuth(false)}
            className="Background_Plur"
          ></div>
        </>
      ) : null}
      <div className="lg:container mx-auto flex justify-between items-center w-full flex-col lg:flex-row">
        <div className="text-[whiteSmoke] text-[23px] font-bold">
          <span className="text-[#2C9CF0]">M</span>ETATICKET
        </div>

        <div className="flex justify-between items-center sm:gap-3 flex-col md:flex-row">
          <ul className="flex items-center gap-5 text-white sm:w-full sm:justify-between md:w-fit">
            <li>Trending</li>
            <li>Sports</li>
            <li>Concerts</li>
            <li>Theater</li>
          </ul>
          <div className="flex items-center gap-4 my-3 lg:my-0">
            <button
              onClick={() => setCanAuth(true)}
              className="bg-blue-500 p-[4px] px-7 rounded-full text-white"
            >
              Signup
            </button>
            <button
              onClick={() => setCanAuth(true)}
              className="p-[4px] px-8 rounded-full text-white outline outline-white outline-1"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
