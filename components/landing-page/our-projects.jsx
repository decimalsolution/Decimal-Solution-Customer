"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Carousel from "../generic/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Link } from "lucide-react";
import NextLink from "next/link";

const buttons = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR",
];

const projects = [
  {
    title: "Kaiya",
    description: "A platform for the people who want to learn new skills.",
    image: "/Projects/Project-1.png",
  },
  {
    title: "Satoshi VR",
    description: "A platform for the people who want to learn new skills.",
    image: "/Projects/Project-2.png",
  },
  {
    title: "Plant Care",
    description: "A platform for the people who want to learn new skills.",
    image: "/Projects/Project-3.png",
  },
  {
    title: "Phot-ock",
    description: "A platform for the people who want to learn new skills.",
    image: "/Projects/Project-4.png",
  },
  {
    title: "Inbox ERP Solution",
    description: "A platform for the people who want to learn new skills.",
    image: "/Projects/Project-5.png",
  },
  {
    title: "Nexen Marketing",
    description: "A platform for the people who want to learn new skills.",
    image: "/Projects/Project-6.png",
  },
];

export default async function OurProjects() {
  const [selected, setSelected] = useState("");

  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/homeScreenProjects/all"
  );

  const data = await res.json();

  const projects = data.data;

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 lg:gap-16 flex-wrap py-8 lg:py-12">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading">Our Projects</p>
          <h2 className="landing-page-heading">Some Latest Client Projects</h2>
        </div>
      </div>
      <div className="flex items-center justify-center  gap-2 sm:gap-4 flex-wrap">
        {buttons.map((buttonText, index) => (
          <button
            key={"our-projects-buttons-" + index + "-key"}
            className={cn(
              "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-200",
              selected === buttonText && "bg-primary text-white"
            )}
            onClick={() => {
              setSelected(buttonText);
            }}
          >
            {buttonText}
          </button>
        ))}
      </div>

      <Carousel>
        {projects.map((item, i) => (
          <SwiperSlide key={"our-projects-" + i + "-key"}>
            <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8 group ">
              <div>
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 duration-500 transition-all flex flex-col items-center justify-center gap-4 p-8">
                <h4 className="text-center text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase">
                  {item.title}
                </h4>
                <p className="text-center text-white text-sm md:text-md lg:text-lg xl:text-xl line-clamp-6">
                  {item.shortDescription}
                </p>
                <NextLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 2xl:w-16 2xl:h-16 bg-white grid place-items-center rounded-full text-primary">
                    <Link strokeWidth={3} className="w-1/2 h-1/2" />
                  </div>
                </NextLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>

      <button className="bg-primary block sm:w-36 md:w-40 lg:w-56 xl:w-64 2xl:w-72 px-4 py-2 lg:py-4 text-white font-medium text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-xl">
        View All
      </button>
    </div>
  );
}
