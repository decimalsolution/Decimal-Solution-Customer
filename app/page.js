import ClientTestimonials from "@/components/landing-page/client-testimonials";
import NumberOfAchievements from "@/components/landing-page/number-of-achievements";
import OurProjects from "@/components/landing-page/our-projects";
import OurServices from "@/components/landing-page/our-services";
import Slider from "@/components/landing-page/slider";
import SliderClient from "@/components/landing-page/slider-client";
import ToolsAndTechnologies from "@/components/landing-page/tools-and-technologies";
import WhyChooseUs from "@/components/landing-page/why-choose-us";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={
            "https://firebasestorage.googleapis.com/v0/b/decimal-solutions-8c191.appspot.com/o/service%2FWeb%20Application.svg?alt=media&token=d9edca88-7dc1-4e66-ba94-37421e1c865d"
          }
          as="image"
        />
        {/* <link rel="preload" href={"/Slider Images/Slider-1.webp"} as="image" />
        <link rel="preload" href={"/Slider Images/Slider-2.webp"} as="image" />
        <link rel="preload" href={"/Slider Images/Slider-3.webp"} as="image" />
        <link rel="preload" href={"/Slider Images/Slider-4.webp"} as="image" />
        <link rel="preload" href={"/slider-overlay.png"} as="image" /> */}
      </Head>
      <main className="flex flex-col items-stretch gap-2 md:gap-4 lg:gap-8 xl:gap-16">
        <SliderClient />

        <OurServices />

        <NumberOfAchievements />

        <OurProjects />

        <WhyChooseUs />

        <ToolsAndTechnologies />

        <ClientTestimonials />
      </main>
    </>
  );
}
