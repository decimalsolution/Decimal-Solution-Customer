import CircularProgress from "@/components/generic/circular-progress";
import PageIntroduction from "@/components/generic/page-introduction";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EmployeeCard from "./employee-card";

export const metadata = {
  title: "About Us",
  description:
    "Discover the essence of Decimal Solutions on our About Us page. We're more than a software house; we're a passionate team driving excellence in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Learn about our journey, values, and commitment to shaping a digital future.",
};

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/teamMembers`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();

  const team = data.data;

  return (
    <div className="flex flex-col items-center">
      <PageIntroduction title={"About Us"} image={"/about-us.png"} />

      <div className="flex flex-col items-center px-24 py-36">
        <h2 className="mb-2 text-center text-xl font-semibold uppercase lg:mb-8 lg:text-2xl xl:text-3xl 2xl:text-[40px]">
          Our Mission
        </h2>

        <div className="flex max-w-7xl flex-col items-center justify-center gap-8 text-center text-base lg:text-lg xl:text-2xl">
          <div className="relative">
            <img src="/icons/quote.png" className="absolute -left-16 -top-20" />
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

        <div className="mt-24 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center">
            <div className="relative grid h-24 w-24 place-items-center rounded-full lg:h-[150px] lg:w-[150px] ">
              <Image
                src="/icons/account-search.png"
                alt="About Us 1"
                quality={100}
                fill
                className="h-full w-full"
              />
            </div>
            <h3 className="mt-8 text-center text-xl font-semibold uppercase lg:text-2xl xl:text-3xl 2xl:text-[40px]">
              Who We Are
            </h3>
            <p className="mt-2 text-center text-base !leading-loose lg:mt-8 lg:text-lg xl:text-2xl">
              We are a team of software development and testing enthusiasts,
              working tirelessly on software quality assurance. The last 7 years
              were the time we founded, developed, grew, and amazed. And we are
              still growing by working with some major clients from all over the
              world.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative grid h-24 w-24 place-items-center rounded-full lg:h-[150px] lg:w-[150px]">
              <Image
                src="/icons/diamond.png"
                alt="About Us 1"
                quality={100}
                fill
                className="h-full w-full"
              />
            </div>
            <h3 className="mt-8 text-center text-xl font-semibold uppercase lg:text-2xl xl:text-3xl 2xl:text-[40px]">
              What We Do
            </h3>
            <p className="mt-2 text-center text-base !leading-loose lg:mt-8 lg:text-lg xl:text-2xl">
              We help set up and maintain a digital presence of your brand or
              product. Our creative team makes sure that you have the most
              updated and innovative technology at your hands to boost your
              business. Your success is our success that's why we prioritize
              customization, listen to your needs, and cover all the bases.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 bg-gray-100 px-36 py-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <div className="flex flex-col items-center justify-between gap-4">
            <CircularProgress progress={stat.progress} />
            <p className="text-center text-lg font-medium xl:text-2xl">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-16 px-8 py-36 xs:px-12 md:px-24">
        <div>
          <p className="landing-page-subheading text-center">Our Team</p>
          <h2 className="landing-page-heading">We are a Team of Experts</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <EmployeeCard member={member} key={"employee-card-" + index} />
          ))}
        </div>
      </div>
    </div>
  );
}
