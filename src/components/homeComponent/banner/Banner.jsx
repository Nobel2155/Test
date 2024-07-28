"use client";
import React, { useState } from "react";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { MdOutlineLocalHotel } from "react-icons/md";
import { TbTrain } from "react-icons/tb";
import { MdOutlineTour } from "react-icons/md";
import { BsPassport } from "react-icons/bs";
import Onway from "@/components/homeComponent/banner/OnWay";
import RoundWay from "@/components/homeComponent/banner/Return";
import Multicity from "@/components/homeComponent/banner/Multicity";
import TravelarCounter from "./TravelarCounter";
import { IoIosSearch } from "react-icons/io";
// import LoginMsg from "@/components/LoginMsg";


const Banner = () => {
  const [oneway, setOneway] = useState(true);
  const [roundway, setRoundway] = useState(false);
  const [multicity, setMulticity] = useState(false);
  const [tabs, setTabs] = useState("flight");

  const oneWay = () => {
    setRoundway(false);
    setMulticity(false);
    setOneway(true);
  };
  const roundWay = () => {
    setOneway(false);
    setMulticity(false);
    setRoundway(true);
  };
  const multi = () => {
    setOneway(false);
    setRoundway(false);
    setMulticity(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/banner.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "620px",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "full",
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <div className="text-white text-center mt-5">
          <h1 className="lg:text-4xl md:text-2xl text-lg font-semibold p-1 lg:block md:block hidden">
          Travel All Over the World with HAMS FLY
          </h1>
          <p className="lg:text-base md:text-sm lg:block md:block hidden">
          Save up to 40% on unsold business class fares and get the best Airfare deals with HAMS FLY.
          </p>
          <div className="relative lg:w-96 md:w-96 w-64 mx-auto lg:top-5 md:top-5">
            <input
              type="text"
              placeholder="Search here what you want"
              className="w-full lg:py-2 md:py-2 py-1 rounded-full outline-none px-5 text-black pr-20"
            />
            <button className="absolute right-3 top-2 rounded-full">
              <IoIosSearch className="text-gray-600" fontSize={"1.4rem"} />
            </button>
          </div>
          <div className="flex items-center justify-center lg:mt-10 md:mt-10 mt-2">
            <div className="w-auto lg:px-8 pb-2 rounded-md bg-black/50 flex flex-col items-center justify-center mt-8">
              <div className="lg:w-[650px] md:w-[550px] w-[340px] bg-white lg:py-2 md:py-1 py-1 rounded-full mx-auto lg:px-5 md:px-3 px-0.5 flex items-center lg:justify-between md:justify-between justify-around relative -top-5 lg:flex-row md:flex-row flex-wrap">
                <button
                  onClick={() => setTabs("flight")}
                  className={` flex items-center gap-0.5 lg:text-base md:text-sm text-xs font-semibold ${
                    tabs === "flight" ? "text-sky-600" : "text-black"
                  }`}
                >
                  <span className="lg:block md:block hidden">Flight</span>
                  <LiaPlaneDepartureSolid className="lg:text-2xl md:text-2xl text-2xl" />
                </button>
                {/* <div className="border h-6 border-[#A8A8A8]"></div>
                <button
                  onClick={() => setTabs("hotel")}
                  className={`flex items-center gap-0.5 lg:text-base md:text-sm text-xs font-semibold ${
                    tabs === "hotel" ? "text-sky-600" : "text-black"
                  }`}
                >
                  <span className="lg:block md:block hidden">Hotel</span>
                  <MdOutlineLocalHotel className="lg:text-2xl md:text-2xl text-2xl" />
                </button>
                <div className="border h-6 border-[#A8A8A8]"></div>
                <button
                  onClick={() => setTabs("trip")}
                  className={`flex items-center gap-0.5 lg:text-base md:text-xs text-xs font-semibold ${
                    tabs === "trip" ? "text-sky-600" : "text-black"
                  }`}
                >
                  <span className="lg:block md:block hidden">Search Trip</span>
                  <MdOutlineTour className="lg:text-2xl md:text-2xl text-2xl" />
                </button>
                <div className="border h-6 border-[#A8A8A8]"></div>

                <button
                  onClick={() => setTabs("transport")}
                  className={`flex items-center gap-0.5 lg:text-base md:text-xs text-xs font-semibold ${
                    tabs === "transport" ? "text-sky-600" : "text-black"
                  }`}
                >
                  <span className="lg:block md:block hidden">Transport</span>
                  <TbTrain fontSize={"1.2rem"} />
                </button>
                <div className="border h-6 border-[#A8A8A8]"></div>
                <button
                  onClick={() => setTabs("visa")}
                  className={`text-black flex items-center gap-0.5 lg:text-base md:text-sm text-xs font-semibold ${
                    tabs === "visa" ? "text-sky-600" : "text-black"
                  }`}
                >
                  <span className="lg:block md:block hidden">
                    Apply for visa
                  </span>
                  <BsPassport fontSize={"1.2rem"} />
                </button> */}
              </div>
              <div className=" ">
                <div>
                  <div>
                    <div className="flex mb-2 gap-7 justify-center ">
                      <div className="flex items-center gap-1 relative cursor-pointer">
                        <input
                          onClick={oneWay}
                          value="oneway"
                          defaultChecked
                          type="radio"
                          name="transport"
                          id=""
                        />
                        <p className="text-sm text-white font-medium ">
                          One Way
                        </p>
                      </div>

                      <div className="flex items-center gap-1 relative cursor-pointer">
                        <input
                          onClick={roundWay}
                          value="Round way"
                          type="radio"
                          name="transport"
                          id=""
                        />
                        <p className="text-sm text-white font-medium text-center">
                          Round Way
                        </p>
                      </div>

                      <div className="flex items-center gap-1 relative cursor-pointer">
                        <input
                          onClick={multi}
                          value="Multi city"
                          type="radio"
                          name="transport"
                          id=""
                        />
                        <p className="text-sm text-white font-medium ">
                          Multi City
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <TravelarCounter />
                    </div>
                  </div>

                  {oneway && <Onway />}
                  {roundway && <RoundWay />}
                  {multicity && <Multicity />}
                </div>
                <div className="text-left flex items-center gap-2">
                  <input type="checkbox" name="" id="" />{" "}
                  <span>Check hotels with HAMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LoginMsg /> */}
    </div>
  );
};

export default Banner;
