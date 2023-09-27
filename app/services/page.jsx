import PageIntroduction from "@/components/generic/page-introduction";
import ServiceCard from "@/components/generic/service-card";

export default async function Services() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/services"
  );

  const data = await res.json();

  const services = data.data;

  const getLink = (service) => {
    const title = service.title.toLowerCase();
    if (title.includes("web")) {
      return "services/website-development";
    } else if (title.includes("digital")) {
      return "services/digital-marketing";
    } else if (title.includes("mobile")) {
      return "services/mobile-app-development";
    } else if (title.includes("graphic")) {
      return "services/graphics-designing";
    } else if (title.includes("erp")) {
      return "services/erp";
    } else if (title.includes("ar")) {
      return "services/ar-vr";
    } else {
      return "services/website-development";
    }
  };

  return (
    <div className="flex flex-col gap-20">
      <PageIntroduction title="Our Services" image={"/our-services.jpg"} />

      <div className="flex flex-col gap-8">
        {services.map((product, index) => (
          <ServiceCard
            key={"our-services-card-" + index + "-key"}
            title={product.title}
            description={product.description}
            image={product.coverImage}
            showButton
            buttonText={"View More"}
            reverse={index % 2 !== 0}
            link={getLink(product)}
            externalLink={false}
          />
        ))}
      </div>
    </div>
  );
}
