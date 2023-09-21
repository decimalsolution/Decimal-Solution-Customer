import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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

export default function Footer() {
  return (
    <div className="flex flex-col items-center text-white py-32 bg-[url('/footer-bg.png')] bg-cover gap-8">
      <div className=" flex items-center justify-center gap-8 ">
        {navigationLinks.map((link, i) => (
          <Link
            className={cn(
              "text-white text-2xl font-medium hover:text-primary transition-colors",
              i !== navigationLinks.length - 1 && "border-r border-white pr-8"
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <h2 className="text-white text-2xl font-bold text-center">Contact Us</h2>

      <Link
        href="mailto:info@decimalsolution.com"
        className="text-white text-2xl font-medium hover:text-primary transition-colors"
      >
        info@decimalsolution.com
      </Link>

      <div className="flex items-center justify-center gap-8">
        <Link
          href="tel:+923455893337"
          className="text-white text-2xl font-medium hover:text-primary transition-colors"
        >
          +92 345 5893337
        </Link>

        <Link
          href="tel:+923004257414"
          className="text-white text-2xl font-medium hover:text-primary transition-colors"
        >
          +92 300 4257414
        </Link>
      </div>

      <Link
        href={"/"}
        className="text-white text-2xl font-medium hover:text-primary transition-colors"
      >
        Office No# 17, 2rd Floor, Zaki Centre, I-8 Markaz Islamabad, 44000
      </Link>

      <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
        <div className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9 border-2 border-white grid place-items-center rounded-lg">
          <Facebook
            className="text-white"
            fill="currentColor"
            strokeWidth={0}
          />
        </div>

        <Instagram
          className="text-white w-10 h-10 xl:w-9 xl:h-9"
          strokeWidth={1.5}
        />

        <div className=" w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9 border-2 border-white grid place-items-center rounded-lg">
          <Linkedin
            className="text-white"
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/50 mx-32"></div>

      <p className="text-white text-center text-lg font-medium">
        CopyRight © 2021 Decimal Solutions. All Rights Reserved.{" "}
      </p>
    </div>
  );
}
