"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Feedback = ({ feedbackData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
        className="!py-10"
      >
        {feedbackData?.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div
              className={`bg-base-100 h-48 w-[350px] py-5 px-4 rounded-md border transition-transform duration-300 ${
                activeIndex === index - 1 ? "transform scale-110" : ""
              }`}
            >
              <div className="flex gap-4 items-center">
                <Image
                  className="w-16 h-16 rounded-full object-cover"
                  src={feedback.image}
                  width={40}
                  height={40}
                  alt={`Picture of ${feedback.name}`}
                />
                <div>
                  <h1 className="text-xl">{feedback.name}</h1>
                  <div className="text-orange-400 flex gap-1 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-sm pt-3">{feedback.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
