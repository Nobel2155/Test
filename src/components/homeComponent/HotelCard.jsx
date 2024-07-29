"use client";
import React from "react";
import Image from "next/image";
import "@/components/homeComponent/css/hoverCard.css";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import seePearl from "@/assets/homepage/bookHotel/seePearl.png";
import atlantis from "@/assets/homepage/bookHotel/atlantis.png";
import heimat from "@/assets/homepage/bookHotel/heimat.png";
import burjAlArab from "@/assets/homepage/bookHotel/burjAlArab.png";
import merina from "@/assets/homepage/bookHotel/marina.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FiSquare } from "react-icons/fi";

const HotelCard = () => {
    return (
        <div className='bg-[#F5F5F5] p-5'>
            <div className='max-w-[1200px] mx-auto mb-10'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-[32px] text-[#282828] font-[500]'>
                            Book Hotel on best Price
                        </h1>
                        <p className='text-xl text-[#282828]'>
                            Get the best hotel with best service & price
                        </p>
                    </div>
                    <div className='underline lg:text-end md:text-center text-center'>
                        <a href=''>See all</a>
                    </div>
                </div>
                <div className='pt-5'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className='!pb-10'
                    >
                        <SwiperSlide>
                            <div
                                data-aos='fade-up'
                                className='w-[228px] h-[300px] group mx-auto bg-white shadow-md rounded-md overflow-hidden'
                            >
                                <Image
                                    src={seePearl}
                                    alt='Apartment'
                                    className='w-full h-[138px] group-hover:scale-105 duration-500 object-cover rounded-t-md outline-none'
                                />

                                <div className='p-3'>
                                    <div>
                                        <h2 className='text-[12px] font-[500] text-[#282828]'>
                                            Sea Pearl
                                        </h2>
                                        <p className='text-[10px] text-[#282828]'>
                                            Cox&apos;s Bazar , Bangladesh
                                        </p>

                                        <div className='flex justify-between'>
                                            <p className='text-[#00703E] text-[10px]'>
                                                BDT10,200{" "}
                                            </p>
                                            <div className='flex gap-x-2'>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a href=''>
                                                        <PiShareFatThin />
                                                    </a>
                                                </div>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a
                                                        href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                        target='_blank'
                                                    >
                                                        <FaWhatsapp />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[10px] text-[#7A7A7A]'>
                                            Unwind The Pearl Of Luxury
                                        </p>
                                    </div>

                                    <div className='flex items-center mt-3 justify-around'>
                                        <div className='flex items-center gap-1'>
                                            <IoBedSharp color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                3 Beds
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FaBath color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A] '>
                                                2 Baths
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FiSquare color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                300 Sq ft
                                            </span>
                                        </div>
                                    </div>
                                    <button className='w-full text-sm py-0.5 mt-4 text-[#00703E] border border-[#00703E] rounded-md'>
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                data-aos='fade-up'
                                className='w-[228px] h-[300px] mx-auto group bg-white shadow-md rounded-md overflow-hidden'
                            >
                                <Image
                                    src={burjAlArab}
                                    alt='Apartment'
                                    className='w-full h-[138px] group-hover:scale-105 duration-500 object-cover roundedt-md outline-none'
                                />

                                <div className='p-3'>
                                    <div>
                                        <h2 className='text-[12px] font-[500] text-[#282828]'>
                                            Burj Al Arab
                                        </h2>
                                        <p className='text-[10px] text-[#282828]'>
                                            Umm Suqeim 3 - Down town ,Dubai.
                                        </p>

                                        <div className='flex justify-between'>
                                            <p className='text-[#00703E] text-[10px]'>
                                                BDT 55,000
                                            </p>
                                            <div className='flex gap-x-2'>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a href=''>
                                                        <PiShareFatThin />
                                                    </a>
                                                </div>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a
                                                        href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                        target='_blank'
                                                    >
                                                        <FaWhatsapp />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[10px] text-[#7A7A7A]'>
                                            Jumeirah Burj Al Arab 7 star hotel
                                        </p>
                                    </div>

                                    <div className='flex items-center mt-3 justify-around'>
                                        <div className='flex items-center gap-1'>
                                            <IoBedSharp color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                1 Beds
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FaBath color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A] '>
                                                2 Baths
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FiSquare color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                250 Sq ft
                                            </span>
                                        </div>
                                    </div>
                                    <button className='w-full text-sm py-0.5 mt-4 text-[#00703E] border border-[#00703E] rounded-md'>
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                data-aos='fade-up'
                                className='w-[228px] h-[300px] mx-auto group bg-white shadow-md rounded-md overflow-hidden'
                            >
                                <Image
                                    src={heimat}
                                    alt='Apartment'
                                    className='w-full h-[138px] group-hover:scale-105 duration-500 object-cover roundedt-md outline-none'
                                />

                                <div className='p-3'>
                                    <div>
                                        <h2 className='text-[12px] font-[500] text-[#282828]'>
                                            25h Heimat Apartment
                                        </h2>
                                        <p className='text-[10px] text-[#282828]'>
                                            Down Town , Dubai.
                                        </p>

                                        <div className='flex justify-between'>
                                            <p className='text-[#00703E] text-[10px]'>
                                                BDT 25,000
                                            </p>
                                            <div className='flex gap-x-2'>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a href=''>
                                                        <PiShareFatThin />
                                                    </a>
                                                </div>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a
                                                        href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                        target='_blank'
                                                    >
                                                        <FaWhatsapp />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[10px] text-[#7A7A7A]'>
                                            25Hours Heimat at Downtown Offers
                                            exquisite studios
                                        </p>
                                    </div>

                                    <div className='flex items-center mt-3 justify-around'>
                                        <div className='flex items-center gap-1'>
                                            <IoBedSharp color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                2 Beds
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FaBath color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A] '>
                                                1 Baths
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FiSquare color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                300 Sq ft
                                            </span>
                                        </div>
                                    </div>
                                    <button className='w-full text-sm py-0.5 mt-4 text-[#00703E] border border-[#00703E] rounded-md'>
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                data-aos='fade-up'
                                className='w-[228px] h-[300px] mx-auto group bg-white shadow-md rounded-md overflow-hidden'
                            >


                                <div className='p-3'>
                                    <div>
                                        <h2 className='text-[12px] font-[500] text-[#282828]'>
                                            Atlantis, The Palm
                                        </h2>
                                        <p className='text-[10px] text-[#282828]'>
                                            CDubai Beach, Dubai HoteL.
                                        </p>

                                        <div className='flex justify-between'>
                                            <p className='text-[#00703E] text-[10px]'>
                                                BDT 48,000
                                            </p>
                                            <div className='flex gap-x-2'>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a href=''>
                                                        <PiShareFatThin />
                                                    </a>
                                                </div>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a
                                                        href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                        target='_blank'
                                                    >
                                                        <FaWhatsapp />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[10px] text-[#7A7A7A]'>
                                            An entertainment destination unlike
                                            any other,Atlantis Dubai is beyond
                                            anything you've ever imagined.
                                        </p>
                                    </div>

                                    <div className='flex items-center mt-3 justify-around'>
                                        <div className='flex items-center gap-1'>
                                            <IoBedSharp color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                1 Beds
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FaBath color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A] '>
                                                1 Baths
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FiSquare color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                350 Sq ft
                                            </span>
                                        </div>
                                    </div>
                                    <button className='w-full text-sm py-0.5 mt-4 text-[#00703E] border border-[#00703E] rounded-md'>
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                data-aos='fade-up'
                                className='w-[228px] h-[300px] group mx-auto bg-white shadow-md rounded-md overflow-hidden'
                            >
                                <Image
                                    src={merina}
                                    alt='Apartment'
                                    className='w-full h-[138px] group-hover:scale-105 duration-500 object-cover roundedt-md outline-none'
                                />

                                <div className='p-3'>
                                    <div>
                                        <h2 className='text-[12px] font-[500] text-[#282828]'>
                                            Marina Bay Sands
                                        </h2>
                                        <p className='text-[10px] text-[#282828]'>
                                            Singapore
                                        </p>

                                        <div className='flex justify-between'>
                                            <p className='text-[#00703E] text-[10px]'>
                                                BDT 25,000
                                            </p>
                                            <div className='flex gap-x-2'>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a href=''>
                                                        <PiShareFatThin />
                                                    </a>
                                                </div>
                                                <div className='border text-[#B0B0B0] border-[#B0B0B0] p-[1px]'>
                                                    <a
                                                        href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                        target='_blank'
                                                    >
                                                        <FaWhatsapp />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[10px] text-[#7A7A7A]'>
                                            WHERE LUXURY UNFOLDS AT EVERY TURN
                                        </p>
                                    </div>

                                    <div className='flex items-center mt-3 justify-around'>
                                        <div className='flex items-center gap-1'>
                                            <IoBedSharp color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                3 Beds
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FaBath color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A] '>
                                                2 Baths
                                            </span>
                                        </div>
                                        <div className='border h-3'></div>
                                        <div className='flex items-center gap-1'>
                                            <FiSquare color='#7A7A7A' />
                                            <span className='text-[10px] text-[#7A7A7A]'>
                                                300 Sq ft
                                            </span>
                                        </div>
                                    </div>
                                    <button className='w-full text-sm py-0.5 mt-4 text-[#00703E] border border-[#00703E] rounded-md'>
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
