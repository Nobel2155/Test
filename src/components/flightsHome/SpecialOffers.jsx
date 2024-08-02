import Image from "next/image";
import React from "react";
import cardImg from "../../assets/flightsHome/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea 1.png";

const SpecialOffers = () => {
  const trips = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mb-16">
      <h3 className="text-center max-w-[950px] w-[80%] mx-auto font-semibold text-[28px] leading-relaxed mb-6">
        Discover the price that the airlines are trying to hide from you. We're
        offering you airfare price breaks so you can save cash.
      </h3>
      <p className="text-center font-medium text-lg">Take a look</p>
      <div className="text-right  -translate-y-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter Location"
          className="bg-[#D9D9D9] p-[6px] px-4 outline-none placeholder:text-gray-600 border-none focus:ring-2 focus:ring-blue-500 rounded-sm"
        />
        <button className="ml-1 bg-green-700 hover:bg-green-800 duration-200 text-white font-medium p-[6px] px-4 rounded-sm active:scale-95">
          Search Deals
        </button>
      </div>

      <div className="grid grid-cols-3 gap-14 mt-8">
        {trips.map((trip) => (
          <div
            key={trip}
            className="bg-[#D9D9D980] hover:bg-[#D9D9D9] duration-200 relative rounded-[20px] w-full group/edit cursor-default"
          >
            <div className="rounded-[20px] overflow-hidden h-60 w-full">
              <Image
                alt=""
                src={cardImg}
                className="h-full w-full object-cover group-hover/edit:scale-105 duration-300"
              />
            </div>
            <h3 className="py-2 text-center">Dhaka to New York on 20 Nov</h3>
            <div className="absolute top-4 right-4 bg-[#009D4D] font-medium text-white rounded-[10px] text-sm px-4 py-1">
              BDT 98K
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
