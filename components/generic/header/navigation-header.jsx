"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function NavigationHeader() {
  const pathname = usePathname();

  return (
    <div className="flex items-stretch justify-between ">
      <div className="w-40 xl:w-48 2xl:w-56 relative aspect-[200/100]">
        <Image src="/logo.png" fill />
      </div>

      <nav className="hidden lg:flex items-center justify-between gap-8 xl:gap-10 2xl:gap-14">
        {navigationLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={clsx(
              "text-lg 2xl:text-xl text-gray-700 duration-300 transition-colors hover:text-primary",
              link.href === pathname && "text-primary"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
