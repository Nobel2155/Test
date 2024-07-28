"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const PassengerCount = () => {
  const dropdownRef = useRef(null);
  // State for visibility of traveler dropdown
  const [isVisibleTraveler, setIsVisibleTraveler] = useState(false);

  // State for number of different traveler types
  const [travelerCounts, setTravelerCounts] = useState({
    adults: 1,
    // children: 0,
    // kids: 0,
    // infants: 0,
  });

  // Compute total number of travelers
  const totalTraveler = Object.values(travelerCounts).reduce(
    (acc, count) => acc + count,
    0
  );

  // Set traveler data to localStorage whenever travelerCounts changes
  useEffect(() => {
    localStorage.setItem("adults", travelerCounts.adults);
    localStorage.setItem("children", travelerCounts.children);
    // localStorage.setItem('kids', travelerCounts.kids);
    // localStorage.setItem('infants', travelerCounts.infants);
    // localStorage.setItem('totalTraveler', totalTraveler);
  }, [travelerCounts, totalTraveler]);

  // Toggle visibility of traveler dropdown
  const handleTravelerVisibility = () => {
    setIsVisibleTraveler((prevState) => !prevState);
  };

  // Generic function to handle increment/decrement actions
  const updateTravelerCount = (type, increment) => {
    setTravelerCounts((prevCounts) => {
      const newCount = prevCounts[type] + increment;
      if (newCount < 1 || (totalTraveler >= 100 && increment > 0)) {
        // alert(`Cannot ${increment > 1 ? 'increment' : 'decrement'} ${type}!`);
        return prevCounts;
      }
      return { ...prevCounts, [type]: newCount };
    });
  };

  // Handle change in input field
  const handleInputChange = (type, value) => {
    const parsedValue = parseInt(value, 10);
    setTravelerCounts((prevCounts) => ({
      ...prevCounts,
      [type]: isNaN(parsedValue) ? 0 : Math.max(0, parsedValue),
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisibleTraveler(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {}, [isVisibleTraveler]);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        className="w-48 h-[50px] flex justify-center pt-3 bg-white  border-gray rounded text-black text-sm border cursor-pointer"
        onClick={handleTravelerVisibility}
      >
        <div className="">
          {totalTraveler} Passenger {totalTraveler > 1 ? "" : ""}
        </div>
        <MdOutlineKeyboardArrowDown fontSize={20} />
      </div>

      {/* Traveler Dropdown */}
      {isVisibleTraveler && (
        <div
          ref={dropdownRef}
          className="p-2 mx-auto bg-white border border-gray-300 text-black rounded-sm pt-5 shadow-lg w-48 absolute left-0 top-12 z-10"
        >
          {["adults"].map((type, index) => {
            const label = type.charAt(0).toUpperCase() + type.slice(1);
            const minLabel = type === "children" ? "" : "";
            return (
              <div key={index} className="flex justify-between mb-2">
                <div className="text-start">
                  <label className="block text-sm pt-0.5 text-black">
                    Passenger
                  </label>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-xl"
                    onClick={() => updateTravelerCount(type, -1)}
                    aria-label={`Decrease ${label}`}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-16 text-center"
                    value={travelerCounts[type]}
                    onChange={(e) => handleInputChange(type, e.target.value)}
                    aria-label={`Number of ${label}`}
                  />
                  <button
                    className="text-xl text-green-500"
                    onClick={() => updateTravelerCount(type, 1)}
                    aria-label={`Increase ${label}`}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PassengerCount;
