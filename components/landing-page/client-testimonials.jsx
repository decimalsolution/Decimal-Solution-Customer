import { cn } from "@/lib/utils";
import TestimonialCarousel from "./testimonial-carousel";
import Image from "next/image";

export default async function ClientTestimonials() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();

  const testimonials = data.data;

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-8 lg:h-[900px]">
      <Image
        src={"/testimonial-bg.webp"}
        alt=""
        loading={"lazy"}
        fill
        className="absolute inset-0 z-[-1] object-cover"
      />
      <div className="z-10">
        <p
          className={cn("landing-page-subheading", "text-center !normal-case")}
        >
          Testimonials
        </p>
        <h2 className="landing-page-heading">Client Testimonials</h2>
      </div>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
