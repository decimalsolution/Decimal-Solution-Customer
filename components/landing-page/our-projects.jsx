"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Carousel from "../generic/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Link } from "lucide-react";

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

export default function OurProjects() {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-16 flex-wrap ">
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
        {projects.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8 group ">
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 duration-500 transition-all flex flex-col items-center justify-center gap-4 p-8">
                <h4 className="text-center text-white text-3xl font-bold uppercase">
                  {item.title}
                </h4>
                <p className="text-center text-white text-xl">
                  {item.description}
                </p>
                <div className="w-16 h-16 bg-white grid place-items-center rounded-full text-primary">
                  <Link size={36} strokeWidth={3} />
                </div>
              </div>{" "}
            </div>
          </SwiperSlide>
        ))}
      </Carousel>

      <button className="bg-primary block w-72 py-4 text-white font-medium text-2xl rounded-xl">
        View All
      </button>
    </div>
  );
}
