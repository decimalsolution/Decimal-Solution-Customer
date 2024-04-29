"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav({ links, pathname }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Menu
        className="my-auto cursor-pointer lg:hidden"
        size={30}
        onClick={() => setShow(true)}
      />

      {/* <div
        className={cn(
          "flex-col gap-8 items-center bg-primary p-8 absolute top-20  -right-2 max-w-[500px] w-full z-[999999] transition-all duration-500",
          show ? "flex" : "hidden"
        )}
      > */}
      <div
        className={cn(
          "items-left fixed bottom-0 top-0 z-[999999] flex w-[320px] origin-top-right flex-col gap-8 bg-primary p-8 transition-all duration-500",
          show ? "right-[-20px]" : "right-[-500px]",
        )}
      >
        <X
          size={30}
          onClick={() => setShow(false)}
          className="cursor-pointer text-white"
        />
        {links.map((NavLink, index) =>
          NavLink.Custom ? (
            <button key={index} onClick={() => setShow(false)}>
              <NavLink.Custom
                href={NavLink.href}
                key={index}
                className={"flex text-lg font-medium text-white sm:text-2xl"}
              />
            </button>
          ) : (
            <Link
              href={NavLink.href}
              key={index}
              className={"text-lg font-medium text-white sm:text-2xl"}
              onClick={() => setShow(false)}
            >
              {NavLink.name}
            </Link>
          ),
        )}
      </div>
    </>
  );
}
