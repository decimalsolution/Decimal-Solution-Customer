import ClientTestimonials from "@/components/landing-page/client-testimonials";
import NumberOfAchievements from "@/components/landing-page/number-of-achievements";
import OurProjects from "@/components/landing-page/our-projects";
import OurServices from "@/components/landing-page/our-services";
import Slider from "@/components/landing-page/slider";
import ToolsAndTechnologies from "@/components/landing-page/tools-and-technologies";
import WhyChooseUs from "@/components/landing-page/why-choose-us";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch gap-16">
      <Slider />

      <OurServices />

      <NumberOfAchievements />

      <OurProjects />

      <WhyChooseUs />

      <ToolsAndTechnologies />

      <ClientTestimonials />
    </main>
  );
}
