"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServicesModalContent from "./services-modal-content";

export function ServicesModal({ className, href, children }) {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (open) {
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`)
        .then((res) => res.json())
        .then((data) => {
          setServices(data.data);
        })
        .catch((err) => {
          setError(err);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [open]);

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
      <DialogContent className="sm:max-w-[700px]">
        {loading ? (
          <div className="flex h-96 items-center justify-center ">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="flex h-96 items-center justify-center ">
            <h1 className="text-2xl text-red-500">Failed to fetch services</h1>
          </div>
        ) : (
          <ServicesModalContent services={services} />
        )}
      </DialogContent>
    </Dialog>
  );
}
