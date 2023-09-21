import CircularProgress from "@/components/generic/circular-progress";
import PageIntroduction from "@/components/generic/page-introduction";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Adam John",
    image: "/team/image-1.png",
    designation: "CEO",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Janka Indrajith",
    image: "/team/image-2.png",
    designation: "COO",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "John Kabras",
    image: "/team/image-3.png",
    designation: "Senior Android Developer",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Tara Smith",
    image: "/team/image-4.png",
    designation: "Lead Graphic Designer",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Philips Shene Moris",
    image: "/team/image-5.png",
    designation: "Senior Web Developer",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Memphis Kayle",
    image: "/team/image-6.png",
    designation: "Marketing Manager",
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <PageIntroduction title={"About Us"} image={"/about-us.png"} />

      <div className="py-36 px-24 flex flex-col items-center">
        <h2 className="text-[40px] font-semibold uppercase text-center mb-8">
          Our Mission
        </h2>

        <div className="text-2xl text-center max-w-7xl flex flex-col items-center gap-8 justify-center">
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
            Mileson Adam John, <span className="text-primary">CEO</span>
          </p>
        </div>

        <div className="grid grid-cols-2 mt-24 max-w-7xl w-full gap-16">
          <div className="flex flex-col items-center ">
            <Image
              src="/icons/account-search.png"
              alt="About Us 1"
              width={150}
              height={150}
              quality={100}
            />
            <h3 className="text-[40px] font-semibold uppercase text-center mt-8">
              Who We Are
            </h3>
            <p className="text-2xl text-center mt-8 leading-loose">
              We are a team of software development and testing enthusiasts,
              working tirelessly on software quality assurance. The last 2 years
              were the time we founded, developed, grew, and amazed. And we are
              still growing by working with some major clients from all over the
              world.
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <Image
              src="/icons/diamond.png"
              alt="About Us 2"
              width={150}
              height={150}
              quality={100}
            />
            <h3 className="text-[40px] font-semibold uppercase text-center mt-8">
              What We Do
            </h3>
            <p className="text-2xl text-center mt-8 leading-loose">
              We help set up and maintain a digital presence of your brand or
              product. Our creative team makes sure that you have the most
              updated and innovative technology at your hands to boost your
              business. Your success is our success that's why we prioritize
              customization, listen to your needs, and cover all the bases.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 bg-gray-100 w-full px-36 py-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <CircularProgress progress={100} />
          <p className="text-center text-2xl font-medium">
            Mobile App
            <br />
            Development
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <CircularProgress progress={100} />
          <p className="text-center text-2xl font-medium">
            Website
            <br />
            Development
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <CircularProgress progress={100} />
          <p className="text-center text-2xl font-medium">
            AR/VR
            <br />
            Game
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <CircularProgress progress={100} />
          <p className="text-center text-2xl font-medium">
            UI/UI
            <br />
            Design
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <CircularProgress progress={100} />
          <p className="text-center text-2xl font-medium">
            Digital
            <br />
            Marketing
          </p>
        </div>
      </div>

      <div className="py-36 px-24 flex flex-col items-center w-full gap-16">
        <div>
          <p className="landing-page-subheading">Our Team</p>
          <h2 className="landing-page-heading">We are a Team of Experts</h2>
        </div>
        <div className="grid grid-cols-3 w-full gap-8">
          {team.map((member, index) => (
            <div
              className="flex flex-col items-stretch justify-center  gap-4"
              key={index}
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  quality={100}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-semibold">{member.name}</p>
                <p className="text-xl ">{member.designation}</p>
                <div className="flex gap-4">
                  {member.facebook && (
                    <Link href={member.facebook} target="_blank">
                      <div className="w-6 h-6 bg-gray-300 rounded-full grid place-items-center hover:bg-[#3b5998] transition-all duration-300">
                        <Facebook
                          size={20}
                          strokeWidth={0}
                          className="text-white fill-white"
                        />
                      </div>
                    </Link>
                  )}
                  {member.twitter && (
                    <Link href={member.twitter} target="_blank">
                      <div className="w-6 h-6 bg-gray-300 rounded-full grid place-items-center hover:bg-[#00acee] transition-all duration-300">
                        <Twitter
                          size={18}
                          strokeWidth={0}
                          className="text-white fill-white"
                        />
                      </div>
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link href={member.linkedin} target="_blank">
                      <div className="w-6 h-6 bg-gray-300 rounded-full grid place-items-center hover:bg-[#0072b1] transition-all duration-300">
                        <Linkedin
                          size={16}
                          strokeWidth={0}
                          className="text-white fill-white"
                        />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
