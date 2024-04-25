import { cn } from "@/lib/utils";
import TestimonialCarousel from "./testimonial-carousel";

export default async function ClientTestimonials() {
  const res = await fetch(`${process.env.BASE_URL}/testimonial`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();

  const testimonials = data.data;

  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-[url('/testimonial-bg.webp')] bg-cover bg-center bg-no-repeat px-4 py-8 lg:h-[900px]">
      <div>
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
