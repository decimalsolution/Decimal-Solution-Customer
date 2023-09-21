"use client";

import Carousel from "@/components/generic/carousel";
import PageIntroduction from "@/components/generic/page-introduction";
import ServiceCard from "@/components/generic/service-card";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";

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

const headings = [
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR",
];
export default function Portfolio() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <PageIntroduction title={"Our Projects"} image={"/portfolio.jpg"} />
      <div className="pt-24 flex flex-col gap-5 items-center">
        <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
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

        {headings.map((heading, index) => (
          <div className="w-full flex flex-col items-center mb-16">
            <p
              className={cn(
                "landing-page-subheading",
                "ml-8 !mb-8 w-full px-24"
              )}
            >
              {heading}
            </p>
            <Carousel>
              {projects.map((item, i) => (
                <SwiperSlide key={"our-projects-" + i + "-key"}>
                  <div className="w-full h-full flex flex-col items-center justify-center border-[3px] border-primary rounded-3xl relative overflow-hidden gap-8 group ">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 duration-500 transition-all flex flex-col items-center justify-center gap-4 p-8">
                      <h4 className="text-center text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase">
                        {item.title}
                      </h4>
                      <p className="text-center text-white text-sm md:text-md lg:text-lg xl:text-xl">
                        {item.description}
                      </p>
                      <div className="w-10 h-10 2xl:w-16 2xl:h-16 bg-white grid place-items-center rounded-full text-primary">
                        <Link strokeWidth={3} className="w-1/2 h-1/2" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        ))}

        <div>
          <p className="landing-page-subheading ">Our Projects</p>
          <h2 className="landing-page-heading">Some Latest Client Projects</h2>
        </div>

        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ServiceCard
              key={"our-projects-card-" + index + "-key"}
              title={"Project Title"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting,  Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley"
              }
              image={`/digital-marketing/image-${index + 1}.png`}
              showBackground
              showButton
              reverse={index % 2 !== 0}
            />
          ))}
      </div>
    </div>
  );
}
