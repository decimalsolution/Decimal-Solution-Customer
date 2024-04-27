import Image from "next/image";
import OurServicesContent from "./our-services-content";

export default async function OurServices() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services`,

    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await res.json();

  const services = data.data;

  return (
    <div className="relative flex flex-col items-center gap-8 py-8 lg:py-12 xl:py-16 2xl:py-20">
      <div className="flex flex-col items-center">
        <div>
          <p className="landing-page-subheading text-center">Our Services</p>
          <h2 className="landing-page-heading">
            Our Service For Your Business
          </h2>
        </div>
      </div>
      <Image
        src={"/our-services-bg.webp"}
        alt=""
        priority={true}
        fill
        className="absolute inset-0 z-0"
      />

      <OurServicesContent services={services} />
    </div>
  );
}
