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
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default function Footer({ contactInfo }) {
  return (
    <div className="flex flex-col items-center text-white pb-8 pt-12  bg-[url('/footer-bg.png')] bg-cover gap-8">
      <div className=" flex items-center justify-center gap-2 md:gap-4 lg:gap-8 flex-wrap ">
        {navigationLinks.map((link, i) => (
          <Link
            className={cn(
              "text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-all hover:text-white/75",
              i !== navigationLinks.length - 1 &&
                "border-r border-white pr-2 md:pr-4 lg:pr-8"
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 my-4">
        <a
          href={`mailto:${contactInfo.primaryEmail}`}
          className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors"
        >
          {contactInfo.primaryEmail}
        </a>
        <div className="w-[1px] h-8 bg-white"></div>
        <a
          href={`tel:${contactInfo.primaryContact}`}
          className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors"
        >
          {contactInfo.primaryContact}
        </a>
        <div className="w-[1px] h-8 bg-white"></div>
        <a
          href={contactInfo.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-base md:text-lg lg:text-xl xl:text-2xl text-center font-medium transition-colors"
        >
          I-8 Markaz, Islamabad, Pakistan
        </a>
      </div>

      <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
        <Link
          href={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/facebook.png"
            className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9"
          />
        </Link>

        <Link
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/instagram-2.png"
            className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9"
          />
        </Link>
        <Link
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/linkedin.png"
            className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9"
          />
        </Link>

        <Link
          href={contactInfo.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/youtube.png"
            className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9"
          />
        </Link>
      </div>

      <div className="w-full h-[1px] bg-white/50 mx-32"></div>

      <p className="text-white text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium">
        CopyRight © 2023 Decimal Solution. All Rights Reserved.{" "}
      </p>
    </div>
  );
}
