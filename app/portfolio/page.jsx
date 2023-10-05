import PageIntroduction from "@/components/generic/page-introduction";

import PortfolioContent from "./content";

export default async function Portfolio() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/groupedprojects",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();

  const groups = data.data;

  const categories = groups.map((group) => group.category);
  categories.unshift("All");

  const recentProjects = data.recentProjects;

  return (
    <div>
      <PageIntroduction title={"Our Projects"} image={"/portfolio.jpg"} />

      <PortfolioContent
        groups={groups}
        recentProjects={recentProjects}
        categories={categories}
      />
    </div>
  );
}
