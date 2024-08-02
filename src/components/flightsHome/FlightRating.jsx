import React from "react";
import rating from "../../assets/flightsHome/ratingHead.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

const FlightRating = () => {
  const ratings = [1, 2, 3];

  return (
    <div className="bg-[#D9D9D9B3] rounded-lg pt-8 pb-16 px-24 mb-16">
      <div className="text-center">
        <Image className="mx-auto" alt="" src={rating} />
        <h2 className="font-bold mt-4 mb-3 text-xl">View traveler ratings</h2>
        <p className="w-90% mx-auto">
          Read through passenger analyses to learn what they liked (or didn't
          like) about food, legroom, and customer service.
        </p>
        <Link
          href={"#"}
          className="underline pt-2 block font-semibold underline-offset-2"
        >
          Browse all airlines
        </Link>
        <div class="relative w-[80%] mx-auto mt-4">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoIosSearch size={22} />
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-[10px] block w-full focus:ring-2 focus:ring-blue-500 outline-none ps-10 p-2.5"
            placeholder="Search Airlines"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {ratings.map((r) => (
          <div key={r} className="bg-white p-4 pb-8 rounded-lg w-full">
            <h3 className="font-bold mb-3 text-xl">Qatar Airways</h3>
            <p className="font-semibold">Top rated in Cleanliness</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightRating;
