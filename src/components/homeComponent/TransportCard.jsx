import React from 'react'
import "@/components/homeComponent/css/hoverCard.css"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import nisshan from "@/assets/homepage/nisshan-petrol.png";
import fielder from "@/assets/homepage/fielder.png";
import voxy from "@/assets/homepage/voxy.png";
import miniBus from "@/assets/homepage/mini-bus.png";

const TransportCard = () => {
  return (
    <div>
        <div className="max-w-[1200px] bg-[#F5F5F5] mx-auto gap-5 p-5 mb-4">
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Transport</h1>
            <p className="text-gray-500 mb-6">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
        </div>
        <div className="flex justify-between items-center mb-4">
            <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <div className="flex space-x-4">
 
                <div className="bg-white w-[252px] rounded-lg shadow-md p-1 card">
                    <Image className="w-[250px] mt-2 mb-1" src={nisshan} alt="Nishan Petrol"/>
                    <div className="p-3">
                        <h2 className="text-xl font-bold">Nissan Patrol</h2>
                        <p className="text-xs">DXB Dubai Airport to around UAE</p>
                        <p>Nissan Safety Sense™ 3.0 *</p>
                        <div className="flex justify-between items-center mt-6">
                            <div className="flex text-orange-400 flex gap-x-1 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>

                            <div className="flex gap-x-2">
                            <div>
                                <a href="">
                                     <PiShareFatThin/>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                     <FaWhatsapp/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-[252px] rounded-lg shadow-md p-1 card">
                    <Image className="w-250px mb-1" src={fielder} alt="Toyota Camry" />
                    <div className="p-3">
                        <h2 className="text-xl font-bold">Toyota Fielder</h2>
                        <p className="text-xs">DAC Airport to Anywhere in Bangladesh</p>
                        <p>Toyota Safety Sense™ 3.0 *</p>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex text-orange-400 flex gap-1 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>

                            <div className="flex gap-x-2">
                            <div>
                                <a href="">
                                     <PiShareFatThin/>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                     <FaWhatsapp/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-[252px] rounded-lg shadow-md p-1 card">
                    <Image className="w-[250px] mb-1" src={voxy} alt="Toyota voxy" />
                    <div className="p-3">
                        <h2 className="text-xl font-bold">Toyota Voxy</h2>
                        <p className="text-xs">Dhaka to Cox’s Bazar</p>
                        <p>Toyota Safety Sense™ 3.0 *</p>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex text-orange-400 flex gap-1 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>

                            <div className="flex gap-x-2">
                            <div>
                                <a href="">
                                     <PiShareFatThin/>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                     <FaWhatsapp/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-[252px] rounded-lg shadow-md p-1 card">
                    <Image className="w-[250px] mb-1" src= {miniBus} alt="Toyota Camry"/>
                    <div className="p-3">
                        <h2 className="text-xl font-bold">Nissan Civilian</h2>
                        <p className="text-xs">Dhaka to Around the Bangladesh</p>
                        <p>Toyota Safety Sense™ 3.0 *</p>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex text-orange-400 flex gap-1 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>

                            <div className="flex gap-x-2">
                            <div>
                                <a href="">
                                     <PiShareFatThin/>
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/message/PHWBQ3GPSKT5O1" target="_blank">
                                     <FaWhatsapp/>
                                </a>
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
    </div>
  )
}

export default TransportCard
