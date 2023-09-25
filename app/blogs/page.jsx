import PageIntroduction from "@/components/generic/page-introduction";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogView from "./blog-view";

export default async function Blogs() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/blogs"
  );

  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();

  const blogs = data.data;

  const totalPages = Math.ceil(blogs.length / 6);

  return (
    <div className="mb-16">
      <PageIntroduction title="Blogs" image={"/blogs.png"} />

      <div className="p-8 sm:p-12 md:p-20 lg:p-28 xl:p-32 2xl:p-36 grid-cols-1 md:grid-cols-2 grid 2xl:grid-cols-3 gap-8 lg:gap-16">
        {blogs?.map((blog, index) => (
          <BlogView key={"blog-" + index} blog={blog} />
        ))}
      </div>

      <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-center justify-center [&_*]:transition-all [&_*]:duration-300 px-8">
        <div className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:h-16 xl:w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800">
          <ChevronLeft className="group-hover:text-white h-3/4 w-3/4" />
        </div>
        {Array(totalPages)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:h-16 xl:w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800"
            >
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl group-hover:text-white">
                {index + 1}
              </p>
            </div>
          ))}
        <div className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:h-16 xl:w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800">
          <ChevronRight className="group-hover:text-white h-3/4 w-3/4" />
        </div>
      </div>
    </div>
  );
}
