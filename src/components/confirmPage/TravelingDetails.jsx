import React from "react";
import Image from "next/image";
import airlines from "../../assets/confirmPage/airlines.png";

const TravelingDetails = () => {
  return (
    <div className="border rounded-md h-auto lg:w-[820px] lg:pb-0 md:pb-0 pb-5">
      <h1 className="bg-[#00703E] h-[51px] flex items-center text-white rounded-md px-5 text-[20px] font-[500]">
        Travelling Details
      </h1>
      <div className="flex items-center lg:flex-row md:flex-row flex-col justify-between px-5 lg:gap-0 gap-10">
        <div className="py-3 space-y-1">
          <p className="text-[16px] font-[400]">
            Traveling Place:{" "}
            <strong className="font-[500] text-[#282828]">
              Dhaka - New York
            </strong>
          </p>
          <p className="text-[16px] font-[400]">
            Traveling Date:{" "}
            <strong className="font-[500] text-[#282828]">
              Sat, April, 2024
            </strong>
          </p>
          <p className="text-[16px] font-[400]">
            Traveling Time:{" "}
            <strong className="font-[500] text-[#282828]">24h</strong>
          </p>
          <p className="text-[16px] font-[400]">
            Total passenger:{" "}
            <strong className="font-[500] text-[#282828]">1</strong>
          </p>
          <p className="text-[16px] font-[400]">
            Baggage Weight:{" "}
            <strong className="font-[500] text-[#282828]">15kg</strong>
          </p>
          <p className="text-[16px] font-[400]">
            Hand Bag: <strong className="font-[500] text-[#282828]">5kg</strong>
          </p>
          <p className="text-[16px] font-[400]">
            Stop: <strong className="font-[500] text-[#282828]">1</strong>
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 lg:w-80 md:w-80 w-64 mx-auto">
            <div className="flex items-center flex-col text-center">
              <Image src={airlines} alt="" />
              <span className="text-[14px] font-[400]">A380</span>
            </div>
            <div className="flex items-center w-full">
              <div className="flex items-start justify-between">
                <div className="flex items-start flex-col">
                  <p className="text-[12px] font-[400]">10:50am</p>
                  <p className="text-[14px] font-[400]">DAC</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mx-2">
                <hr className="border-black w-full " />
                <p className="text-[10px] font-[400]">02:20am</p>
              </div>
              <div className="flex items-start flex-col">
                <p className="text-[12px] font-[400]">01:50am</p>
                <p className="text-[14px] font-[400]">DOH</p>
              </div>
            </div>
          </div>
          <p className="text-center font-[500] text-[16px] py-3">
            1hr Layover in Doha, UAE
          </p>
          <div className="flex items-center gap-3 lg:w-80 md:w-80 w-64 mx-auto">
            <div className="flex items-center flex-col text-center">
              <Image src={airlines} alt="" />
              <span className="text-[14px] font-[400]">A380</span>
            </div>
            <div className="w-full flex items-center">
              <div className="flex items-start flex-col">
                <p className="text-[12px] font-[400]">10:50am</p>
                <p className="text-[14px] font-[400]">DAC</p>
              </div>
              <div className="w-full flex flex-col items-center mx-2">
                <hr className="border-black w-full " />
                <p className="text-[10px] font-[400]">02:20am</p>
              </div>
              <div className="flex items-start flex-col">
                <p className="text-[12px] font-[400]">01:50am</p>
                <p className="text-[14px] font-[400]">DOH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelingDetails;
