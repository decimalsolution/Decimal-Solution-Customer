import { SendHorizonal } from "lucide-react";
import Image from "next/image";

const headings = [
  //  Write me some generic headings related to Sof
  "Web and Mobile App Development",
  "CRM Solutions Tailored to Your Business",
  "Creative Design for Exceptional User Experiences",
  "Your One-Stop Shop for Software Solutions   ",
];

export default function Home() {
  return (
    <main>
      <div className="max-h-[650px] h-full w-full overflow-hidden aspect-video xl-aspect-[1920/700]  2xl:aspect-[1920/700] ">
        <div className="h-full w-[calc(5*100%)] flex animate-home-carousel">
          {new Array(5).fill(0).map((_, i) => (
            <div className="w-screen  aspect-video relative" key={i}>
              <Image
                src={`/Slider Images/Slider-${(i % 4) + 1}.png`}
                fill
                priority={true}
                className="object-cover object-center absolute inset-0"
              />
              <Image
                src="/slider-overlay.png"
                fill
                priority={true}
                className="absolute inset-0"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-start mx-16">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white uppercase max-w-xs md:max-w-xs lg:max-w-md xl:max-w-xl leading-tight">
                  {headings[i]}
                </h1>
                <button className="bg-white px-4 sm:px-6 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-4 xl:py-6 rounded-sm sm:rounded-md lg:rounded-xl mt-8 text-md sm:text-lg xl:text-xl 2xl:text-2xl text-primary font-semibold flex gap-4 items-center ">
                  <span>Contact Us</span>
                  <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
