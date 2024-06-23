import React from 'react'
import "@/components/homeComponent/css/hoverCard.css"
import Image from "next/image";
import nafakhum from "@/assets/homepage/nafakhum.png"
import sundorbon from "@/assets/homepage/sundhorbon.png"
import saintmartin from "@/assets/homepage/saintmartin.png"
import amazon from "@/assets/homepage/amazon.png"
import himachol from "@/assets/homepage/himachol.png"



const ExperianceCard = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-10">
        <div className="mb-2">
                <h1 className="text-[32px]">Experience the feel of camping</h1>
                <h5 className="text-[20px]">With Hams Fly you can experience the camping in unique places.</h5>
        </div>
      <div className="flex gap-2">
        <div className="w-[228px] rounded-md shadow-md p-1 card">
            <Image src={nafakhum} alt="" className="object-cover object-center w-[228px] rounded-md h-[128px] "/>
                <div className="flex flex-col justify-between p-2">
                    <div className="space-y-2">
                        <h6 className="text-xs font-semibold tracking-wide">Nafakhum Waterfall Thanchi.</h6>
                        <p className="text-[10px] text-gray-800">Waterfalls are poetry of nature, where water dances gracefully over rugged terrain. In the pristine wilderness of Bandarban, Bangladesh, lies a hidden gem that epitomizes this natural splendour — Nafakhum Waterfall.</p>
                    </div>
                </div>
        </div>

        <div className="w-[228px] rounded-md shadow-md p-1 card">
            <Image src={sundorbon} alt="" className="object-cover object-center w-[228px] rounded-md h-[128px] "/>
                <div className="flex flex-col justify-between p-2">
                    <div className="space-y-2 p-1">
                        <h6 className="text-xs font-semibold tracking-wide">World Heritage Sundarban Adventure </h6>
                        <p className="text-[10px] text-gray-800">One of the world&apos;s largest mangrove ecosystems is yours to explore with HAMS Sundarban Camping. Make a reservation today to see a variety of animals!</p>
                    </div>
                </div>
        </div>

        <div className="w-[228px] rounded-md shadow-md p-1 card">
            <Image src={saintmartin} alt="" className="object-cover object-center w-[228px] rounded-md h-[128px] "/>
                <div className="flex flex-col justify-between p-2">
                    <div className="space-y-2">
                        <h6 className="text-xs font-semibold tracking-wide">Saint Martin - Teknaf</h6>
                        <p className="text-[10px] text-gray-800">Saint Martin&apos;s, the one and only coral island of Bangladesh, is a small island measuring eight square kilometers. The visible landmass sinks during the tide. Alternatively called the pearl of the sea, it is about 10 km from the mainland at teknaf.</p>
                    </div>
                </div>
        </div>

        <div className="w-[228px] rounded-md shadow-md p-1 card">
            <Image src={amazon} alt="" className="object-cover object-center w-[228px] rounded-md h-[128px] "/>
                <div className="flex flex-col justify-between p-2">
                    <div className="space-y-2">
                        <h6 className="text-xs font-semibold tracking-wide">Amazon Rainforest camping </h6>
                        <p className="text-[10px] text-gray-800">The Amazon is one of Earth&apos;s last refuges for jaguars, harpy eagles, and pink river dolphins, and it is home to sloths, black spider monkeys, and poison dart frogs. It contains one in 10 known species on Earth, 40,000 plant species, 3,000 freshwater fish species, and more than 370 types of reptiles.</p>
                    </div>
                </div>
        </div>

        <div className="w-[228px] rounded-md shadow-md p-1 card">
            <Image src={himachol} alt="" className="object-cover object-center w-[228px] rounded-md h-[128px] "/>
                <div className="flex flex-col justify-between p-2">
                    <div className="space-y-2">
                        <h6 className="text-xs font-semibold tracking-wide">Hampta Pass, Himachal Pradesh.</h6>
                        <p className="text-[10px] text-gray-800">Camping is a cheap kind of therapy that brings you closer to nature&apos;s treasures and embarks on a soul-cleansing journey. The top camping locations in India provide travelers with an amazing break from everyday life and captivating experiences. Everyone wants to lose themselves in the embrace of nature and spend nights beneath a blanket of glittering stars.</p>
                    </div>
                </div>
        </div>


      </div>
    </div>
  )
}

export default ExperianceCard
