"use client";

import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./slider-client.css";
import { useState, useEffect } from "react";
import Slider from "./slider";

const headings = [
  "Web and Mobile App Development",
  "CRM Solutions Tailored to Your Business",
  "Creative Design for Exceptional User Experiences",
  "Your One-Stop Shop for Software Solutions   ",
];

export default function SliderClient() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Slider />;
  }

  return (
    <div className="max-h-[650px] h-max w-full overflow-hidden aspect-video xl-aspect-[1920/700]  2xl:aspect-[1920/700] ">
      <Swiper
        navigation
        id="slider"
        style={{
          width: "100%",
          height: "100%",
        }}
        className=""
        modules={[Pagination, Autoplay]}
        pagination={pagination}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {/* <SwiperSlide key={index} className="py-4"> */}
        <div className="h-full w-[calc(5*100vw)] flex animate-home-carousel">
          {new Array(4).fill(0).map((_, i) => (
            <SwiperSlide
              className="w-screen  aspect-video relative"
              key={"slider-" + i + "-key"}
            >
              <Image
                src={`/Slider Images/Slider-${(i % 4) + 1}.png`}
                alt={`Slider images ${i + 1}`}
                fill
                priority={true}
                className="object-cover object-center absolute inset-0"
              />
              <Image
                src="/slider-overlay.png"
                alt="Slider Overlay"
                fill
                priority={true}
                className="absolute inset-0"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-start mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
                <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white uppercase max-w-[150px] md:max-w-xs lg:max-w-md xl:max-w-xl leading-none">
                  {headings[i]}
                </h1>
                <Link href="/contact-us">
                  <button className="bg-white px-2 sm:px-6 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-4 xl:py-6 rounded-sm sm:rounded-md lg:rounded-xl mt-2 sm:mt-4 lg:mt-8 text-xs sm:text-lg xl:text-xl 2xl:text-2xl text-primary font-semibold flex gap-2 md:gap-4 items-center ">
                    <span>Contact Us</span>
                    <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
        {/* </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
