import CustomInput from "@/components/generic/custom-input";
import CustomTextArea from "@/components/generic/custom-textarea";
import PageIntroduction from "@/components/generic/page-introduction";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ContactUs() {
  const data = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/contactUs",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const response = await data.json();
  const contactInfo = response.data[0];

  return (
    <div>
      <PageIntroduction title="Contact Us" image={"/contact-us.png"} />
      <div className="flex flex-col lg:flex-row items-stretch justify-center mb-4 gap-4 xl:gap-16">
        <div className="flex-1 flex flex-col gap-8 bg-gray-100 p-4  py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 px-16 lg:px-8 xl:!px-[60px]  relative ">
          <div className="hidden xl:block absolute right-0 top-0 w-[50px] h-full py-24">
            <div className="w-full h-full bg-primary/70"></div>
          </div>
          <div>
            <h2 className="landing-page-heading">Get in Touch with Us</h2>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-primary  md:text-lg lg:text-xl xl:text-[25px] mb-2">
              Contact Number:
            </h3>
            <p className=" md:text-lg lg:text-xl xl:text-[25px]">
              {" "}
              {contactInfo.primaryContact}{" "}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-primary  md:text-lg lg:text-xl xl:text-[25px] mb-2">
              Email:
            </h3>
            <p className=" md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo.primaryEmail}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-primary  md:text-lg lg:text-xl xl:text-[25px] mb-2">
              Office Address:
            </h3>
            <p className=" md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo.primaryAddress}
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-4 xl:gap-6 2xl:gap-8">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social Icons/purple/facebook.png"
                className="w-7 h-7 sm:w-9 sm:h-9 lg:h-11 lg:w-11"
              />
            </a>

            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social Icons/purple/instagram-2.png"
                className="w-7 h-7 sm:w-9 sm:h-9 lg:h-11 lg:w-11"
              />
            </a>
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social Icons/purple/linkedin.png"
                className="w-7 h-7 sm:w-9 sm:h-9 lg:h-11 lg:w-11"
              />
            </a>

            <a
              href={contactInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social Icons/purple/youtube.png"
                className="w-7 h-7 sm:w-9 sm:h-9 lg:h-11 lg:w-11"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 px-16 lg:px-8 lg:gap-8 p-4 xl:pr-36 py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
          <div>
            <h2 className="landing-page-heading">Fill up the Form</h2>
          </div>
          <div className="grid xl:grid-cols-2 gap-4 lg:gap-8">
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Email" type="email" />
            <CustomInput
              placeholder="Interested In"
              className="xl:col-span-2"
            />
            <CustomTextArea
              placeholder="Write your Message"
              className="xl:col-span-2"
            />
          </div>
          <button className="bg-primary text-white text-base md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 lg:px-12 xl:px-16 py-2 md:py-3 lg:py-4 rounded-lg self-center xl:self-end">
            Get Quote
          </button>
        </div>
      </div>
      <div className="aspect-[1.5] md:aspect-[2.5] lg:aspect-[3] relative">
        <Image
          src="/location.png"
          fill
          alt="location"
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}
