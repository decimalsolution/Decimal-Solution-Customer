import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ServiceCard({
  reverse,
  title,
  description,
  image,
  showButton,
  showBackground,
}) {
  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row items-stretch justify-between gap-8 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24",
        reverse && "xl:flex-row-reverse",
        showBackground && "bg-primary/[0.15]"
      )}
    >
      <div
        className={cn("flex-[2] flex flex-col gap-8", reverse && "items-end")}
      >
        <div className=" w-24 md:w-28 xl:w-32 h-2 bg-primary"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] uppercase font-semibold">
          {title}
        </h2>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl md:!leading-normal lg:!leading-relaxed xl:!leading-loose text-justify">
          {description}
        </p>
        {showButton && (
          <button
            className={cn(
              "text-base md:text-lg xl:text-xl text-white  bg-primary px-4 md:px-8 lg:px-12 xl:px-16  py-2 md:py-3 lg:py-4 rounded-md md:rounded-lg lg:rounded-xl",
              reverse ? "self-end" : "self-start"
            )}
          >
            View Demo
          </button>
        )}
      </div>
      <div
        className={cn(
          "hidden xl:block flex-1 relative xl:min-h-[200px]  before:content-[''] before:absolute before:w-3/4 before:h-3/4 before:bg-primary before:-bottom-8 mb-8",
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
