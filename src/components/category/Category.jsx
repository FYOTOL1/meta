import React from "react";
import Card from "./Card.jsx";

export default function Category() {
  return (
    <div>
      <div className="container mx-auto mt-20">
        <h1 className="font-bold text-2xl text-[#333]">Browse By Category</h1>
        <hr className="my-3" />
        <div className="Categories">
          <div className="flex gap-2 md:gap-5 justify-between w-full">
            <Card src_img="/concert.jpg" name="Concert" />
            <Card src_img="/sports.jpg" name="Sports" />
            <Card src_img="/theater.jpg" name="Theater" />
            <Card src_img="/family.jpg" name="Family" />
          </div>
        </div>
      </div>
    </div>
  );
}
