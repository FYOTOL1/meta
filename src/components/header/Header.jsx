import React from "react";
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";

export default function Header() {
  return (
    <div className="bg-[#04092C] p-5">
      <Navbar />
      <Searchbar />
    </div>
  );
}
