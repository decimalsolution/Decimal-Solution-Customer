import Link from "next/link";
import OurProjectsContent from "./our-projects-content";

export default async function OurProjects() {
  const [res1, res2] = await Promise.all([
    await fetch(
      "https://backend.decimalsolution.com/api/v1/web/homeScreenProjects/all",
      {
        next: {
          revalidate: 300,
        },
      }
    ),
    await fetch(
      "https://backend.decimalsolution.com/api/v1/web/activeservices",
      {
        next: {
          revalidate: 300,
        },
      }
    ),
  ]);

  const data1 = await res1.json();
  const data2 = await res2.json();

  const projects = data1.data;
  const services = data2.data;
  services.unshift({ title: "All" });

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 lg:gap-16 flex-wrap py-8 lg:py-12">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading text-center">Our Projects</p>
          <h2 className="landing-page-heading">Some Latest Client Projects</h2>
        </div>
      </div>

      <OurProjectsContent projects={projects} services={services} />

      <Link href={"/portfolio"}>
        <button className="bg-primary block sm:w-36 md:w-40 lg:w-56 xl:w-64 2xl:w-72 px-4 py-2 lg:py-4 text-white font-medium text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-xl">
          View All
        </button>
      </Link>
    </div>
  );
}
