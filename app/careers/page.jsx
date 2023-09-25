import AvailableJobs from "./available-jobs";

export default async function Careers() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/jobs"
  );

  const data = await res.json();

  const jobs = data.data;

  return (
    <div>
      <div className="py-24 px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36 flex  flex-col-reverse xl:flex-row gap-8 2xl:gap-16">
        <div className="flex-[3]">
          <p className="landing-page-subheading">Job Positions</p>
          <h2 className="landing-page-heading mb-8">Start Work with Us!</h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[25px] !leading-loose">
            If you are passionate about providing solutions to IT needs then
            Decimal Solutions is a perfect place for you to work. We believe in
            serving our customers with the best by using the right tools. If you
            have it in you to contribute to the digital world; submit your
            resume today and we'll get back to you.
          </p>
          <h3 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[25px] font-semibold  mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-4 md:mb-5 lg:mb-6 xl:mb-8">
            Why Work with Us?
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[25px] !leading-loose">
            Decimal Solutions provide a challenging yet innovative platform for
            all the enthusiasts looking to leave a mark in the digital world. We
            provide a comfortable and friendly working environment,
            market-competitive salaries, and continuous opportunities for growth
            by increasing your learning while working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid h-full grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-[repeat(26,minmax(0,1fr))] flex-[2] max-h-[800px]">
          <img
            src="/work-with-us/image-1.png"
            alt="Work with us"
            className="col-start-1 col-span-9  row-start-5 row-span-13  object-cover w-full h-full"
          />

          <img
            src="/work-with-us/image-2.png"
            alt="Work with us"
            className="col-span-6 col-start-11 row-span-9 object-cover w-full h-full"
          />

          <img
            src="/work-with-us/image-3.png"
            alt="Work with us"
            className="col-start-3 row-start-[19] row-span-full col-span-7 object-cover w-full h-full"
          />

          <img
            src="/work-with-us/image-4.png"
            alt="Work with us"
            className="col-start-[11] col-span-full row-start-[11] row-span-full object-cover w-full h-full"
          />
        </div>
      </div>

      <AvailableJobs jobs={jobs} />
    </div>
  );
}
