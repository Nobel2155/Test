"use client";
import React, { createContext } from "react";
import "@/components/homeComponent/css/hoverCard.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import dubai from "@/assets/homepage/exploreItem/dubai.png";
import saudi from "@/assets/homepage/exploreItem/saudi.png";
import thailand from "@/assets/homepage/exploreItem/thailand.png";
import pehelgram from "@/assets/homepage/exploreItem/pehelgram.png";

const ExploreCard = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="max-w-[1200px] mx-auto mb-20 mySwiper !px-8 !pb-9"
    >
      <div className="">
        <div className="lg:text-start md:text-start text-center mb-4">
          <h1 className="text-3xl p-1">Explore Everywhere</h1>
          <div className="p-1">
            <p className="text-xl">Find new sights and destinations that fit</p>
            <p className="text-xl">your interests and way of travel.</p>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex">
            <SwiperSlide>
              <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                <Image
                  src={dubai}
                  alt="Apartment"
                  className="w-full h-[138px] object-cover p-[5px] rounded-[15px]"
                />

                <div className="p-1">
                  <div>
                    <h2 className="text-sm text-[#282828] mb-1">
                      Dubai , UAE{" "}
                    </h2>
                    <div className="flex justify-between">
                      <div className="mb-1">
                        <p className="text-xs text-gray-600 p-1">
                          3 day 4 night
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Breakfast Included
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Free Transport
                        </p>
                      </div>
                      <div className="flex gap-x-2 pr-1 justify-center items-center">
                        <div>
                          <a href="">
                            <PiShareFatThin />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://wa.me/message/PHWBQ3GPSKT5O1"
                            target="_blank"
                          >
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
                        <p className="text-red-500 text-sm line-through">
                          $2,500{" "}
                        </p>
                        <p className="text-sm">$2,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                <Image
                  src={saudi}
                  alt="Apartment"
                  className="w-full h-[138px] object-cover p-[5px] rounded-[15px]"
                />

                <div className="p-1">
                  <div>
                    <h2 className="text-sm text-[#282828] mb-1">
                      Saudia Arabia
                    </h2>
                    <div className="flex justify-between">
                      <div className="mb-1">
                        <p className="text-xs text-gray-600 p-1">
                          5 day 4 night
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Breakfast Included
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Free Transport
                        </p>
                      </div>
                      <div className="flex gap-x-2 pr-1 justify-center items-center">
                        <div>
                          <a href="">
                            <PiShareFatThin />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://wa.me/message/PHWBQ3GPSKT5O1"
                            target="_blank"
                          >
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
                        <p className="text-red-500 text-sm line-through">
                          $2,500{" "}
                        </p>
                        <p className="text-sm">$2,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                <Image
                  src={thailand}
                  alt="Apartment"
                  className="w-full h-[138px] object-cover p-[5px] rounded-[15px]"
                />

                <div className="p-1">
                  <div>
                    <h2 className="text-sm text-[#282828] mb-1">
                      limestone cave rock Thailand
                    </h2>
                    <div className="flex justify-between">
                      <div className="mb-1">
                        <p className="text-xs text-gray-600 p-1">
                          3 day 4 night
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Breakfast Included
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Free Transport
                        </p>
                      </div>
                      <div className="flex gap-x-2 pr-1 justify-center items-center">
                        <div>
                          <a href="">
                            <PiShareFatThin />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://wa.me/message/PHWBQ3GPSKT5O1"
                            target="_blank"
                          >
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
                        <p className="text-red-500 text-sm line-through">
                          $2,500{" "}
                        </p>
                        <p className="text-sm">$2,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                <Image
                  src={pehelgram}
                  alt="Apartment"
                  className="w-full h-[138px] object-cover p-[5px] rounded-[15px]"
                />

                <div className="p-1">
                  <div>
                    <h2 className="text-sm text-[#282828] mb-1">
                      Pehelgram, Kashmir, India
                    </h2>

                    <div className="flex justify-between">
                      <div className="mb-1">
                        <p className="text-xs text-gray-600 p-1">
                          3 day 4 night
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Breakfast Included
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Free Transport
                        </p>
                      </div>
                      <div className="flex gap-x-2 pr-1 justify-center items-center">
                        <div>
                          <a href="">
                            <PiShareFatThin />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://wa.me/message/PHWBQ3GPSKT5O1"
                            target="_blank"
                          >
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
                        <p className="text-red-500 text-sm line-through">
                          $2,500{" "}
                        </p>
                        <p className="text-sm">$2,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                <Image
                  src={pehelgram}
                  alt="Apartment"
                  className="w-full h-[138px] object-cover p-[5px] rounded-[15px]"
                />

                <div className="p-1">
                  <div>
                    <h2 className="text-sm text-[#282828] mb-1">
                      Pehelgram, Kashmir, India
                    </h2>

                    <div className="flex justify-between">
                      <div className="mb-1">
                        <p className="text-xs text-gray-600 p-1">
                          3 day 4 night
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Breakfast Included
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Free Transport
                        </p>
                      </div>
                      <div className="flex gap-x-2 pr-1 justify-center items-center">
                        <div>
                          <a href="">
                            <PiShareFatThin />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://wa.me/message/PHWBQ3GPSKT5O1"
                            target="_blank"
                          >
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
                        <p className="text-red-500 text-sm line-through">
                          $2,500{" "}
                        </p>
                        <p className="text-sm">$2,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-[242px] mx-auto bg-white shadow-md rounded-lg card">
                <Image
                  src={pehelgram}
                  alt="Apartment"
                  className="w-full h-[138px] object-cover p-[5px] rounded-[15px]"
                />

                <div className="p-1">
                  <div>
                    <h2 className="text-sm text-[#282828] mb-1">
                      Pehelgram, Kashmir, India
                    </h2>

                    <div className="flex justify-between">
                      <div className="mb-1">
                        <p className="text-xs text-gray-600 p-1">
                          3 day 4 night
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Breakfast Included
                        </p>
                        <p className="text-xs text-gray-600 p-1">
                          Free Transport
                        </p>
                      </div>
                      <div className="flex gap-x-2 pr-1 justify-center items-center">
                        <div>
                          <a href="">
                            <PiShareFatThin />
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://wa.me/message/PHWBQ3GPSKT5O1"
                            target="_blank"
                          >
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
                        <p className="text-red-500 text-sm line-through">
                          $2,500{" "}
                        </p>
                        <p className="text-sm">$2,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default ExploreCard;
