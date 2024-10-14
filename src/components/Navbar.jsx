import React from "react";
import image from "../assets/zomata_logo.webp";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4">
      <div className="flex gap-3 items-center">
        <img className="h-14 rounded-3xl  " src={image} alt="" />
        <div className="text-2xl">
          <b>Zomata</b> - Recipe finder
        </div>
      </div>
      <div>
        <ul className="flex gap-5 ">
          <li className="hover:underline hover:cursor-pointer p-2">Home</li>
          <li className="p-2 hover:cursor-pointer hover:underline">Categories</li>
          <li className="hover:cursor-pointer border-white border-spacing-3 text-white hover:text-red-500 transition-colors hover:border-red-500 bg-red-500 hover:bg-white rounded-xl p-2 ">About us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
