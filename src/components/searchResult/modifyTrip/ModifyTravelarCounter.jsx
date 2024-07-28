'use client'
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TravelarCounter = () => {
  // State to check if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Default traveler counts
  const defaultTravelerCounts = {
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  };

  // Initialize state for traveler counts with default values
  const [travelerCounts, setTravelerCounts] = useState(defaultTravelerCounts);

  // State for visibility of traveler dropdown
  const [isVisibleTraveler, setIsVisibleTraveler] = useState(false);

  // Compute total number of travelers
  const totalTraveler = Object.values(travelerCounts).reduce((acc, count) => acc + count, 0);

  // Set traveler data to localStorage whenever travelerCounts changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('adults', travelerCounts.adults);
      localStorage.setItem('children', travelerCounts.children);
      localStorage.setItem('kids', travelerCounts.kids);
      localStorage.setItem('infants', travelerCounts.infants);
      localStorage.setItem('totalTraveler', totalTraveler);
    }
  }, [travelerCounts, totalTraveler, isMounted]);

  // Load traveler data from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTravelerCounts = {
        adults: Number(localStorage.getItem('adults')) || 1,
        children: Number(localStorage.getItem('children')) || 0,
        kids: Number(localStorage.getItem('kids')) || 0,
        infants: Number(localStorage.getItem('infants')) || 0,
      };
      setTravelerCounts(storedTravelerCounts);
      setIsMounted(true);
    }
  }, []);

  // Toggle visibility of traveler dropdown
  const handleTravelerVisibility = () => {
    setIsVisibleTraveler(prevState => !prevState);
  };

  // Generic function to handle increment/decrement actions
  const updateTravelerCount = (type, increment) => {
    setTravelerCounts(prevCounts => {
      // Calculate the new count based on increment value
      let newCount = prevCounts[type] + increment;

      // Check for conditions to prevent invalid state
      if (type === 'adults' && newCount < 1) {
        newCount = 1;
        alert('At least one traveler must be selected!');
      }

      if (newCount < 0 || totalTraveler >= 9 && increment > 0 || type === 'infants' && newCount > prevCounts.adults) {
        alert(`Cannot ${increment > 0 ? 'increment' : 'decrement'} ${type}!`);
        return prevCounts;
      }

      // Check if there is at least one traveler
      if (totalTraveler === 1 && increment < 0) {
        alert('At least one traveler must be selected!');
        return prevCounts;
      }

      return { ...prevCounts, [type]: newCount };
    });
  };

  // Handle change in input field
  const handleInputChange = (type, value) => {
    const parsedValue = parseInt(value, 10);
    setTravelerCounts(prevCounts => {
      const newCount = isNaN(parsedValue) ? 0 : Math.max(0, parsedValue);
      if (type === 'adults' && newCount < 1) {
        alert('At least one traveler must be selected!');
        return prevCounts;
      }
      return {
        ...prevCounts,
        [type]: newCount,
      };
    });
  };

  const dropdownRef = useRef(null);

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
        className="w-28 h-[50px] flex bg-white text-black text-sm justify-center items-center text-center border p-0.5 mb-1 rounded cursor-pointer"
        onClick={handleTravelerVisibility}
      >
        <div>
          {totalTraveler} Traveler{totalTraveler > 1 ? "s" : ""}
        </div>
        <MdOutlineKeyboardArrowDown fontSize={20} />
      </div>

      {/* Traveler Dropdown */}
      {isVisibleTraveler ? (
        <div
          ref={dropdownRef}
          className="p-2 mx-auto bg-white text-black rounded-lg shadow-lg w-64 absolute left-0 top-10 z-10"
        >
          {["adults", "children", "kids", "infants"].map((type, index) => {
            const label = type.charAt(0).toUpperCase() + type.slice(1);
            const minLabel =
              type === "children" ? "5-12" : type === "kids" ? "2-5" : "";
            const isDisabled = totalTraveler >= 9;

            return (
              <div
                key={index}
                className={`flex justify-between mb-2 border-b `}
              >
                <div className="text-start">
                  <label className="block text-sm text-black">
                    {label} {minLabel}
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
                    className={`w-16 text-center ${
                      isDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    value={travelerCounts[type]}
                    onChange={(e) => handleInputChange(type, e.target.value)}
                    aria-label={`Number of ${label}`}
                    disabled={isDisabled}
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
      ) : (
        ""
      )}
    </div>
  );
};

export default TravelarCounter;
