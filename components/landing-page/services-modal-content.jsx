import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicesModalContent({ services }) {
  const getLink = (service) => {
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
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 p-4">
      {services.map((item, index) => (
        <Link
          href={getLink(item)}
          onClick={(e) => {
            setOpen(false);
          }}
          key={index}
          className="flex flex-col items-center gap-4 justify-center cursor-pointer group"
        >
          <Image
            src={item.homeImage}
            width={85}
            height={85}
            alt={item.title}
            className="grayscale brightness-200 opacity-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500 "
          />
          <h3 className="text-lg text-center font-medium tracking-wide text-gray-400 group-hover:text-primary transition-all duration-500 ">
            {item.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
