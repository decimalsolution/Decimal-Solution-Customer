"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Carousel from "../generic/carousel";
const data = [
  {
    title: "Website Development",
    icon: "/icons/website-development.svg",
  },
  {
    title: "Mobile App Development",
    icon: "/icons/mobile-app-development.svg",
  },
  {
    title: "Graphics Designing",
    icon: "/icons/graphics-designing.svg",
  },
  {
    title: "Digital Marketing",
    icon: "/icons/digital-marketing.svg",
  },
  {
    title: "ERP & Business Solutions",
    icon: "/icons/erp.svg",
  },
  {
    title: "AR/VR Games",
    icon: "/icons/ar-vr.svg",
  },
];

export default function OurServices() {
  return (
    <div className="flex flex-col items-center gap-8 py-20 bg-[url('/our-services-bg.png')] bg-cover bg-no-repeatC">
      <div className="flex flex-col items-center">
        <div>
          <p className="text-2xl text-primary before:content-['<'] before:inline-block before:mr-1  after:content-['>'] after:inline-block after:ml-1">
            Our Services
          </p>
          <h2 className="text-4xl font-semibold">
            Our Service For Your Business
          </h2>
        </div>
      </div>

      <Carousel>
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8">
              <div className="absolute w-32 h-32 bg-primary rounded-full -top-8 -left-7 grid place-items-center">
                <p className="text-white text-4xl font-semibold mt-3">
                  0{i + 1}
                </p>
              </div>
              <div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-3xl font-semibold">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
}
