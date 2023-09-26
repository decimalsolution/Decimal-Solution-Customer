"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import Carousel from "../generic/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Link } from "lucide-react";
import NextLink from "next/link";

const buttons = [
  "All",
  "Web Development",
  "Mobile Development",
  "Graphic Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR Games",
];

export default function OurProjectsContent({ projects, services }) {
  const [selected, setSelected] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selected === "All") {
      return projects;
    } else {
      return projects.filter(
        (item) => item.category?.title?.toLowerCase() === selected.toLowerCase()
      );
    }
  }, [selected, projects]);

  console.log(filteredProjects);

  return (
    <>
      <div className="flex items-center justify-center  gap-2 sm:gap-4 flex-wrap">
        {services.map((service, index) => (
          <button
            key={"our-projects-buttons-" + index + "-key"}
            className={cn(
              "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-200",
              selected === service.title && "bg-primary text-white"
            )}
            onClick={() => {
              setSelected(service.title);
            }}
          >
            {service.title}
          </button>
        ))}
      </div>

      <Carousel>
        {filteredProjects.map((item, i) => (
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
    </>
  );
}
