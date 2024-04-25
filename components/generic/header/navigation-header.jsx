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
    <div className="relative flex items-stretch justify-between py-2 lg:py-0 ">
      <div className="relative aspect-[194/109] w-28 xl:w-40 2xl:w-48">
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Decimal Solution Logo"
            fill
            quality={100}
            priority={true}
            loading="eager"
          />
        </Link>
      </div>

      <nav className="hidden items-center justify-between gap-8 lg:flex xl:gap-10 2xl:gap-14">
        {navigationLinks.map((NavLink, index) =>
          NavLink.Custom ? (
            <NavLink.Custom
              href={NavLink.href}
              key={index}
              className={clsx(
                "navbar-link",
                NavLink.href.toLowerCase() === pathname.toLowerCase() &&
                  "!text-primary",
              )}
            />
          ) : (
            <Link
              href={NavLink.href}
              key={index}
              className={clsx(
                "navbar-link",
                NavLink.href.toLowerCase() === pathname.toLowerCase() &&
                  "!text-primary",
              )}
            >
              {NavLink.name}
            </Link>
          ),
        )}
      </nav>
      <MobileNav links={navigationLinks} />
    </div>
  );
}
