import ApplyForJobForm from "./apply-for-job-form";

export default async function SpecificJob({ params }) {
  const job = params.job;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${job}`,

    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await res.json();
  const jobListing = data.data;

  return (
    <div>
      <div className="flex flex-col items-stretch gap-2 px-8 py-24 sm:px-12 md:gap-4 md:px-20 lg:gap-8 lg:px-28 xl:px-32 2xl:px-36">
        <ApplyForJobForm job={jobListing} />
      </div>
    </div>
  );
}
