import { cn } from "@/lib/utils";
import Image from "next/image";
import "./why-choose-us.css";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col  p-4 lg:p-12 gap-4 md:gap-8 lg:gap-12 xl:gap-16">
      <div className="2xl:px-24">
        <p className={cn("landing-page-subheading", "!normal-case")}>
          Why Choose Us
        </p>
        <h2 className="landing-page-heading">Our Working Process</h2>
        <p className="landing-page-paragraph">
          We ensure that all your digital needs are met at an affordable price
          and in promised time.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 relative xl:h-[800px]">
        <Image
          src={"/why-choose-us.png"}
          alt="Why Choose Us"
          fill
          className="object-contain col-span-2 col-start-1 hidden xl:block"
        />
        <div className="h-full xl:col-start-3 relative my-8 flex flex-col xl:grid grid-rows-4 gap-4">
          <div className="card card-1">
            <h4 className="text-md  md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
              Product Analysis
            </h4>
            <p className="text-sm md:text-base lg:text-md 2xl:text-lg">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
          <div className="card card-2">
            <h4 className="text-md  md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
              Wireframe or UI/UX Design
            </h4>
            <p className="text-sm md:text-base lg:text-md 2xl:text-lg">
              We suggest the solution or modifications to your product by
              employing UI/UX design to make it interactive and creative.
            </p>
          </div>
          <div className="card card-3">
            <h4 className="text-md  md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
              Product Development
            </h4>
            <p className="text-sm md:text-base lg:text-md 2xl:text-lg">
              We develop a high-quality software product according to your
              desire which compliments your business well.
            </p>
          </div>
          <div className="card card-4">
            <h4 className="text-md  md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
              Product Testing
            </h4>
            <p className="text-sm md:text-base lg:text-md 2xl:text-lg">
              Our team performs strict product testing to ensure reliability,
              quality, cost-effectiveness, and product life expectancy while
              reducing customers' aftercare needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
