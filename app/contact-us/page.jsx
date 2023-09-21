import CustomInput from "@/components/generic/custom-input";
import CustomTextArea from "@/components/generic/custom-textarea";
import PageIntroduction from "@/components/generic/page-introduction";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div>
      <PageIntroduction title="Contact Us" image={"/contact-us.png"} />
      <div className="flex items-stretch justify-center mb-4 gap-16">
        <div className="flex-1 flex flex-col gap-8 bg-gray-100 pl-36 py-24 relative pr-[60px]">
          <div className="absolute right-0 top-0 w-[50px] h-full py-24">
            <div className="w-full h-full bg-primary/70"></div>
          </div>
          <div>
            <p className="landing-page-subheading">Contact Us</p>
            <h2 className="landing-page-heading">Get in Touch with Us</h2>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-primary text-[25px] mb-2">Contact Number:</h3>
            <p className="text-[25px]"> +92 300 7171197, +92 335 4749732</p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-primary text-[25px] mb-2">Email:</h3>
            <p className="text-[25px]">info@decimalsolution.com</p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-primary text-[25px] mb-2">Office Address:</h3>
            <p className="text-[25px]">
              Office No# 17, 2rd Floor, Zaki Centre, I-8 Markaz Islamabad, 44000
            </p>
          </div>
          <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
            <div className="w-9 h-9 xl:w-8 2xl:w-12 xl:h-8 2xl:h-12  border-2 border-primary grid place-items-center rounded-lg p-2">
              <Facebook
                className="text-primary w-full h-full"
                fill="currentColor"
                strokeWidth={0}
              />
            </div>

            <Instagram
              className="text-primary w-10 h-10 xl:w-14 xl:h-14"
              strokeWidth={1}
            />

            <div className=" w-9 h-9 xl:w-8 2xl:w-12 xl:h-8 2xl:h-12 border-2 border-primary grid place-items-center rounded-lg p-2">
              <Linkedin
                className="text-primary w-full h-full"
                fill="currentColor"
                strokeWidth={0}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 pr-36 py-24">
          <div>
            <p className="landing-page-subheading">Get Pure Estimate</p>
            <h2 className="landing-page-heading">Fill up the Form</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Email" type="email" />
            <CustomInput placeholder="Interested In" className="col-span-2" />
            <CustomTextArea
              placeholder="Write your Message"
              className="col-span-2"
            />
          </div>
          <button className="bg-primary text-white text-2xl px-16 py-4 rounded-lg self-end">
            Get Quote
          </button>
        </div>
      </div>
      <div className="aspect-[3] relative">
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
