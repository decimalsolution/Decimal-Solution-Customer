import JobListing from "@/components/generic/job-listing";
import PageIntroduction from "@/components/generic/page-introduction";
import SelectMenu from "@/components/generic/select-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

const steps = [
  {
    title: "Resume Submission",
    image: "/hiring-steps/step-1.png",
  },
  {
    title: "Telephonic Interview",
    image: "/hiring-steps/step-2.png",
  },
  {
    title: "Online Skill Assessment",
    image: "/hiring-steps/step-3.png",
  },
  {
    title: "Technical & Final Interview",
    image: "/hiring-steps/step-4.png",
  },
];

const positions = [
  {
    title: "Data Scientist",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Unity Developer",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Web Developer",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "SEO Executive",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Graphic Designer",
    type: "Full Time, Part Time",
    seats: 4,
  },
  {
    title: "Project Manager",
    type: "Full Time, Part Time",
    seats: 4,
  },
];

export default function Careers() {
  return (
    <div>
      <PageIntroduction title={"Careers"} image={"/careers.png"} />

      <div className="p-24 flex flex-col gap-8 bg-gray-100">
        <div>
          <p className="landing-page-subheading">Hiring Steps</p>
          <h2 className="landing-page-heading">Our Recruitment Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5  min-h-[400px] h-full gap-8 items-center ">
          {steps.map((step, index) => (
            <div className="flex flex-col items-center justify-between h-full ">
              <div className="relative flex-1 h-full w-full">
                <img
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-[22px] font-semibold text-center">
                {step.title}
              </h3>
            </div>
          ))}
          <div className="-rotate-90 ">
            <h3 className="text-[5vw] font-semibold text-primary/30 text-center ">
              JOIN
            </h3>
          </div>
        </div>
      </div>
      <div className="py-24 px-36 flex gap-16">
        <div className="flex-[3]">
          <p className="landing-page-subheading">Job Positions</p>
          <h2 className="landing-page-heading mb-8">Start Work with Us!</h2>

          <p className="text-[25px] leading-loose">
            If you are passionate about providing solutions to IT needs then
            Decimal Solutions is a perfect place for you to work. We believe in
            serving our customers with the best by using the right tools. If you
            have it in you to contribute to the digital world; submit your
            resume today and we'll get back to you.
          </p>
          <h3 className="text-[25px] font-semibold mt-12 mb-8">
            Why Work with Us?
          </h3>
          <p className="text-[25px] leading-loose">
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

      <div className="bg-primary px-24 py-8">
        <p className={cn("landing-page-subheading", "!text-white")}>
          Job Filter
        </p>
        <h2 className={cn("landing-page-heading", "!text-white")}>
          Find your desired job & get recruited
        </h2>

        <div className="flex gap-8 mt-12">
          <SelectMenu
            className="flex-1 p-8 text-2xl"
            items={[
              { value: "Development", label: "Development" },
              {
                value: "Designing",
                label: "Designing",
              },
              { value: "Marketing", label: "Marketing" },
              { value: "Finance", label: "Finance" },
              { value: "Management", label: "Management" },
            ]}
            placeholder={"Category"}
          />
          <SelectMenu
            className="flex-1 p-8 text-2xl"
            items={[
              { value: "Full Time", label: "Full Time" },
              { value: "Part Time", label: "Part Time" },
              { value: "Internship", label: "Internship" },
              { value: "Hourly", label: "Hourly" },
              { value: "Contract", label: "Contract" },
              { value: "Work From Home", label: "Work From Home" },
            ]}
            placeholder={"Type"}
          />
          <SelectMenu
            className="flex-1 p-8 text-2xl"
            items={[
              { value: "Islamabad", label: "Islamabad" },
              { value: "Rawalpindi", label: "Rawalpindi" },
              { value: "Lahore", label: "Lahore" },
              { value: "Peshawar", label: "Peshawar" },
              { value: "Karachi", label: "Karachi" },
            ]}
            placeholder={"Location"}
          />

          <button className="text-2xl bg-white text-primary px-12 py-2 rounded-lg">
            Filter Jobs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 px-24 py-8 gap-8">
        {positions.map((position, index) => (
          <JobListing {...position} />
        ))}
      </div>
    </div>
  );
}
