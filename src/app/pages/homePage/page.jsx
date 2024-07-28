import React from "react";

import Banner from "@/components/homeComponent/banner/Banner";
import HamsDeal from "@/components/homeComponent/HamsDeal";
import ExploreSection from "@/components/homeComponent/exploreSection/ExploreSection";
import AirportService from "@/components/homeComponent/AirportService";
import HotelCard from "@/components/homeComponent/HotelCard";
import ExperianceCard from "@/components/homeComponent/ExperianceCard";
import ChoseSection from "@/components/homeComponent/ChoseSection";
import TransportCard from "@/components/homeComponent/TransportCard";
import FeedbackSection from "@/components/homeComponent/feedback/FeedbackSection";
import Image from "next/image";
import supportImg from "../../../assets/homepage/package/image 126.png";
import Holiday from "@/components/homeComponent/holiday/Holiday"

const HomePage = () => {
  return (
    <div className="space-y-20 relative">
      <Banner />
      <div className="fixed cursor-pointer z-50 flex justify-center items-center flex-col border rounded-full border-[#00703E] lg:w-28 w-20 h-20 lg:h-28 bottom-10 right-10">
        <Image
          className="mx-auto"
          src={supportImg}
          width={40}
          height={20}
          alt="Support Image"
        />
        <p className="text-center lg:text-md md:text-md text-sm font-[600] text-[#00703E] text-[12px]">
          Live Support
        </p>
      </div>
      <HamsDeal />
      <ExploreSection />
      <AirportService />
      <Holiday />
      <HotelCard />
      <ExperianceCard />
      <ChoseSection />
      <TransportCard />
      <FeedbackSection />
    </div>
  );
};

export default HomePage;
