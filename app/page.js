import ClientTestimonials from "@/components/landing-page/client-testimonials";
import NumberOfAchievements from "@/components/landing-page/number-of-achievements";
import OurProjects from "@/components/landing-page/our-projects";
import OurServices from "@/components/landing-page/our-services";
import SliderClient from "@/components/landing-page/slider-client";
import ToolsAndTechnologies from "@/components/landing-page/tools-and-technologies";
import WhyChooseUs from "@/components/landing-page/why-choose-us";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch gap-2 md:gap-4 lg:gap-8 xl:gap-16">
      <SliderClient />

      <OurServices />

      <NumberOfAchievements />

      <OurProjects />

      <WhyChooseUs />

      <ToolsAndTechnologies />

      <ClientTestimonials />
    </main>
  );
}
