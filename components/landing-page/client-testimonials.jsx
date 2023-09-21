import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ClientTestimonials() {
  return (
    <div className="lg:h-[900px] px-4 py-8 bg-[url('/testimonial-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-8">
      <div>
        <p className={cn("landing-page-subheading", "!normal-case")}>
          Testimonials
        </p>
        <h2 className="landing-page-heading">Client Testimonials</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative border-8 border-primary rounded-lg">
          <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative">
            <Image
              src="/Testimonials/testimonial-1.png"
              alt="testimonial"
              fill
            />
          </div>
          <div className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-8 h-8 lg:w-12 lg:h-12 bg-primary rounded-full grid place-items-center">
            <div className="w-3 h-3 lg:w-5 lg:h-5 relative">
              <Image
                src="/icons/inverted-commas.png"
                alt="inverted-commas"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <h5 className="text-lg 2xl:text-2xl font-semibold mt-4 lg:mt-8">
          Jennifer Markelin
        </h5>
        <p className="text-center tet-base lg:text-xl text-primary font-medium lg:mt-2">
          Amazon Assistant Head
        </p>

        <p className="text-center text-base md:text-lg lg:text-xl 2xl:text-2xl  mt-2 md:mt-4 lg:mt-8 max-w-7xl leading-relaxed">
          I would highly recommend them and would love to work with them in the
          future. Very professional work. Strongly recommended.
        </p>
      </div>
    </div>
  );
}
