import PageIntroduction from "@/components/generic/page-introduction";
import ServiceCard from "@/components/generic/service-card";

export default function Products() {
  return (
    <div className="flex flex-col gap-20">
      <PageIntroduction title="Our Products" image={"/products.png"} />

      <div className="flex flex-col gap-8">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ServiceCard
              key={"our-projects-card-" + index + "-key"}
              title={"Project Title"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting,  Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley"
              }
              image={`/digital-marketing/image-${index + 1}.png`}
              showBackground
              showButton
              reverse={index % 2 !== 0}
            />
          ))}
      </div>
    </div>
  );
}
