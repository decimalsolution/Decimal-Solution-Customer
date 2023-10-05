import Link from "next/link";

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
      <div className="flex flex-col items-stretch px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36 py-24 gap-16">
        <div className="mx-auto">
          <p className="landing-page-subheading !mb-4">Usquare Solutions</p>
          <h2 className="landing-page-heading">{jobListing.title}</h2>
        </div>
        <div>
          <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row justify-between items-start">
            <div className="flex flex-col gap-4">
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Minimum Qualification:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumQualifications}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Experience Level:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.jobLevel}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Experience Length:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumExperience}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Location:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.location}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Application Deadline:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {new Date(
                    jobListing.jobApplicationDeadline
                  ).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Salary Range:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumJobSalary.toLocaleString("en-PK", {
                    style: "currency",
                    currency: "PKR",
                  })}{" "}
                  -
                  {jobListing.maximumJobSalary.toLocaleString("en-PK", {
                    style: "currency",
                    currency: "PKR",
                  })}
                </span>
              </p>
            </div>
            <Link href={`/careers/${params.job}/apply-for-job`}>
              <button className="text-sm md:text-base lg:text-lg xl:text-xl bg-primary px-4 md:px-8 lg:px-16 py-2 md:py-3 lg:py-4 text-white rounded-full">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-base lg:text-lg xl:text-[28px]  font-semibold text-black mb-4">
            Job Description:
          </p>
          <p className="text-base lg:text-lg xl:text-2xl font-light !leading-relaxed">
            {jobListing.description}
          </p>
        </div>
        <div>
          <p className="text-base lg:text-lg xl:text-[28px]  font-semibold text-black mb-4">
            Laravel Developer Requirements:
          </p>
          <p className="text-base lg:text-lg xl:text-2xl font-light !leading-relaxed">
            {jobListing.jobRequirements}
          </p>
        </div>
        <div>
          <p className="text-base lg:text-lg xl:text-[28px]  font-semibold text-black mb-4">
            Responsibilities:
          </p>
          <p className="text-base lg:text-lg xl:text-2xl font-light !leading-relaxed">
            {jobListing.jobResponsibilities}
          </p>
        </div>
      </div>
    </div>
  );
}
