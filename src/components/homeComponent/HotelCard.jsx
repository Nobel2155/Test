
import React from 'react'
import Image from "next/image";
import "@/components/homeComponent/css/hoverCard.css"
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import seePearl from "@/assets/homepage/bookHotel/seePearl.png";
import atlantis from "@/assets/homepage/bookHotel/atlantis.png";
import heimat from "@/assets/homepage/bookHotel/heimat.png";
import burjAlArab from "@/assets/homepage/bookHotel/burjAlArab.png";
import merina from "@/assets/homepage/bookHotel/marina.png";

const HotelCard = () => {
  return (
     <div className="max-w-[1200px] mx-auto mb-10">
        <div>
          <div className="text-center">
             <h1 className="text-3xl">Book Hotel on best Price</h1>
             <p className="text-xl">Get the best hotel with best service & price</p>
          </div>
          <div className="underline text-end">
            <a href="">See all</a>
          </div>
        </div>
         <div className="flex mt-2 gap-x-2">

            <div className="max-w-[228px] mx-auto bg-white shadow-md rounded-lg card">
            <Image src={seePearl} alt="Apartment" className="w-full h-[138px] object-cover"/>
            
            <div className="p-3">
                <div>
                <h2 className=" text-xs font-bold">Sea Pearl</h2>
                <p className="text-[10px] text-gray-600">Cox’s Bazar , Bangladesh</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[10px] text-[#7A7A7A] font-semibold mt-3">Unwind The Pearl Of Luxury</p>
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
                
                <div className="flex items-center mt-4">
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C6.686 2 4 4.686 4 8s6 10 6 10 6-6.686 6-10-2.686-6-6-6zM10 12a4 4 0 110-8 4 4 0 010 8z" />
                        </svg>
                        <span className="text-[10px] text-gray-600">3 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7 5a2 2 0 100 4h6a2 2 0 100-4H7zM2 11a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600 ">2 Baths</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 3a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm2 0v14h12V3H4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600">300 Sq ft</span>
                    </div>
                </div>
                <button className="w-full text-sm py-0.5 mt-7 text-green-500 border border-green-500 rounded-lg">See Details</button>
            </div>
            </div>


            <div className="max-w-[228px] mx-auto bg-white shadow-md rounded-lg card">
            <Image src={heimat} alt="Apartment" className="w-full h-[138px] object-cover"/>
            
            <div className="p-3">
                <div>
                <h2 className=" text-xs font-bold">25h Heimat Apartment</h2>
                <p className="text-[10px] text-gray-600">Downtown, Dubai</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[10px] text-[#7A7A7A] font-semibold mt-3">25Hours Heimat at Downtown Offers exquisite studios</p>
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
                
                <div className="flex items-center mt-4">
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C6.686 2 4 4.686 4 8s6 10 6 10 6-6.686 6-10-2.686-6-6-6zM10 12a4 4 0 110-8 4 4 0 010 8z" />
                        </svg>
                        <span className="text-[10px] text-gray-600">3 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7 5a2 2 0 100 4h6a2 2 0 100-4H7zM2 11a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600 ">2 Baths</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 3a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm2 0v14h12V3H4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600">300 Sq ft</span>
                    </div>
                </div>
                <button className="w-full text-sm py-0.5 mt-3 text-green-500 border border-green-500 rounded-lg">See Details</button>
            </div>
            </div>


            <div className="max-w-[228px] mx-auto bg-white shadow-md rounded-lg card">
            <Image src={burjAlArab} alt="Apartment" className="w-full h-[138px] object-cover"/>
            
            <div className="p-3">
                <div>
                <h2 className=" text-xs font-bold">Burj Al Arab</h2>
                <p className="text-[10px] text-gray-600">Umm Suqeim 3 - Dubai</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[10px] text-[#7A7A7A] font-semibold mt-3">Jumeirah Burj Al Arab 7 star hotel</p>
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
                
                <div className="flex items-center mt-4">
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C6.686 2 4 4.686 4 8s6 10 6 10 6-6.686 6-10-2.686-6-6-6zM10 12a4 4 0 110-8 4 4 0 010 8z" />
                        </svg>
                        <span className="text-[10px] text-gray-600">3 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7 5a2 2 0 100 4h6a2 2 0 100-4H7zM2 11a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600 ">2 Baths</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 3a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm2 0v14h12V3H4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600">300 Sq ft</span>
                    </div>
                </div>
                <button className="w-full text-sm py-0.5 mt-7 text-green-500 border border-green-500 rounded-lg">See Details</button>
            </div>
            </div>


            <div className="max-w-[228px] mx-auto bg-white shadow-md rounded-lg card">
            <Image src={atlantis} alt="Apartment" className="w-full h-[138px] object-cover"/>
            
            <div className="p-3 ">
                <div>
                <h2 className=" text-xs font-bold">Atlantis, The Palm </h2>
                <p className="text-[10px] text-gray-600">Dubai Beach, Dubai Hote</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[10px] text-[#7A7A7A] font-semibold mt-3">Atlantis Dubai is beyond anything you've ever imagined.</p>
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
                
                <div className="flex items-center mt-4">
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C6.686 2 4 4.686 4 8s6 10 6 10 6-6.686 6-10-2.686-6-6-6zM10 12a4 4 0 110-8 4 4 0 010 8z" />
                        </svg>
                        <span className="text-[10px] text-gray-600">3 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7 5a2 2 0 100 4h6a2 2 0 100-4H7zM2 11a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600 ">2 Baths</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 3a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm2 0v14h12V3H4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600">300 Sq ft</span>
                    </div>
                </div>
                <button className="w-full text-sm py-0.5 mt-3 text-green-500 border border-green-500 rounded-lg">See Details</button>
            </div>
            </div>


            <div className="max-w-[228px] mx-auto bg-white shadow-md rounded-lg card">
            <Image src={merina} alt="Apartment" className="w-full h-[138px] object-cover"/>
            
            <div className="p-3 ">
                <div>
                <h2 className=" text-xs font-bold">Marina Bay Sands</h2>
                <p className="text-[10px] text-gray-600">Singapore</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[10px] text-[#7A7A7A] font-semibold mt-3">WHERE LUXURY UNFOLDS AT EVERY TURN</p>
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
                
                <div className="flex items-center mt-4">
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C6.686 2 4 4.686 4 8s6 10 6 10 6-6.686 6-10-2.686-6-6-6zM10 12a4 4 0 110-8 4 4 0 010 8z" />
                        </svg>
                        <span className="text-[10px] text-gray-600">3 Beds</span>
                    </div>
                    <div className="flex items-center mr-4">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7 5a2 2 0 100 4h6a2 2 0 100-4H7zM2 11a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600 ">2 Baths</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 3a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3zm2 0v14h12V3H4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-[10px] text-gray-600">300 Sq ft</span>
                    </div>
                </div>
                <button className="w-full text-sm py-0.5 mt-3 text-green-500 border border-green-500 rounded-lg">See Details</button>
            </div>
            </div>
         </div>
     </div>
  )
}

export default HotelCard
