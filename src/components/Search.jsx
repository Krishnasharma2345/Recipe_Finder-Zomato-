import React from "react";
import search_icon from "../assets/search_icon.svg";

const Search = () => {
  return (
    <div className=" text-center mx-40 my-32">
      <div className="text-3xl font-bold m-6">
        Find the <strong className="font-bold text-red-500">Unique</strong> and{" "}
        <strong className="font-bold text-red-500">exiciting recipe</strong> of
        the world here{" "}
      </div>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          placeholder="What on your Mind Today?"
          className="rounded-2xl p-5 text-red-500 outline-none border-none bg-red-200 placeholder:text-red-500 w-[70%] h-7"
        />
        <img
          className="w-fit rounded-xl bg-red-600 hover:cursor-pointer hover:scale-105 hover:shadow-red-400 hover:shadow-lg transition-all text-white p-3"
          src={search_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
