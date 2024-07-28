"use client";
import React, { useState } from "react";
import { MdClose, MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Result from "./Result";
import PopupItem from "@/components/searchResult/PopupItem";
import { LuFilter } from "react-icons/lu";
import MobileFilter from "@/components/searchResult/MobileFilter"

const AirlineTable = () => {
  const [model, setmodel] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModel = () => {
    setmodel(!model);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-1 lg:mx-0 md:mx-5 mx-5">
      <span
        className="lg:hidden md:flex flex items-center my-3 py-2 rounded-md px-4 bg-gray-100 mx-5 cursor-pointer"
        onClick={handleClick}
      >
        <LuFilter /> Filter
        {isOpen && (
          <MdClose
            size={20}
            className="ml-2 text-gray-500"
            onClick={handleClick}
          />
        )}
      </span>
      <MobileFilter isOpen={isOpen} setIsOpen={setIsOpen} />
      <p className="flex items-center justify-between py-2 px-5 rounded-md w-full bg-[#00703E]">
        <MdOutlineArrowCircleLeft
          className="text-white cursor-pointer"
          fontSize={"2rem"}
        />
        <span className="text-lg text-white font-medium text-center">
          Please select your departing flight
        </span>{" "}
        <MdOutlineArrowCircleRight
          className="text-white cursor-pointer"
          fontSize={"2rem"}
        />
      </p>

      {model && (
        <div className="">
          <div className="fixed shadow-2xl z-20 ml-28">
            <PopupItem />
          </div>
        </div>
      )}

      <div
        // onClick={toggleModel}
        className="relative overflow-x-auto Result w-[100%] "
      >
        {/* <table className="w-full text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3 text-center">Hour</th>
              <th className="px-6 py-3 text-center">Stop</th>
              <th className="px-6 py-3 text-center">Airlines</th>
              <th className="px-6 py-3 w-[55%] text-center">Details</th>
              <th className="px-6 py-3 text-center">Price</th>
            </tr>
          </thead>
          




        </table> */}
        <Result />
      </div>
    </div>
  );
};

export default AirlineTable;
