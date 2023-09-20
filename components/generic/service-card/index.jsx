import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ServiceCard({ reverse, title, description, image }) {
  return (
    <div
      className={cn(
        "flex items-stretch justify-between gap-8",
        reverse && "flex-row-reverse"
      )}
    >
      <div
        className={cn("flex-[2] flex flex-col gap-8", reverse && "items-end")}
      >
        <div className="w-32 h-2 bg-primary"></div>
        <h2 className="text-[40px] uppercase font-semibold">{title}</h2>
        <p className="text-2xl leading-loose text-justify">{description}</p>
      </div>
      <div
        className={cn(
          "flex-1 relative  before:content-[''] before:absolute before:w-3/4 before:h-3/4 before:bg-primary before:-bottom-8 mb-8",
          reverse ? "before:-right-8 mr-8" : "before:-left-8 ml-8"
        )}
      >
        <Image
          src={image}
          fill
          alt="web-development"
          className="object-cover "
        />
      </div>
    </div>
  );
}
