import React from 'react'
import "@/components/homeComponent/css/hoverCard.css"
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import dubai from "@/assets/homepage/exploreItem/dubai.png"
import saudi from "@/assets/homepage/exploreItem/saudi.png"
import thailand from "@/assets/homepage/exploreItem/thailand.png"
import pehelgram from "@/assets/homepage/exploreItem/pehelgram.png"

const ExploreCard = () => {
  return (
    <div className = "max-w-[1200px] mx-auto mb-20">
        <div className="text-center mb-4">
            <h1 className="text-3xl p-1">Explore Everywhere</h1>
            <div className="p-1">
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, laudantium!</p>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div className="flex justify-around items-center">
            <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

 
            <div className="flex gap-x-4 mb-1">
                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={dubai} alt="Apartment" className="w-full h-[138px] object-cover" />
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">Dubai , UAE </h2>
                            <div className="flex justify-between">
                                <div className="mb-1">
                                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                                    <p className="text-xs text-gray-600 p-1">Breakfast Included</p>
                                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
                                </div>
                                <div className="flex gap-x-2 pr-1 justify-center items-center">
                                    <div>
                                        <a href="">
                                            <PiShareFatThin />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between pb-2">
                                <div className="text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="flex gap-x-2">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={saudi} alt="Apartment" className="w-full h-[138px] object-cover" />
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">Saudia Arabia</h2>
                            <div className="flex justify-between">
                                <div className="mb-1">
                                    <p className="text-xs text-gray-600 p-1">5 day 4 night</p>
                                    <p className="text-xs text-gray-600 p-1">Breakfast Included</p>
                                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
                                </div>
                                <div className="flex gap-x-2 pr-1 justify-center items-center">
                                    <div>
                                        <a href="">
                                            <PiShareFatThin />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between pb-2">
                                <div className="text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="flex gap-x-2">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={thailand} alt="Apartment" className="w-full h-[138px] object-cover" />
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">limestone cave rock Thailand</h2>
                            <div className="flex justify-between">
                                <div className="mb-1">
                                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                                    <p className="text-xs text-gray-600 p-1">Breakfast Included</p>
                                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
                                </div>
                                <div className="flex gap-x-2 pr-1 justify-center items-center">
                                    <div>
                                        <a href="">
                                            <PiShareFatThin />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between pb-2">
                                <div className="text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="flex gap-x-2">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={pehelgram} alt="Apartment" className="w-full h-[138px] object-cover" />
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">Pehelgram, Kashmir, India</h2>
                            
                            <div className="flex justify-between">
                                <div className="mb-1">
                                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                                    <p className="text-xs text-gray-600 p-1">Breakfast Included</p>
                                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
                                </div>
                                <div className="flex gap-x-2 pr-1 justify-center items-center">
                                    <div>
                                        <a href="">
                                            <PiShareFatThin />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between pb-2">
                                <div className="text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="flex gap-x-2">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        

    </div>
  )
}

export default ExploreCard
