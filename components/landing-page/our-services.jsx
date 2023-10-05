import OurServicesContent from "./our-services-content";

export default async function OurServices() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/services",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();

  const services = data.data;

  return (
    <div className="flex flex-col items-center gap-8 py-8 lg:py-12 xl:py-16 2xl:py-20 bg-[url('/our-services-bg.png')] bg-cover bg-no-repeatC">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading">Our Services</p>
          <h2 className="landing-page-heading">
            Our Service For Your Business
          </h2>
        </div>
      </div>

      <OurServicesContent services={services} />
    </div>
  );
}
