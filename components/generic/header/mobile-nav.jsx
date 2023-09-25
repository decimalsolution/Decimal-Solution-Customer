"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav({ links, pathname }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Menu
        className="my-auto lg:hidden cursor-pointer"
        size={30}
        onClick={() => setShow(!show)}
      />

      <div
        className={cn(
          "flex-col gap-8 items-center bg-primary p-8 absolute top-20  -right-2 max-w-[500px] w-full z-[999999] transition-all duration-500",
          show ? "flex" : "hidden"
        )}
      >
        {links.map((NavLink, index) =>
          NavLink.Custom ? (
            <button key={index} onClick={() => setShow(false)}>
              <NavLink.Custom
                href={NavLink.href}
                key={index}
                className={"text-white text-2xl font-medium"}
              />
            </button>
          ) : (
            <Link
              href={NavLink.href}
              key={index}
              className={"text-white text-2xl font-medium"}
              onClick={() => setShow(false)}
            >
              {NavLink.name}
            </Link>
          )
        )}
      </div>
    </>
  );
}
