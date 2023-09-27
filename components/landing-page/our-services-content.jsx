"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Carousel from "../generic/carousel";
import { Link } from "lucide-react";
import { useCallback } from "react";
import NextLink from "next/link";

export default function OurServicesContent({ services }) {
  const getLink = useCallback((service) => {
    const title = service.title.toLowerCase();
    if (title.includes("web")) {
      return "services/website-development";
    } else if (title.includes("digital")) {
      return "services/digital-marketing";
    } else if (title.includes("mobile")) {
      return "services/mobile-app-development";
    } else if (title.includes("graphic")) {
      return "services/graphics-designing";
    } else if (title.includes("erp")) {
      return "services/erp";
    } else if (title.includes("ar")) {
      return "services/ar-vr";
    } else {
      return "services/website-development";
    }
  }, []);
  return (
    <Carousel>
      {services.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8 group">
            <div className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-primary rounded-full -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-left-5 lg:-top-5 xl:-top-6 xl:-left-6 2xl:-top-8 2xl:-left-7 grid place-items-center">
              <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 lg:mt-3">
                0{i + 1}
              </p>
            </div>
            <div>
              <Image
                src={item.homeImage}
                alt={item.title}
                width={130}
                height={130}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg 2xl:text-3xl font-semibold">{item.title}</h3>
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 duration-500 transition-all flex flex-col items-center justify-center gap-4 p-8">
              <p className="text-center text-white text-sm md:text-md lg:text-lg xl:text-xl">
                {item.shortDescription}
              </p>
              <NextLink href={getLink(item)}>
                <div className="w-10 h-10 2xl:w-16 2xl:h-16 bg-white grid place-items-center rounded-full text-primary">
                  <Link strokeWidth={3} className="w-1/2 h-1/2" />
                </div>
              </NextLink>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
