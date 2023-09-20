import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ClientTestimonials() {
  return (
    <div className="h-[900px] bg-[url('/testimonial-bg.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center gap-8">
      <div>
        <p className={cn("landing-page-subheading", "!normal-case")}>
          Testimonials
        </p>
        <h2 className="landing-page-heading">Client Testimonials</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative border-8 border-primary rounded-lg">
          <Image
            src="/Testimonials/testimonial-1.png"
            width={200}
            height={200}
            alt="testimonial"
          />
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full grid place-items-center">
            <Image
              src="/icons/inverted-commas.png"
              width={20}
              height={20}
              alt="inverted-commas"
            />
          </div>
        </div>

        <h5 className="text-2xl font-semibold mt-8">Jennifer Markelin</h5>
        <p className="text-center text-xl text-primary font-medium mt-2">
          Amazon Assistant Head
        </p>

        <p className="text-center text-2xl mt-8 max-w-7xl leading-relaxed">
          I would highly recommend them and would love to work with them in the
          future. Very professional work. Strongly recommended.
        </p>
      </div>
    </div>
  );
}
