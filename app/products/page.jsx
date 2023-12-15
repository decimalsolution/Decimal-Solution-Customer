import PageIntroduction from "@/components/generic/page-introduction";
import ServiceCard from "@/components/generic/service-card";

export default async function Products() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/products",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();

  const products = data.data;

  return (
    <div className="flex flex-col gap-20">
      <PageIntroduction title="Our Products" image={"/products.png"} />

      <div className="flex flex-col gap-8">
        {products.map((product, index) => (
          <ServiceCard
            key={"our-projects-card-" + index + "-key"}
            title={product.title}
            description={product.description}
            image={product.coverImage}
            showBackground
            showButton
            reverse={index % 2 !== 0}
            link={product.link}
            externalLink
          />
        ))}
      </div>
    </div>
  );
}
