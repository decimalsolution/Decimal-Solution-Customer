import PageIntroduction from "@/components/generic/page-introduction";

import PortfolioContent from "./content";

export default async function Portfolio() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/groupedprojects"
  );

  const data = await res.json();

  const groups = data.data;

  return (
    <div>
      <PageIntroduction title={"Our Projects"} image={"/portfolio.jpg"} />

      <PortfolioContent groups={groups} />
    </div>
  );
}
