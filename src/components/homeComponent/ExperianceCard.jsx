"use client";
import React from "react";
import "@/components/homeComponent/css/hoverCard.css";
import Image from "next/image";
import nafakhum from "@/assets/homepage/nafakhum.png";
import sundorbon from "@/assets/homepage/sundhorbon.png";
import saintmartin from "@/assets/homepage/saintmartin.png";
import amazon from "@/assets/homepage/amazon.png";
import himachol from "@/assets/homepage/himachol.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ExperianceCard = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-2">
        <h1 className="text-[32px] lg:text-start md:text-center text-center">
          Experience the feel of camping
        </h1>
        <h5 className="text-[20px] lg:text-start md:text-center text-center">
          With Hams Fly you can experience the camping in unique places.
        </h5>
      </div>
      <div>
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
          className="!pb-10"
        >
          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] overflow-hidden rounded-md shadow-md mx-auto group">
              <Image
                src={nafakhum}
                alt=""
                className="object-cover object-center w-full group-hover:scale-105 duration-500 rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Nafakhum Waterfall Thanchi.
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    Waterfalls are poetry of nature, where water dances
                    gracefully over rugged terrain. In the pristine wilderness
                    of Bandarban, Bangladesh, lies a hidden gem that epitomizes
                    this natural splendour — Nafakhum Waterfall.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] overflow-hidden group rounded-md shadow-md mx-auto">
              <Image
                src={sundorbon}
                alt=""
                className="object-cover group-hover:scale-105 duration-500 object-center w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2 p-1">
                  <h6 className="text-xs font-semibold tracking-wide">
                    World Heritage Sundarban Adventure 
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    One of the world&apos;s largest mangrove ecosystems is yours
                    to explore with HAMS Sundarban Camping. Make a reservation
                    today to see a variety of animals!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] group overflow-hidden rounded-md shadow-md mx-auto">
              <Image
                src={saintmartin}
                alt=""
                className="object-cover object-center group-hover:scale-105 duration-500 w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Saint Martin - Teknaf
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    Saint Martin&apos;s, the one and only coral island of
                    Bangladesh, is a small island measuring eight square
                    kilometers. The visible landmass sinks during the tide.
                    Alternatively called the pearl of the sea, it is about 10 km
                    from the mainland at teknaf.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] group rounded-md overflow-hidden shadow-md mx-auto">
              <Image
                src={amazon}
                alt=""
                className="object-cover object-center group-hover:scale-105 duration-500 w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Amazon Rainforest camping
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    The Amazon is one of Earth&apos;s last refuges for jaguars,
                    harpy eagles, and pink river dolphins, and it is home to
                    sloths, black spider monkeys, and poison dart frogs. It
                    contains one in 10 known species on Earth, 40,000 plant
                    species, 3,000 freshwater fish species, and more than 370
                    types of reptiles.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] group overflow-hidden rounded-md shadow-md mx-auto">
              <Image
                src={himachol}
                alt=""
                className="object-cover object-center group-hover:scale-105 duration-500 w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Hampta Pass, Himachal Pradesh.
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    Camping is a cheap kind of therapy that brings you closer to
                    nature&apos;s treasures and embarks on a soul-cleansing
                    journey. The top camping locations in India provide
                    travelers with an amazing break from everyday life and
                    captivating experiences.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] overflow-hidden rounded-md shadow-md mx-auto group">
              <Image
                src={nafakhum}
                alt=""
                className="object-cover object-center w-full group-hover:scale-105 duration-500 rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Nafakhum Waterfall Thanchi.
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    Waterfalls are poetry of nature, where water dances
                    gracefully over rugged terrain. In the pristine wilderness
                    of Bandarban, Bangladesh, lies a hidden gem that epitomizes
                    this natural splendour — Nafakhum Waterfall.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] overflow-hidden group rounded-md shadow-md mx-auto">
              <Image
                src={sundorbon}
                alt=""
                className="object-cover group-hover:scale-105 duration-500 object-center w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2 p-1">
                  <h6 className="text-xs font-semibold tracking-wide">
                    World Heritage Sundarban Adventure 
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    One of the world&apos;s largest mangrove ecosystems is yours
                    to explore with HAMS Sundarban Camping. Make a reservation
                    today to see a variety of animals!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] group overflow-hidden rounded-md shadow-md mx-auto">
              <Image
                src={saintmartin}
                alt=""
                className="object-cover object-center group-hover:scale-105 duration-500 w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Saint Martin - Teknaf
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    Saint Martin&apos;s, the one and only coral island of
                    Bangladesh, is a small island measuring eight square
                    kilometers. The visible landmass sinks during the tide.
                    Alternatively called the pearl of the sea, it is about 10 km
                    from the mainland at teknaf.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] group rounded-md overflow-hidden shadow-md mx-auto">
              <Image
                src={amazon}
                alt=""
                className="object-cover object-center group-hover:scale-105 duration-500 w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Amazon Rainforest camping
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    The Amazon is one of Earth&apos;s last refuges for jaguars,
                    harpy eagles, and pink river dolphins, and it is home to
                    sloths, black spider monkeys, and poison dart frogs. It
                    contains one in 10 known species on Earth, 40,000 plant
                    species, 3,000 freshwater fish species, and more than 370
                    types of reptiles.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full max-w-[228px] h-[300px] group overflow-hidden rounded-md shadow-md mx-auto">
              <Image
                src={himachol}
                alt=""
                className="object-cover object-center group-hover:scale-105 duration-500 w-full rounded-t-md h-[130px]"
              />
              <div className="flex flex-col justify-between p-2">
                <div className="space-y-2">
                  <h6 className="text-xs font-semibold tracking-wide">
                    Hampta Pass, Himachal Pradesh.
                  </h6>
                  <p className="text-[10px] text-gray-800">
                    Camping is a cheap kind of therapy that brings you closer to
                    nature&apos;s treasures and embarks on a soul-cleansing
                    journey. The top camping locations in India provide
                    travelers with an amazing break from everyday life and
                    captivating experiences.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ExperianceCard;
