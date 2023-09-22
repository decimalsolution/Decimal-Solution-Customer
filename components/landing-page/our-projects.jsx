import OurProjectsContent from "./our-projects-content";

export default async function OurProjects() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/homeScreenProjects/all"
  );

  const data = await res.json();

  const projects = data.data;

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 lg:gap-16 flex-wrap py-8 lg:py-12">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading">Our Projects</p>
          <h2 className="landing-page-heading">Some Latest Client Projects</h2>
        </div>
      </div>

      <OurProjectsContent projects={projects} />

      <button className="bg-primary block sm:w-36 md:w-40 lg:w-56 xl:w-64 2xl:w-72 px-4 py-2 lg:py-4 text-white font-medium text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-xl">
        View All
      </button>
    </div>
  );
}
