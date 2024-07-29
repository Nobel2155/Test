"use client";
import React from "react";
import "@/components/homeComponent/css/hoverCard.css";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import nisshan from "@/assets/homepage/nisshan-petrol.png";
import fielder from "@/assets/homepage/fielder.png";
import voxy from "@/assets/homepage/voxy.png";
import miniBus from "@/assets/homepage/mini-bus.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const TransportCard = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-[1200px] mx-auto py-3'>
                <div className='text-center mb-1 lg:pl-5'>
                    <h1 className='text-3xl p-1 text-center'>Transport</h1>
                    <div className='pt-1'>
                        <p className='text-xl text-center lg:px-0 md:px-4 px-4'>
                            Great offers at competitive rates from the largest
                            vehicle rental
                        </p>
                    </div>
                </div>

                <div className='underline lg:text-end md:text-center text-center lg:mr-11 mb-2 md:mr-0 sm:mr-0 '>
                    <a href=''>See all</a>
                </div>

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
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className='!pb-10'
                >
                    <SwiperSlide>
                        <div
                            data-aos='fade-up'
                            className='bg-white group w-[252px] h-[280px] rounded-lg shadow-md p-1 mx-auto'
                        >
                            <Image
                                className='w-[250px] mt-2 mb-1 group-hover:scale-105 duration-500'
                                src={nisshan}
                                alt='Nishan Petrol'
                            />
                            <div className='p-3'>
                                <h2 className='text-xl font-bold'>
                                    Nissan Patrol
                                </h2>
                                <p className='text-xs'>
                                    DXB Dubai Airport to around UAE
                                </p>
                                {/* <p>Nissan Safety Sense™ 3.0 *</p> */}
                                <div className='flex justify-between items-center mt-6'>
                                    <div className='flex text-orange-400 gap-x-1 text-sm'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <div className='flex gap-x-2'>
                                        <div>
                                            <a href=''>
                                                <PiShareFatThin />
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                target='_blank'
                                            >
                                                <FaWhatsapp />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            data-aos='fade-up'
                            className='bg-white group w-[252px] h-[280px] rounded-lg shadow-md p-1 mx-auto'
                        >
                            <Image
                                className='w-[250px] mb-1 group-hover:scale-105 duration-500'
                                src={fielder}
                                alt='Toyota Camry'
                            />
                            <div className='p-3'>
                                <h2 className='text-xl font-bold'>
                                    Toyota Fielder
                                </h2>
                                <p className='text-xs'>
                                    DAC Airport to Anywhere in Bangladesh
                                </p>
                                {/* <p>Toyota Safety Sense™ 3.0 *</p> */}
                                <div className='flex justify-between items-center mt-2'>
                                    <div className='flex text-orange-400 gap-1 text-sm'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <div className='flex gap-x-2'>
                                        <div>
                                            <a href=''>
                                                <PiShareFatThin />
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                target='_blank'
                                            >
                                                <FaWhatsapp />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            data-aos='fade-up'
                            className='bg-white group w-[252px] h-[280px] rounded-lg shadow-md p-1 mx-auto'
                        >
                            <Image
                                className='w-[250px] mb-1 group-hover:scale-105 duration-500'
                                src={voxy}
                                alt='Toyota voxy'
                            />
                            <div className='p-3'>
                                <h2 className='text-xl font-bold'>
                                    Toyota Voxy
                                </h2>
                                <p className='text-xs'>
                                    Dhaka to Cox&apos;s Bazar
                                </p>
                                {/* <p>Toyota Safety Sense™ 3.0 *</p> */}
                                <div className='flex justify-between items-center mt-2'>
                                    <div className='flex text-orange-400 gap-1 text-sm'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <div className='flex gap-x-2'>
                                        <div>
                                            <a href=''>
                                                <PiShareFatThin />
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                target='_blank'
                                            >
                                                <FaWhatsapp />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            data-aos='fade-up'
                            className='bg-white group w-[252px] h-[280px] rounded-lg shadow-md p-1 mx-auto'
                        >
                            <Image
                                className='w-[250px] mb-1 group-hover:scale-105 duration-500'
                                src={miniBus}
                                alt='Toyota Camry'
                            />
                            <div className='p-3'>
                                <h2 className='text-xl font-bold'>
                                    Nissan Civilian
                                </h2>
                                <p className='text-xs'>
                                    Dhaka to Around the Bangladesh
                                </p>
                                {/* <p>Toyota Safety Sense™ 3.0 *</p> */}
                                <div className='flex justify-between items-center mt-2'>
                                    <div className='flex text-orange-400 gap-1 text-sm'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <div className='flex gap-x-2'>
                                        <div>
                                            <a href=''>
                                                <PiShareFatThin />
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href='https://wa.me/message/PHWBQ3GPSKT5O1'
                                                target='_blank'
                                            >
                                                <FaWhatsapp />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TransportCard;
