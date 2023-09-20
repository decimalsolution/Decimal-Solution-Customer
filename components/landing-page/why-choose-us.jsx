import { cn } from "@/lib/utils";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col p-12 gap-16">
      <div className="px-24">
        <p className={cn("landing-page-subheading", "!normal-case")}>
          Why Choose Us
        </p>
        <h2 className="landing-page-heading">Our Working Process</h2>
        <p className="landing-page-paragraph">
          We ensure that all your digital needs are met at an affordable price
          and in promised time.
        </p>
      </div>

      <div className="grid grid-cols-3 relative h-[800px]">
        <Image
          src={"/why-choose-us.png"}
          alt="Why Choose Us"
          fill
          className="object-contain col-span-2 col-start-1"
        />
        <div className="h-full col-start-3 relative my-8 grid grid-rows-4 ">
          <div className="absolute w-[calc(100%+34%)] p-8 rounded-lg shadow-xl row-start-1 -top-4 -left-[34%] z-10 bg-white">
            <h4 className="text-2xl font-semibold">Product Analysis</h4>
            <p className="text-lg">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
          <div className="absolute  w-calc(100%+21%) p-8 rounded-lg shadow-xl row-start-2 -top-4 -left-[21%] bg-white z-10">
            <h4 className="text-2xl font-semibold">Product Analysis</h4>
            <p className="text-lg">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
          <div className="absolute w-[calc(100%+21%)] p-8 rounded-lg shadow-xl row-start-3 -top-4 -left-[21%] z-10 bg-white">
            <h4 className="text-2xl font-semibold">Product Analysis</h4>
            <p className="text-lg">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
          <div className="absolute w-[calc(100%+38%)] p-8 rounded-lg shadow-xl row-start-4 xl:-left-[38%] bg-white z-10">
            <h4 className="text-2xl font-semibold">Product Analysis</h4>
            <p className="text-lg">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
