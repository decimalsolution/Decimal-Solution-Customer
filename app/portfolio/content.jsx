"use client";

import Carousel from "@/components/generic/carousel";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SwiperSlide } from "swiper/react";
import NextLink from "next/link";
import ServiceCard from "@/components/generic/service-card";

const buttons = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR",
];

export default function PortfolioContent({
  groups,
  recentProjects,
  categories,
}) {
  const [selected, setSelected] = useState("All");

  const filteredGroups = useMemo(() => {
    return groups.filter(
      (group) => group.category === selected || selected === "All"
    );
  }, [selected, groups]);

  return (
    <div className="pt-24 flex flex-col gap-5 items-center">
      <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
        {categories.map((category, index) => (
          <button
            key={"our-projects-buttons-" + index + "-key"}
            className={cn(
              "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-200",
              selected === category && "bg-primary text-white"
            )}
            onClick={() => {
              setSelected(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredGroups.map((group, index) => (
        <div className="w-full flex flex-col items-center mb-16">
          <p className={cn("landing-page-subheading", "!mb-8 w-full px-24")}>
            {group.category}
          </p>
          <Carousel>
            {group.projects.map((item, i) => (
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
                      href={"/"}
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
        </div>
      ))}

      <div>
        <p className="landing-page-subheading ">Our Projects</p>
        <h2 className="landing-page-heading">Some Latest Client Projects</h2>
      </div>

      {recentProjects?.map((project, index) => (
        <ServiceCard
          key={"our-projects-card-" + index + "-key"}
          title={project.title}
          description={project.description}
          image={project.coverImage}
          showBackground
          showButton
          reverse={index % 2 !== 0}
          link={project.link}
        />
      ))}
    </div>
  );
}
