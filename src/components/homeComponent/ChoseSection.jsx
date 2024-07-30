"use client";
import React, { useState } from "react";
import Image from "next/image";
import blueVila from "@/assets/homepage/blue-vila.png";
import blue2 from "@/assets/homepage/blue2.png";

const ChoseSection = () => {
  const [video, setVideo] = useState(true);

  const ShowVideo = (data) => {
    if (data === "video1") {
      setVideo("video1");
    } else {
      setVideo("video2");
    }
  };


  return (
    <div className="">
      <div className=" max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[32px] text-[#282828] font-medium">
            Why Chose Us?
          </h2>
          <p className="text-[#282828]">A Signature of Excellence</p>
        </div>
        <div>
          <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse lg:justify-between md:justify-between lg:gap-0 md:gap-20 gap-20 justify-center items-center">
            <div className="lg:w-[550px] p-4 text-center lg:text-start md:text-start">
              <h3 className="text-3xl text-[#282828] font-medium mb-2">
                Simplifies the process of experiencing the world.
              </h3>
              <p className="text-xl text-[#282828] mb-4">
              HAMS Fly is a travel platform specializing in finding the best airfare, hotel, and overall travel deals.
              </p>
              <h3 className="text-3xl text-[#282828] font-medium mb-2">
                
              </h3>
              <p className="text-xl text-[#282828] mb-4">
              Affordable Prices: Enjoy significant savings compared to other travelwebsites.
              </p>
              <h3 className="text-3xl font-medium mb-2"></h3>
              <p className="text-xl text-[#282828] mb-4">
              Sustainability Commitment:Eco-friendly and community-focused travel solutions.

              Customer Satisfaction:Read testimonials from our happy clients.
              </p>
              {/* <button className="bg-white text-green-600 border border-green-500 px-4 py-2 rounded">
                Read More
              </button> */}
            </div>
            <div className="flex justify-center">
              <div className="relative lg:ml-0 md:ml-0 ml-20">
                <div className="">
                  <Image
                    src={video ? blueVila : blue2}
                    // onClick={() => setVideo(!video)}
                    alt="Travel"
                    className="absolute lg:w-[350px]  top-20 right-20 rounded-[30px] shadow-md cursor-pointer"
                  />
                </div>
                <div>
                  <Image
                    src={video ? blue2 : blueVila}
                    onClick={() => setVideo(!video)}
                    alt="Travel"
                    className="lg:w-[350px] md:w-[350px] w-[200px] rounded-[30px] shadow-md cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseSection;
