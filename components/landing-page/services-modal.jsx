"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

const data = [
  {
    title: "Website Development",
    icon: "/icons/website-development.svg",
    href: "/services/website-development",
    description:
      "We are offering a huge variety of services from web development to web hosting.",
  },
  {
    title: "Mobile App Development",
    icon: "/icons/mobile-app-development.svg",
    href: "/services/mobile-app-development",
    description:
      "Create robust solution for each industry across a vast use base.",
  },
  {
    title: "Graphics Designing",
    icon: "/icons/graphics-designing.svg",
    href: "/services/graphics-designing",
    description:
      "We offer responsive design services for websites of every technology & framework.",
  },
  {
    title: "Digital Marketing",
    icon: "/icons/digital-marketing.svg",
    href: "/services/digital-marketing",
    description:
      "We provide channels to attract engage and convert customers online",
  },
  {
    title: "ERP & Business Solutions",
    icon: "/icons/erp.svg",
    href: "/services/erp",
    description:
      "We tailor the enterprise applications & business solutions according to your needs.",
  },
  {
    title: "AR/VR Games",
    icon: "/icons/ar-vr.svg",
    href: "/services/ar-vr",
    description:
      "We provide a variety of AR/VR development services worldwide.",
  },
];

export function ServiceModal({ className, href }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <DialogTrigger asChild>
        <Link
          href={href}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Services
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Link
              href={item.href}
              onClick={(e) => {
                setOpen(false);
              }}
              key={index}
              className="flex flex-col items-center gap-4 justify-center cursor-pointer group"
            >
              <Image
                src={item.icon}
                width={75}
                height={75}
                alt={item.title}
                className="grayscale brightness-200 opacity-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500 "
              />
              <h3 className="text-lg text-center font-semibold text-gray-300 group-hover:text-primary transition-all duration-500 ">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
