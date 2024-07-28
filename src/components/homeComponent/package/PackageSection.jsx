"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import PackageCard from "./PackageCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Holiday from "../../homeComponent/holiday/Holiday";
import Image from "next/image";
import supportImg from "../../../assets/homepage/package/image 126.png";

const PackageSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 ">
      <div className="flex items-center lg:justify-end md:justify-center justify-center">
        <div className="flex items-center justify-between py-8 lg:w-2/3">
          <div className="text-center">
            <h1 className="text-[32px] p-1 font-[500]">Trip Package</h1>
            <div className="pt-1">
              <p className="text-xl px-4">
                Lorem ipsum dolor sit amet consectetu <br /> Eos, expedita
                eligendi!
              </p>
            </div>
          </div>
          <div className="p-1 flex justify-center items-center flex-col border rounded-full border-[#00703E] w-28 h-28">
            <Image
              className="mx-auto"
              src={supportImg}
              width={40}
              height={20}
              alt="Support Image"
            />
            <p className="text-center font-[600] text-[#00703E] text-[12px]">
              Live Support
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
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
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper !px-8 !pb-10"
        >
          <SwiperSlide>
            <PackageCard />
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard />
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard />
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard />
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard />
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard />
          </SwiperSlide>
          <div className="swiper-pagination !mt-10"></div>
        </Swiper>
      </div>
      <Holiday />
    </div>
  );
};

export default PackageSection;
