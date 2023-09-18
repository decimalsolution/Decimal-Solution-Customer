import NumberOfAchievements from "@/components/landing-page/number-of-achievements";
import OurProjects from "@/components/landing-page/our-projects";
import OurServices from "@/components/landing-page/our-services";
import Slider from "@/components/landing-page/slider";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch gap-16">
      <Slider />

      <OurServices />

      <NumberOfAchievements />

      <OurProjects />
    </main>
  );
}
