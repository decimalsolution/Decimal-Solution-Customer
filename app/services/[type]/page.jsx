import PageIntroduction from "@/components/generic/page-introduction";
import ServiceCard from "@/components/generic/service-card";
import { getData } from "./get-data";
import { notFound } from "next/navigation";

const data = [
  {
    title: "Website Development",
    description:
      "To give your business a progressive outlook, we create a website precisely tailored to your needs. Our highly qualified and creative team employs the latest technologies like MongoDB, Express, React, and Node (MERN Stack) to give your website visitors a phenomenal experience. The websites developed are fully responsive and customizable for Desktop, Mobile, and Tablet. We take care of everything from website designing to development, so you just sit back and enjoy engaging visits to your website.",
    image: "/website-development/image-1.png",
  },
  {
    title: "CRM Based Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting,  Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled",
    image: "/website-development/image-2.png",
  },
  {
    title: "Health Based Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting,  Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled",
    image: "/website-development/image-3.png",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled it to make a tysape specimen book. It has survived not only a five centuries, but also the leap into electronic typesetting,  Lorem Ipsum has jwfghi been the industry's standard dummy text ever since the 1500s, when an unknown printerca took a galley of type and scrambled",
    image: "/website-development/image-4.png",
  },
];

export default function SpecificService({ params }) {
  const { type } = params;
  const data = getData(type);

  if (!data) return notFound();
  return (
    <div>
      <PageIntroduction title={data?.title} image={data?.image} />

      <div className=" flex flex-col gap-8">
        {data?.sections.map((item, index) => (
          <>
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              reverse={index % 2 !== 0}
            />

            {index !== data.length - 1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
}
