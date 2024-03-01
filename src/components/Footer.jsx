import React from "react";

export default function Footer() {
  let Info_Data = [
    {
      key: "Email",
      value: "example@example.com",
      icon: "fa-regular fa-envelope",
    },
    {
      key: "Phone Number",
      value: "123456789",
      icon: "fa-solid fa-phone",
    },
    {
      key: "Working Days",
      value: "Monday - Sunday",
      icon: "fa-regular fa-calendar",
    },
    {
      key: "Working Hours",
      value: "4:00pm - 9:00pm",
      icon: "fa-regular fa-clock",
    },
    {
      key: "Address",
      value: "4433 - 5345",
      icon: "fa-solid fa-location-dot",
    },
  ];
  return (
    <>
      <footer className="mt-96 py-36 bg-[#04092C] text-white">
        <div className="lg:container flex items-center justify-between flex-col lg:flex-row mx-auto">
          <div className="flex flex-col justify-center items-center w-64">
            <img className="w-28 my-5" src="/meta.png" alt="Error" />
            <h1 className="text-4xl">METATICKET</h1>
          </div>
          <div>
            <ul className="flex lg:flex-col gap-8 text-xl font-bold mt-20 lg:mt-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Trending Events</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[500px] mt-20 lg:mt-0">
            <ul className="text-2xl w-full">
              {Info_Data &&
                Info_Data.map((e) => (
                  <li className="flex items-center justify-between flex-row-reverse w-full mb-3">
                    <p>{e.value}</p>
                    <div className="flex items-center flex-row-reverse gap-3">
                      <p>{e.key}</p>
                      <i className={e.icon}></i>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
