import CircularProgress from "@/components/generic/circular-progress";
import PageIntroduction from "@/components/generic/page-introduction";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmployeeCard from "./employee-card";

const stats = [
  {
    title: "Mobile App Development",
    progress: 100,
  },
  {
    title: "Website Development",
    progress: 95,
  },
  {
    title: "AR/VR Game",
    progress: 90,
  },
  {
    title: "UI/UI Design",
    progress: 75,
  },
  {
    title: "Digital Marketing",
    progress: 65,
  },
];

export default async function AboutUs() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/teamMembers",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();

  const team = data.data;

  return (
    <div className="flex flex-col items-center">
      <PageIntroduction title={"About Us"} image={"/about-us.png"} />

      <div className="py-36 px-24 flex flex-col items-center">
        <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-semibold uppercase text-center mb-2 lg:mb-8">
          Our Mission
        </h2>

        <div className="text-base lg:text-lg xl:text-2xl text-center max-w-7xl flex flex-col items-center gap-8 justify-center">
          <div className="relative">
            <img src="/icons/quote.png" className="absolute -top-20 -left-16" />
            <p>
              Our mission is to provide all sorts of IT solutions and services
              to clients under one umbrella. We aim to provide quality products
              and perform strict testing so clients can have a product that is
              ready to use without further updates.
            </p>
            <img
              src="/icons/quote.png"
              className="absolute -bottom-12 -right-12 rotate-180"
            />
          </div>
          <p>
            Dr. Tehseen Riaz Abbasi, <span className="text-primary">CEO</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 max-w-7xl w-full gap-8 lg:gap-16">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 lg:w-[150px] lg:h-[150px] rounded-full grid place-items-center relative ">
              <Image
                src="/icons/account-search.png"
                alt="About Us 1"
                quality={100}
                fill
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-semibold uppercase text-center mt-8">
              Who We Are
            </h3>
            <p className="text-base lg:text-lg xl:text-2xl text-center mt-2 lg:mt-8 !leading-loose">
              We are a team of software development and testing enthusiasts,
              working tirelessly on software quality assurance. The last 7 years
              were the time we founded, developed, grew, and amazed. And we are
              still growing by working with some major clients from all over the
              world.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 lg:w-[150px] lg:h-[150px] rounded-full grid place-items-center relative">
              <Image
                src="/icons/diamond.png"
                alt="About Us 1"
                quality={100}
                fill
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-semibold uppercase text-center mt-8">
              What We Do
            </h3>
            <p className="text-base lg:text-lg xl:text-2xl text-center mt-2 lg:mt-8 !leading-loose">
              We help set up and maintain a digital presence of your brand or
              product. Our creative team makes sure that you have the most
              updated and innovative technology at your hands to boost your
              business. Your success is our success that's why we prioritize
              customization, listen to your needs, and cover all the bases.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-gray-100 w-full px-36 py-24">
        {stats.map((stat, index) => (
          <div className="flex flex-col items-center justify-between gap-4">
            <CircularProgress progress={stat.progress} />
            <p className="text-center text-lg xl:text-2xl font-medium">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className="py-36 px-8 xs:px-12 md:px-24 flex flex-col items-center w-full gap-16">
        <div>
          <p className="landing-page-subheading">Our Team</p>
          <h2 className="landing-page-heading">We are a Team of Experts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          {team.map((member, index) => (
            <EmployeeCard member={member} key={"employee-card-" + index} />
          ))}
        </div>
      </div>
    </div>
  );
}
