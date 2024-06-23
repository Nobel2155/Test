import React from 'react'
import Image from "next/image"
import blueVila from "@/assets/homepage/blue-vila.png"
import blue2 from "@/assets/homepage/blue2.png"

function ChoseSection() {
  return (
    <div className = "">
        <div className=" max-w-[1200px] mx-auto mb-12">
                <div className="text-center mb-8">
                    <h2 className="text-[32px]">Why Chose Us</h2>
                    <p className="text-gray-500">A Signature of Excellence</p>
                </div>
                <div>
                <div className="flex justify-center justify-around">
                    <div className="w-[550px] p-4">
                        <h3 className="text-xl font-bold mb-2">Simplifies the process of experiencing the world.</h3>
                        <p className="text-gray-600 mb-4">Discover affordable hotel, airfare, and other travel costs. Save plenty of money in comparison to other websites.</p>
                        <h3 className="text-lg font-bold mb-2">HAMS FLY</h3>
                        <p className="text-gray-600 mb-4">HAMS is committed to sustainability via collaboration with stakeholders that is stakeholder-friendly, welcoming to families, ecologically friendly, and community-friendly.</p>
                        <h3 className="text-lg font-bold mb-2">HAMS Deal</h3>
                        <p className="text-gray-600 mb-4">See flights that the airlines are trying to hide from you.
                        We're uncovering airfare and customized trip pricing loopholes to help you save money.</p>
                        <button className="bg-white text-green-600 border border-green-500 px-4 py-2 rounded">Read More</button>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="">
                                <Image src={blueVila} alt="Travel" className="absolute w-[350px] top-10 right-20 rounded-lg shadow-md"/>
                            </div>
                            <div className="">
                                <Image src={blue2} alt="Travel" className="w-[350px] rounded-lg shadow-md"/>
                            </div>

                            <button className="absolute inset-0 flex items-center justify-center">
                            
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default ChoseSection
