"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Carousel from "../generic/carousel";
import { Link } from "lucide-react";
const data = [
  {
    title: "Website Development",
    icon: "/icons/website-development.svg",
    description:
      "We are offering a huge variety of services from web development to web hosting.",
  },
  {
    title: "Mobile App Development",
    icon: "/icons/mobile-app-development.svg",
    description:
      "Create robust solution for each industry across a vast use base.",
  },
  {
    title: "Graphics Designing",
    icon: "/icons/graphics-designing.svg",
    description:
      "We offer responsive design services for websites of every technology & framework.",
  },
  {
    title: "Digital Marketing",
    icon: "/icons/digital-marketing.svg",
    description:
      "We provide channels to attract engage and convert customers online",
  },
  {
    title: "ERP & Business Solutions",
    icon: "/icons/erp.svg",
    description:
      "We tailor the enterprise applications & business solutions according to your needs.",
  },
  {
    title: "AR/VR Games",
    icon: "/icons/ar-vr.svg",
    description:
      "We provide a variety of AR/VR development services worldwide.",
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
            <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8 group">
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
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 duration-500 transition-all flex flex-col items-center justify-center gap-4 p-8">
                <p className="text-center text-white text-xl">
                  {item.description}
                </p>
                <div className="w-16 h-16 bg-white grid place-items-center rounded-full text-primary">
                  <Link size={36} strokeWidth={3} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
}
