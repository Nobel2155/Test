'use client'
import React, { useState, useEffect } from 'react';
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { MdOutlineLocalHotel } from "react-icons/md";
import { TbTrain } from "react-icons/tb";
import { MdOutlineTour } from "react-icons/md";
import { BsPassport } from "react-icons/bs";
import Onway from '@/components/homeComponent/banner/OnWay'
import RoundWay from '@/components/homeComponent/banner/Return'
import Multicity from '@/components/homeComponent/banner/Multicity'

const Banner = () => {

    const [oneway,setOneway] = useState(true)
    const [roundway,setRoundway] = useState(false)
    const [multicity,setMulticity] = useState(false)



 const oneWay = () =>{
        setRoundway(false)
        setMulticity(false)
        setOneway(true)
    
    
 }
 const roundWay = () =>{
     setOneway(false)
     setMulticity(false)
    setRoundway(true)
 }
 const multi = () =>{
    setOneway(false)
    setRoundway(false)
    setMulticity(true)
 }

 const style = {
        backgroundImage: `url('/banner.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "600px",
        backgroundRepeat: "no-repeat",
        position: "relative",
 }
    return (
        <div style={style} className="">
            <div className= "absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <div className="text-white text-center">
            <h1 className="lg:text-4xl md:text-2xl text-lg font-semibold p-1">
            Fly and stay around the globe with HAMS
            </h1>
            <p className="lg:text-base md:text-sm text-xs">
            Save 40% on unsold business class fares with HAMS FLY. Knock, knock, get an offer.
            </p>
            <div className="relative lg:w-96 md:w-96 w-64 mx-auto top-5">
                <input
                type="search"
                placeholder="Search here what you want"
                className="w-full lg:py-2 md:py-2 py-1 rounded-full outline-none px-5 text-black"
                />
            </div>
            <div className="flex items-center justify-center mt-10">
                <div className="w-auto px-2 pb-2 rounded-md bg-black/50 flex flex-col items-center justify-center mt-8">
                <div className="lg:w-[650px] md:w-[550px] w-[450px] bg-white lg:py-2 md:py-1 py-1 rounded-full mx-auto lg:px-5 md:px-3 px-0.5 flex items-center lg:justify-between justify-center relative -top-5 lg:flex-row md:flex-row flex-wrap">
                    <button
                    onClick={() => setTabs("flight")}
                    className={`text-black flex items-center gap-0.5 lg:text-base md:text-sm text-xs font-semibold border-r border-[#00000080] lg:pr-4 md:pr-2 pr-1 `}
                    >
                    Flight <LiaPlaneDepartureSolid fontSize={"1.2rem"}/>
                    </button>
                    <button
                    onClick={() => setTabs("hotel")}
                    className={`text-black flex items-center gap-0.5 lg:text-base md:text-sm text-xs font-semibold border-r lg:pl-0 md:pl-2 pl-1 border-[#00000080] lg:pr-4 md:pr-2 pr-1`}
                    >
                    Hotel <MdOutlineLocalHotel fontSize={"1.2rem"} />
                    </button>
                    <button
                    onClick={() => setTabs("trip")}
                    className={`text-black flex items-center gap-0.5 lg:text-base md:text-xs text-xs font-semibold border-r lg:pl-0 md:pl-2 pl-1 border-[#00000080] lg:pr-4 md:pr-2 pr-1`}
                    >
                    Search Trip <MdOutlineTour fontSize={"1.2rem"} />
                    </button>
                    <button
                    onClick={() => setTabs("transport")}
                    className={`text-black flex items-center gap-0.5 lg:text-base md:text-xs text-xs font-semibold border-r lg:pl-0 md:pl-2 pl-1 border-[#00000080] lg:pr-4 md:pr-2 pr-1`}
                    >
                    Transport <TbTrain fontSize={"1.2rem"} />
                    </button>
                    <button
                    onClick={() => setTabs("visa")}
                    className={`text-black flex items-center gap-0.5 lg:text-base md:text-sm text-xs font-semibold lg:pl-0 md:pl-2 pl-1 border-[#00000080] lg:pr-4 md:pr-2 pr-1 `}
                    >
                    Apply for visa <BsPassport fontSize={"1.2rem"}/>
                    </button>
                </div>

                <div className=' '>
                        <div>
                            <div>
                            <div className='flex mb-2 gap-7 justify-center '>
                            <div className='flex items-center gap-1 relative' onClick={oneWay}>
                                <p className='text-sm text-white font-medium ' >One Way</p>
                                {
                                    oneway && <div className='w-[80px] h-[2px] bg-white absolute -bottom-1 -left-[10px] '></div>
                                }
                            </div>

                            <div className='flex items-center gap-1 relative ' onClick={roundWay}>
                                
                                <p className='text-sm text-white font-medium text-center'>Round Way</p>
                                {
                                    roundway && <div className='w-[80px] h-[2px] bg-white absolute -bottom-1 -left-[2px] '></div>
                                }
                                
                            </div>

                            <div className='flex items-center gap-1 relative' onClick={multi} >
                                <p className='text-sm text-white font-medium opacity-25'>Multi City</p>
                                {
                                    multicity && <div className='w-[80px] h-[2px] bg-white absolute -bottom-1 -left-[2px] '></div>
                                }
                            </div>
                        </div>
                            </div>

                            {
                                oneway && <Onway/>
                            }
                            {
                                roundway && <RoundWay/>
                            }
                            {
                                multicity && <Multicity/>
                            }
                            


                        </div>
                </div>
                
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;

{/* <div className=' '>
                    <div>
                        <div>
                        <div className='flex mb-10 gap-7 justify-center '>
                        <div className='flex items-center gap-1 relative' onClick={oneWay}>
                            <p className='text-sm text-[#131111] font-medium ' >One Way</p>
                            {
                                oneway && <div className='w-[80px] h-[2px] bg-black absolute -bottom-1 -left-[10px] '></div>
                            }
                        </div>

                        <div className='flex items-center gap-1 relative ' onClick={roundWay}>
                            
                            <p className='text-sm text-[#131111] font-medium text-center'>Round Way</p>
                            {
                                roundway && <div className='w-[80px] h-[2px] bg-black absolute -bottom-1 -left-[2px] '></div>
                            }
                            
                        </div>

                        <div className='flex items-center gap-1 relative' onClick={multi} >
                            <p className='text-sm text-[#131111] font-medium '>Multi City</p>
                            {
                                multicity && <div className='w-[80px] h-[2px] bg-black absolute -bottom-1 -left-[2px] '></div>
                            }
                        </div>
                    </div>
                        </div>

                        {
                            oneway && <Onway/>
                        }
                        {
                            roundway && <RoundWay/>
                        }
                        {
                            multicity && <Multicity/>
                        }
                        


                    </div>
                </div> */}