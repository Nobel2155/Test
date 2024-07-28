import React from "react";
import Image from "next/image";
import airlines from "../../assets/confirmPage/airlines.png"
import Link from "next/link";

const PopupItem = () => {
  return (
    <div className="border w-[420px] bg-white shadow-md mt-10 rounded-md flex items-center justify-center">
      <div className="text-center px-6 py-3">
        <div className="space-y-1">
          <h1 className="text-center font-[500] text-[16px]">
            Dhaka - New York
          </h1>
          <p className="text-center font-[500] text-[16px]">Sat, April, 2024</p>
          <p className="flex items-center justify-center gap-5 text-center font-[400] text-[16px]">
            <span>24h</span> <span>20kg</span>
          </p>
          <p className="flex items-center justify-center gap-5 text-center font-[400] text-[16px]">
            <span>1 stop</span> <span>1 passenger</span>
          </p>
        </div>
        <div className="py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center flex-col text-center">
              <Image src={airlines} alt="Airline_logo" />
              <span className="text-[14px] font-[400]">A380</span>
            </div>
            <div className="w-80 flex items-center">
              <p className="flex items-start justify-between">
                <span className="flex items-start flex-col">
                  <p className="text-[12px] font-[400]">10:50am</p>
                  <p className="text-[14px] font-[400]">DAC</p>
                </span>
              </p>
              <div className="w-full flex flex-col items-center mx-2">
                <hr className="border-black w-full " />
                <p className="text-[10px] font-[400]">02:20am</p>
              </div>
              <p>
                <span className="flex items-start flex-col">
                  <p className="text-[12px] font-[400]">01:50am</p>
                  <p className="text-[14px] font-[400]">DOH</p>
                </span>
              </p>
            </div>
          </div>
          <p className="text-center font-[500] text-[16px] py-3">
            1hr Layover in Doha, UAE
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center flex-col text-center">
              <Image src={airlines} alt="Airlines_logo" />
              <span className="text-[14px] font-[400]">A380</span>
            </div>
            <div className="w-80 flex items-center">
              <p className="flex items-start justify-between">
                <span className="flex items-start flex-col">
                  <p className="text-[12px] font-[400]">10:50am</p>
                  <p className="text-[14px] font-[400]">DAC</p>
                </span>
              </p>
              <div className="w-full flex flex-col items-center mx-2">
                <hr className="border-black w-full " />
                <p className="text-[10px] font-[400]">02:20am</p>
              </div>
              <p>
                <span className="flex items-start flex-col">
                  <p className="text-[12px] font-[400]">01:50am</p>
                  <p className="text-[14px] font-[400]">DOH</p>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Link href="/pages/bookFlights">
          <button className="px-4 py-1 mt-2 rounded-md text-white font-[500] text-[16px] bg-[#00703E] mx-auto">
              Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopupItem;