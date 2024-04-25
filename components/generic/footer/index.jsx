import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { date } from "zod";

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
    <div className="flex flex-col items-center gap-8 bg-[url('/footer-bg.png')] bg-cover  pb-8 pt-12 text-white">
      <div className=" flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-8 ">
        {navigationLinks.map((link, i) => (
          <Link
            className={cn(
              "text-base font-medium text-white transition-all hover:text-white/75 md:text-lg lg:text-xl xl:text-2xl",
              i !== navigationLinks.length - 1 &&
                "border-r border-white pr-2 md:pr-4 lg:pr-8",
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="my-4 flex items-center justify-center gap-8">
        <a
          href={`mailto:${contactInfo.primaryEmail}`}
          className="text-base font-medium text-white transition-colors md:text-lg lg:text-xl xl:text-2xl"
        >
          {contactInfo.primaryEmail}
        </a>
        <div className="h-8 w-[1px] bg-white"></div>
        <a
          href={`tel:${contactInfo.primaryContact}`}
          className="text-base font-medium text-white transition-colors md:text-lg lg:text-xl xl:text-2xl"
        >
          {contactInfo.primaryContact}
        </a>
        <div className="h-8 w-[1px] bg-white"></div>
        <a
          href={contactInfo.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-base font-medium text-white transition-colors md:text-lg lg:text-xl xl:text-2xl"
        >
          I-8/4, Islamabad, Pakistan
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
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="Facebook"
          />
        </Link>

        <Link
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/instagram-2.png"
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="Instagram"
          />
        </Link>
        <Link
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/linkedin.png"
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="LinkedIn"
          />
        </Link>

        <Link
          href={contactInfo.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/white/youtube.png"
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="Youtube"
          />
        </Link>
      </div>

      <div className="mx-32 h-[1px] w-full bg-white/50"></div>

      <p className="text-center text-xs font-medium text-white sm:text-sm md:text-base lg:text-lg">
        CopyRight © {new Date().getFullYear()} Decimal Solution. All Rights
        Reserved.{" "}
      </p>
    </div>
  );
}
