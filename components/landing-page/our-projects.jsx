"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Carousel from "../generic/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const buttons = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR",
];

export default function OurProjects() {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-8 flex-wrap ">
      <div className="flex flex-col items-center">
        <div>
          <p className="text-2xl text-primary before:content-['<'] before:inline-block before:mr-1  after:content-['>'] after:inline-block after:ml-1">
            Our Projects
          </p>
          <h2 className="text-4xl font-semibold">
            Some Latest Client Projects
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {buttons.map((buttonText) => (
          <button
            className={cn(
              "text-xl px-4 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-200",
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
        {Array(6)
          .fill(0)
          .map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8 group ">
                <div>
                  <Image
                    src={`/Projects/Project-${i + 1}.png`}
                    alt={item.title}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/75 flex-col items-center justify-center opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
              </div>
            </SwiperSlide>
          ))}
      </Carousel>

      <button className="bg-primary block w-32 py-4 text-white text-2xl rounded-xl">
        View All
      </button>
    </div>
  );
}
