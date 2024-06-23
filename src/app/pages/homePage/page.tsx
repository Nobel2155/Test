import React from 'react'

import Banner from "@/components/homeComponent/banner/Banner";
import HamsDeal from "@/components/homeComponent/HamsDeal";
import ExploreCard from "@/components/homeComponent/ExploreCard";
import AirportService from "@/components/homeComponent/AirportService";
import HotelCard from "@/components/homeComponent/HotelCard";
import ExperianceCard from "@/components/homeComponent/ExperianceCard";
import ChoseSection from "@/components/homeComponent/ChoseSection";
import TransportCard from "@/components/homeComponent/TransportCard";
import FeedbackSection from "@/components/homeComponent/feedback/FeedbackSection";

const page = () => {
  return (
    <div>
        <Banner/>
        <HamsDeal/>
        <ExploreCard/>
        <AirportService/>
        <HotelCard/> 
        <ExperianceCard/>
        <ChoseSection/>
        <TransportCard/>
        <FeedbackSection/>
    </div>
  )
}

export default page