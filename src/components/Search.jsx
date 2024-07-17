"use client"
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const AnimatedSearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center">
      <div
        ref={inputRef}
        className={`flex items-center py-2 transition-all duration-300 ease-in-out ${
          isFocused ? "w-64 border-white bg-white rounded-3xl px-3" : "w-8"
        }`}
      >
        {!isFocused && (
          <FaSearch
            className="h-5 w-5 text-white cursor-pointer"
            onClick={() => setIsFocused(true)}
          />
        )}
        {isFocused && (
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search here..."
            onBlur={() => setIsFocused(false)}
          />
        )}
        {isFocused && (
          <FaSearch className="h-5 w-5 text-gray-500 cursor-pointer" />
        )}
      </div>
    </div>
  );
};
export default AnimatedSearchInput;
