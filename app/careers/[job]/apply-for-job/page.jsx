import ApplyForJobForm from "./apply-for-job-form";

export default async function SpecificJob({ params }) {
  const job = params.job;

  const res = await fetch(
    `https://backend.decimalsolution.com/api/v1/web/jobs/${job}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();
  const jobListing = data.data;

  return (
    <div>
      <div className="flex flex-col items-stretch px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36 py-24 gap-2 md:gap-4 lg:gap-8">
        <ApplyForJobForm job={jobListing} />
      </div>
    </div>
  );
}
