import { cn } from "@/lib/utils";
import TestimonialCarousel from "./testimonial-carousel";

export default async function ClientTestimonials() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/testimonial",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();

  const testimonials = data.data;

  return (
    <div className="lg:h-[900px] px-4 py-8 bg-[url('/testimonial-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-8">
      <div>
        <p className={cn("landing-page-subheading", "!normal-case")}>
          Testimonials
        </p>
        <h2 className="landing-page-heading">Client Testimonials</h2>
      </div>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
