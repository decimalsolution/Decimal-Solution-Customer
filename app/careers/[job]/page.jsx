import Link from "next/link";

export default function SpecificJob({ params }) {
  return (
    <div>
      <div className="flex flex-col items-stretch px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36 py-24 gap-16">
        <div className="mx-auto">
          <p className="landing-page-subheading !mb-4">Usquare Solutions</p>
          <h2 className="landing-page-heading">Unity 3D Developer</h2>
        </div>
        <div>
          <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row justify-between items-start">
            <div className="flex flex-col gap-4">
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Minimum Qualification:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Bachelors
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Experience Level:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Mid Level
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Experience Length:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  2 Years
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Location:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  San Francisco, USA
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Application Deadline:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  12/08/2022
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-[28px] font-medium text-black">
                Salary Range:{" "}
                <span className="font-light text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  $105,000 - $150,000
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
            We are searching for a Laravel developer to build web applications
            for our company. In this role, you will design and create projects
            using Laravel framework and PHP, and assist the team in delivering
            high-quality web applications, services, and tools for our business.
            <br />
            <br />
            To ensure success as a Laravel developer you should be adept at
            utilizing Laravel's GUI and be able to design a PHP application from
            start to finish. A top-notch Laravel developer will be able to
            leverage their expertise and experience of the framework to
            independently produce complete solutions in a short turnaround time.
          </p>
        </div>
        <div>
          <p className="text-base lg:text-lg xl:text-[28px]  font-semibold text-black mb-4">
            Laravel Developer Requirements:
          </p>
          <p className="text-base lg:text-lg xl:text-2xl font-light !leading-relaxed">
            A degree in programming, computer science, or a related field.
            Experience working with PHP, performing unit testing, and managing
            APIs such as REST. A solid understanding of application design using
            Laravel. Knowledge of database design and querying using SQL.
            Proficiency in HTML and JavaScript. Experience developing in Vue is
            considered a plus. Practical experience using the MVC architecture.
            The ability to work on LAMP development environment Problem-solving
            skills and critical mindset. Great communication skills. The desire
            and ability to learn.
          </p>
        </div>
        <div>
          <p className="text-base lg:text-lg xl:text-[28px]  font-semibold text-black mb-4">
            Responsibilities:
          </p>
          <p className="text-base lg:text-lg xl:text-2xl font-light !leading-relaxed">
            Discussing project aims with the client and development team.
            Designing and building web applications using Laravel.
            Troubleshooting issues in the implementation and debug builds.
            Working with front-end and back-end developers on projects. Testing
            functionality for users and the backend. Ensuring that integrations
            run smoothly. Scaling projects based on client feedback. Recording
            and reporting on work done in Laravel. Maintaining web-based
            applications. Presenting work in meetings with clients and
            management.
          </p>
        </div>
      </div>
    </div>
  );
}
