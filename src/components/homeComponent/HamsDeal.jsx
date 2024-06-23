import React from 'react'
import "@/components/homeComponent/css/hoverCard.css"
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import picture1 from "@/assets/homepage/hamsDeal/picture1.png"
import picture2 from "@/assets/homepage/hamsDeal/picture2.png"
import picture3 from "@/assets/homepage/hamsDeal/picture3.png"
import picture4 from "@/assets/homepage/hamsDeal/picture4.png"

const HamsDeal = () => {
  return (
    <div className = "max-w-[1200px] mx-auto  my-20">
        <div className="text-start mb-4 pl-24">
            <h1 className="text-3xl p-1">HAMS Flight</h1>
            <div className="pt-1">
                <p className="text-xl">See flights that the airlines are trying to hide from you.</p>
                <p className="text-xl">We&apos;re uncovering airfare pricing loopholes to help you save money</p>
            </div>
        </div>

        <div className="underline text-end lg:mr-24 mb-2 md:mr-0 sm:mr-0">
            <a href="">See all</a>
        </div>
        
        <div className="flex justify-around items-center">
            {/* <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button> */}

            <div className="flex gap-x-4 mb-1">
                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <div className=" ">
                        <Image src={picture1} alt="Apartment" className="w-[242px] h-[138px] object-cover object-center rounded-md"/>
                        <div className="p-1">
                            <div>
                                <h2 className="text-sm font-bold mb-1">Dhaka to Dubai</h2>
                                <div className="flex justify-between">
                                    <div className = "mb-1">
                                        <p className="text-xs text-gray-600 p-1">Baggage</p>
                                        <p className="text-xs text-gray-600 p-1">Transit 4h</p>
                                        <p className="text-xs text-gray-600 p-1">Meal</p>
                                    </div>
                                    <div className="flex gap-x-2 pr-1 justify-center items-center">
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
                                <div className="flex justify-between pb-2">
                                    <div className = "text-orange-400 flex gap-x-1 text-sm">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                    <div className="flex gap-x-2 ">
                                        <p className="text-red-500 text-sm line-through">$2,500 </p>
                                        <p className="text-sm">$2,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>


                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={picture2} alt="Apartment" className="w-full h-[138px] object-cover"/>
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">Dhaka to Riyadh</h2>
                            <div className="flex justify-between">
                                    <div className = "mb-1">
                                        <p className="text-xs text-gray-600 p-1">Baggage</p>
                                        <p className="text-xs text-gray-600 p-1">Transit 4h</p>
                                        <p className="text-xs text-gray-600 p-1">Meal</p>
                                    </div>
                                    <div className="flex gap-x-2 pr-1 justify-center items-center">
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
                            <div className="flex justify-between pb-2">
                                <div className = "text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="flex gap-x-2 ">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={picture3} alt="Apartment" className="w-full h-[138px] object-cover"/>
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">Dhaka to Kualampur on 29 Sep</h2>
                            <div className="flex justify-between">
                                    <div className = "mb-1">
                                        <p className="text-xs text-gray-600 p-1">Baggage</p>
                                        <p className="text-xs text-gray-600 p-1">Transit 4h</p>
                                        <p className="text-xs text-gray-600 p-1">Meal</p>
                                    </div>
                                    <div className="flex gap-x-2 pr-1 justify-center items-center">
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
                            <div className="flex justify-between pb-2">
                                <div className = "text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="flex gap-x-2 ">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                    <Image src={picture4} alt="Apartment" className="w-full h-[138px] object-cover"/>
                    
                    <div className="p-1">
                        <div>
                            <h2 className="text-sm font-bold mb-1">Dhaka to Dammam</h2>
                            <div className="flex justify-between">
                                    <div className = "mb-1">
                                        <p className="text-xs text-gray-600 p-1">Baggage</p>
                                        <p className="text-xs text-gray-600 p-1">Transit 4h</p>
                                        <p className="text-xs text-gray-600 p-1">Meal</p>
                                    </div>
                                    <div className="flex gap-x-2 pr-1 justify-center items-center">
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
                            <div className="flex justify-between pb-2">
                                <div className = "text-orange-400 flex gap-x-1 text-sm">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="flex gap-x-2 ">
                                    <p className="text-red-500 text-sm line-through">$2,500 </p>
                                    <p className="text-sm">$2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button> */}
        </div>
        

    </div>
  )
}

export default HamsDeal
