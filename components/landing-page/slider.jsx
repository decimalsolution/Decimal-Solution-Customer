import { cn } from "@/lib/utils";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const headings = [
  "Web and Mobile Application Development",
  "Customized CRM Solutions",
  "Creative Design for Interactive User Experiences",
  "Your One-Stop Shop for Software Solutions   ",
];
export default function Slider() {
  return (
    <div className="xl-aspect-[1920/700] relative aspect-video h-full max-h-[650px] w-full overflow-hidden  2xl:aspect-[1920/700] ">
      <div className="flex h-full w-[calc(5*100vw)] animate-home-carousel">
        {new Array(5).fill(0).map((_, i) => (
          <div
            className="relative  aspect-video w-screen"
            key={"slider-" + i + "-key"}
          >
            <Image
              src={`/Slider Images/Slider-${(i % 4) + 1}.png`}
              alt={`Slider images ${(i % 4) + 1}`}
              fill
              priority={true}
              loading="eager"
              className="absolute inset-0 object-cover object-center"
            />
            <Image
              src="/slider-overlay.png"
              alt="Slider Overlay"
              fill
              priority={true}
              loading="eager"
              className="absolute inset-0"
            />

            <div className="absolute inset-0 mx-4 flex flex-col items-start justify-center md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
              <h1 className="text-md max-w-[150px] font-bold leading-none text-white sm:text-2xl md:max-w-xs md:text-3xl lg:max-w-md lg:text-4xl xl:max-w-xl xl:text-5xl 2xl:text-6xl">
                {headings[i]}
              </h1>
              {/* <Link href="/contact-us">
                <button className="bg-white px-2 sm:px-6 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-4 xl:py-6 rounded-sm sm:rounded-md lg:rounded-xl mt-2 sm:mt-4 lg:mt-8 text-xs sm:text-lg xl:text-xl 2xl:text-2xl text-primary font-semibold flex gap-2 md:gap-4 items-center ">
                  <span>Contact Us</span>
                  <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                </button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
