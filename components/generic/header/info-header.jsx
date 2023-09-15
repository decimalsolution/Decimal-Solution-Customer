import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function InfoHeader() {
  return (
    <div className="flex flex-col items-center gap-4 xl:flex-row xl:items-stretch justify-between">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex items-center mr-4">
          <Phone className="text-primary" fill="currentColor" strokeWidth={0} />
          <p className="ml-2 text-lg 2xl:text-xl text-gray-700">
            <span>+92 345 5893337</span>,<span>+92 300 4257414</span>
          </p>
        </div>
        <div className="flex items-center mr-4">
          <Mail className="text-primary" />
          <p className="ml-2 text-lg 2xl:text-xl text-gray-700">
            <Link href="mailto:info@decimalsolutions.com">
              info@decimalsolutions.com
            </Link>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
        <div className="w-[1px] h-full bg-gray-400"></div>
        <div className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9 border-2 border-primary grid place-items-center rounded-lg">
          <Facebook
            className="text-primary"
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
        <div className="w-[1px] h-full bg-gray-400"></div>

        <Instagram
          className="text-primary w-10 h-10 xl:w-9 xl:h-9"
          strokeWidth={1.5}
        />
        <div className="w-[1px] h-full bg-gray-400"></div>

        <div className=" w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9 border-2 border-primary grid place-items-center rounded-lg">
          <Linkedin
            className="text-primary"
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
        <button className="h-12 w-56 xl:h-16 2xl:h-20 xl:w-64 2xl:w-80 text-white bg-primary xl:text-xl 2xl:text-2xl font-500">
          Contact Us
        </button>
      </div>
    </div>
  );
}
