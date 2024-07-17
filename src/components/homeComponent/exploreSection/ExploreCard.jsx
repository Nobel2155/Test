"use client";
import React from "react";
import "@/components/homeComponent/css/hoverCard.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import dubai from "@/assets/homepage/exploreItem/dubai.png";
import saudi from "@/assets/homepage/exploreItem/saudi.png";
import thailand from "@/assets/homepage/exploreItem/thailand.png";
import pehelgram from "@/assets/homepage/exploreItem/pehelgram.png";

const ExploreCard = () => {
  return (
    <div className="">
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
        className="!pb-10"
      >
        <SwiperSlide>
          <div className="w-[242px] group mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src={dubai}
              alt="Apartment"
              className="w-full h-[130px] object-cover group-hover:scale-105 duration-500 rounded-t-md"
            />

            <div className="p-1">
              <div>
                <h2 className="text-sm text-[#282828] mb-1">Dubai , UAE </h2>
                <div className="flex justify-between">
                  <div className="mb-1">
                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                    <p className="text-xs text-gray-600 p-1">
                      Breakfast Included
                    </p>
                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
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
                    <p className="text-red-500 text-sm line-through">BDT 100,000 </p>
                    <p className="text-sm">BDT 101,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[242px] group mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src={saudi}
              alt="Apartment"
              className="w-full h-[130px] object-cover group-hover:scale-105 duration-500 rounded-t-md"
            />

            <div className="p-1">
              <div>
                <h2 className="text-sm text-[#282828] mb-1">KSA Riyadh </h2>
                <div className="flex justify-between">
                  <div className="mb-1">
                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                    <p className="text-xs text-gray-600 p-1">
                      Breakfast Included
                    </p>
                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
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
                    <p className="text-red-500 text-sm line-through">BDT 95,000 </p>
                    <p className="text-sm">BDT 100,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[242px] group mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src={thailand}
              alt="Apartment"
              className="w-full h-[130px] object-cover group-hover:scale-105 duration-500 rounded-t-md"
            />

            <div className="p-1">
              <div>
                <h2 className="text-sm text-[#282828] mb-1">ThaiLand</h2>
                <div className="flex justify-between">
                  <div className="mb-1">
                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                    <p className="text-xs text-gray-600 p-1">
                      Breakfast Included
                    </p>
                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
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
                    <p className="text-red-500 text-sm line-through">BDT 45,000 </p>
                    <p className="text-sm">BDT 48,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[242px] group mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src={pehelgram}
              alt="Apartment"
              className="w-full h-[130px] object-cover group-hover:scale-105 duration-500 rounded-t-md"
            />

            <div className="p-1">
              <div>
                <h2 className="text-sm text-[#282828] mb-1">Kashmir </h2>
                <div className="flex justify-between">
                  <div className="mb-1">
                    <p className="text-xs text-gray-600 p-1">3 day 4 night</p>
                    <p className="text-xs text-gray-600 p-1">
                      Breakfast Included
                    </p>
                    <p className="text-xs text-gray-600 p-1">Free Transport</p>
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
                    <p className="text-red-500 text-sm line-through">BDT 40,00 </p>
                    <p className="text-sm">BDT 41,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ExploreCard;
