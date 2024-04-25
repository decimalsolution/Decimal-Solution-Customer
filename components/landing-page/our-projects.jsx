import Link from "next/link";
import OurProjectsContent from "./our-projects-content";

export default async function OurProjects() {
  const [res1, res2] = await Promise.all([
    await fetch(
      `${process.env.BASE_URL}/homeScreenProjects/all`,

      {
        next: {
          revalidate: 300,
        },
      },
    ),
    await fetch(`${process.env.BASE_URL}/activeservices`, {
      next: {
        revalidate: 300,
      },
    }),
  ]);

  const data1 = await res1.json();
  const data2 = await res2.json();

  const projects = data1.data;
  const services = data2.data;
  services.unshift({ title: "All" });

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 py-8 sm:gap-8 lg:gap-16 lg:py-12">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading text-center">Our Projects</p>
          <h2 className="landing-page-heading">Some Latest Client Projects</h2>
        </div>
      </div>

      <OurProjectsContent projects={projects} services={services} />

      <Link href={"/portfolio"}>
        <button className="block rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white sm:w-36 md:w-40 md:text-base lg:w-56 lg:py-4 lg:text-lg xl:w-64 xl:text-xl 2xl:w-72 2xl:text-2xl">
          View All
        </button>
      </Link>
    </div>
  );
}
