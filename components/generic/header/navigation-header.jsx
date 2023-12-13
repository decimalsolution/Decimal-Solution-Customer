"use client";

import clsx from "clsx";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { ServicesModal } from "@/components/landing-page/services-modal";

const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    Custom: ServicesModal,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Our Products",
    href: "/products",
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
    <div className="flex items-stretch justify-between py-2 lg:py-0 relative ">
      <div className="w-28 xl:w-40 2xl:w-48 relative aspect-[194/109]">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Decimal Solution Logo"
            fill
            quality={100}
          />
        </Link>
      </div>

      <nav className="hidden lg:flex items-center justify-between gap-8 xl:gap-10 2xl:gap-14">
        {navigationLinks.map((NavLink, index) =>
          NavLink.Custom ? (
            <NavLink.Custom
              href={NavLink.href}
              key={index}
              className={clsx(
                "navbar-link",
                NavLink.href.toLowerCase() === pathname.toLowerCase() &&
                  "!text-primary"
              )}
            />
          ) : (
            <Link
              href={NavLink.href}
              key={index}
              className={clsx(
                "navbar-link",
                NavLink.href.toLowerCase() === pathname.toLowerCase() &&
                  "!text-primary"
              )}
            >
              {NavLink.name}
            </Link>
          )
        )}
      </nav>
      <MobileNav links={navigationLinks} />
    </div>
  );
}
