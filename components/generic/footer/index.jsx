import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Our Products",
    href: "/our-products",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

export default function Footer({ contactInfo }) {
  return (
    <div className="flex flex-col items-center text-white pb-8 pt-12  bg-[url('/footer-bg.png')] bg-cover gap-8">
      <div className=" flex items-center justify-center gap-2 md:gap-4 lg:gap-8 flex-wrap ">
        {navigationLinks.map((link, i) => (
          <Link
            className={cn(
              "text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-all",
              i !== navigationLinks.length - 1 &&
                "border-r border-white pr-2 md:pr-4 lg:pr-8"
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <h2 className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center">
        Contact Us
      </h2>

      <div className="flex items-center justify-center gap-8">
        <a
          href={`mailto:${contactInfo.primaryEmail}`}
          className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors"
        >
          {contactInfo.primaryEmail}
        </a>
        <a
          href={`tel:${contactInfo.primaryContact}`}
          className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors"
        >
          {contactInfo.primaryContact}
        </a>
      </div>
      <a
        href={contactInfo.googleMapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-base md:text-lg lg:text-xl xl:text-2xl text-center font-medium transition-colors"
      >
        {contactInfo.primaryAddress}
      </a>

      <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
        <Link
          href={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9 border-2 border-white grid place-items-center rounded-lg">
            <Facebook
              className="text-white"
              fill="currentColor"
              strokeWidth={0}
            />
          </div>
        </Link>

        <Link
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            className="text-white w-10 h-10 xl:w-9 xl:h-9"
            strokeWidth={1.5}
          />
        </Link>
        <Link
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9 border-2 border-white grid place-items-center rounded-lg">
            <Linkedin
              className="text-white"
              fill="currentColor"
              strokeWidth={0}
            />
          </div>
        </Link>

        <Link
          href={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube
            className="text-white w-10 h-10 xl:w-12 xl:h-12"
            strokeWidth={1.25}
          />
        </Link>
      </div>

      <div className="w-full h-[1px] bg-white/50 mx-32"></div>

      <p className="text-white text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium">
        CopyRight © 2023 Decimal Solutions. All Rights Reserved.{" "}
      </p>
    </div>
  );
}
