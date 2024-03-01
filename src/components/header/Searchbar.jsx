import React from "react";

export default function Searchbar() {
  return (
    <>
      <div className="lg:container mx-auto bg-white p-6 rounded-lg px-4 mt-7">
        <form
          className="flex items-center justify-center gap-4 flex-col lg:flex-row"
          method="POST"
        >
          <div className="Input_Field relative w-full lg:max-w-[500px]">
            <label
              htmlFor="event"
              className="absolute top-[50%] translate-y-[-50%] ms-4 text-lg text-blue-400"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              id="event"
              className="p-2 ps-10 outline outline-1 outline-gray-200 rounded-full w-full shadow-md"
              type="text"
              name="event"
              placeholder="Search By Event, Artist Venue..."
            />
          </div>
          <div className="Input_Field relative w-full lg:max-w-[400px]">
            <label
              htmlFor="code"
              className="absolute top-[50%] translate-y-[-50%] ms-4 text-lg text-blue-400"
            >
              <i className="fa-solid fa-location-dot"></i>
            </label>
            <input
              id="code"
              className="p-2 ps-10 outline outline-1 outline-gray-200 rounded-full w-full shadow-md"
              type="text"
              name="code"
              placeholder="Zip Code or State"
            />
          </div>
          <div className="Input_Field relative w-full lg:max-w-[200px] sm:max-w-[400px]">
            <label
              htmlFor="date"
              className="absolute top-[50%] translate-y-[-50%] ms-4 text-lg text-blue-400"
            >
              <i className="fa-regular fa-calendar"></i>
            </label>
            <input
              id="date"
              className="p-2 ps-10 outline outline-1 outline-gray-200 rounded-full w-full shadow-md"
              type="date"
              name="date"
              placeholder="Date"
            />
          </div>
          <button className="rounded-full ms-2 bg-[#2C9CF0] text-white p-2 lg:px-24 px-8 hover:bg-blue-500 transition-all">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
