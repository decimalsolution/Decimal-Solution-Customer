import OurServicesContent from "./our-services-content";

export default async function OurServices() {
  const res = await fetch(
    `${process.env.BASE_URL}/services`,

    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await res.json();

  const services = data.data;

  return (
    <div className="bg-no-repeatC flex flex-col items-center gap-8 bg-[url('/our-services-bg.webp')] bg-cover py-8 lg:py-12 xl:py-16 2xl:py-20">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading text-center">Our Services</p>
          <h2 className="landing-page-heading">
            Our Service For Your Business
          </h2>
        </div>
      </div>

      <OurServicesContent services={services} />
    </div>
  );
}
