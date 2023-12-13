"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useState } from "react";

export function ServicesModal({ className, href, children }) {
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
          onClick={() => {
            setOpen(true);
            console.log("clicked");
          }}
        >
          Services
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] ">{children}</DialogContent>
    </Dialog>
  );
}
