import React from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidenav = () => {

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8 tracking-widest">
      <h1>
        <i className="text-[#9340FF] ri-tv-fill text-2xl mr-1"></i>
        <span className="text-white text-xl font-bold">BadaBing!</span>
      </h1>
      <nav className="flex flex-col gap-2 text-zinc-400 text-xl">
        <h1 className="text-white text-lg font-semibold mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-funds-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-fire-fill "></i> Popular
        </Link>
        <Link to="/movies" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-movie-2-fill "></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-tv-2-fill "></i> TV Shows
        </Link>
        <Link to="/people" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-user-fill "></i> People
        </Link>
      </nav>
      <hr className="border-zinc-400 border-t-1 mt-5" />
      <nav className="flex flex-col gap-2 text-zinc-400 text-xl">
        <h1 className="text-white text-lg font-semibold mt-10 mb-5">
          Website Information
        </h1>
        <Link to="/about" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-id-card-fill"></i> About
        </Link>
        <Link to="/contact" className="hover:bg-[#9340FF] rounded-lg p-5 duration-300 hover:text-white">
          <i className="ri-contacts-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
