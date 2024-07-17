"use client";
import React from "react";
import "@/components/homeComponent/css/hoverCard.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import picture1 from "@/assets/homepage/hamsDeal/picture1.png";
import picture2 from "@/assets/homepage/hamsDeal/picture2.png";
import picture3 from "@/assets/homepage/hamsDeal/picture3.png";
import picture4 from "@/assets/homepage/hamsDeal/picture4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HamsDeal = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-start mb-1 lg:pl-5">
        <h1 className="text-3xl p-1 lg:text-left md:text-center text-center">
          HAMS Deals
        </h1>
        <div className="pt-1">
          <p className="text-xl lg:text-start md:text-center text-center lg:px-0 md:px-4 px-4">
          Save your money and get the Best & Cheap Airfare deals in ticket than other airlines.
          </p>
        </div>
      </div>

      <div className="underline lg:text-end md:text-center text-center lg:mr-11 mb-2 md:mr-0 sm:mr-0 ">
        <a href="">See all</a>
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
        className="!pb-10"
      >
        <SwiperSlide>
          <div className="w-[242px] mx-auto group bg-white shadow-md overflow-hidden rounded-md">
            <div>
              <Image
                src={picture1}
                alt="Apartment"
                className="w-full h-[130px] object-cover object-center group-hover:scale-105 duration-500 rounded-t-md"
              />
              <div className="p-1">
                <div>
                  <h2 className="text-sm text-[#282828] mb-1">
                    Dhaka to Dubai on 30 Jul
                  </h2>
                  <div className="flex justify-between">
                    <div className="mb-1">
                      <p className="text-xs text-gray-600 p-1">Baggage</p>
                      <p className="text-xs text-gray-600 p-1">
                        Direct
                      </p>
                      <p className="text-xs text-gray-600 p-1">Meal</p>
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
                    <div className="flex gap-x-2 ">
                      <p className="text-red-500 text-sm line-through">
                        BDT 38,500{" "}
                      </p>
                      <p className="text-sm">BDT 40,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[242px] mx-auto group bg-white shadow-md overflow-hidden rounded-md">
            <div>
              <Image
                src={picture2}
                alt="Apartment"
                className="w-full h-[130px] object-cover object-center group-hover:scale-105 duration-500 rounded-t-md"
              />
              <div className="p-1">
                <div>
                  <h2 className="text-sm text-[#282828] mb-1">
                    Dhaka to Kuala Lumpur 02 Aug
                  </h2>
                  <div className="flex justify-between">
                    <div className="mb-1">
                      <p className="text-xs text-gray-600 p-1">Baggage</p>
                      <p className="text-xs text-gray-600 p-1">
                        Direct
                      </p>
                      <p className="text-xs text-gray-600 p-1">Meal</p>
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
                    <div className="flex gap-x-2 ">
                      <p className="text-red-500 text-sm line-through">
                        BDT 30,500{" "}
                      </p>
                      <p className="text-sm">BDT 32,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[242px] mx-auto group bg-white shadow-md overflow-hidden rounded-md">
            <div>
              <Image
                src={picture3}
                alt="Apartment"
                className="w-full h-[130px] object-cover object-center group-hover:scale-105 duration-500 rounded-t-md"
              />
              <div className="p-1">
                <div>
                  <h2 className="text-sm text-[#282828] mb-1">
                    Dhaka to Riadh on 05 Aug
                  </h2>
                  <div className="flex justify-between">
                    <div className="mb-1">
                      <p className="text-xs text-gray-600 p-1">Baggage</p>
                      <p className="text-xs text-gray-600 p-1">
                        Transit 3.04 h
                      </p>
                      <p className="text-xs text-gray-600 p-1">Meal</p>
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
                    <div className="flex gap-x-2 ">
                      <p className="text-red-500 text-sm line-through">
                        BDT 42,500{" "}
                      </p>
                      <p className="text-sm">BDT 39,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[242px] mx-auto group bg-white shadow-md overflow-hidden rounded-md">
            <div>
              <Image
                src={picture4}
                alt="Apartment"
                className="w-full h-[130px] object-cover object-center group-hover:scale-105 duration-500 rounded-t-md"
              />
              <div className="p-1">
                <div>
                  <h2 className="text-sm text-[#282828] mb-1">
                    Dhaka to Dammam 30 July
                  </h2>
                  <div className="flex justify-between">
                    <div className="mb-1">
                      <p className="text-xs text-gray-600 p-1">Baggage</p>
                      <p className="text-xs text-gray-600 p-1">
                        Transit 3.04 h
                      </p>
                      <p className="text-xs text-gray-600 p-1">Meal</p>
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
                    <div className="flex gap-x-2 ">
                      <p className="text-red-500 text-sm line-through">
                        BDT 36,500{" "}
                      </p>
                      <p className="text-sm">BDT 38,00</p>
                    </div>
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

export default HamsDeal;
