import PageIntroduction from "@/components/generic/page-introduction";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
  const res = await fetch(
    "https://backend.decimalsolution.com/api/v1/web/blogs"
  );

  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();

  const blogs = data.data;

  return (
    <div className="mb-16">
      <PageIntroduction title="Blogs" image={"/blogs.png"} />

      <div className="p-8 sm:p-12 md:p-20 lg:p-28 xl:p-32 2xl:p-36 grid-cols-1 md:grid-cols-2 grid 2xl:grid-cols-3 gap-8 lg:gap-16">
        {blogs.map((blog, index) => (
          <Link key={"blog-" + index + "-link"} href={`/blogs/${blog._id}`}>
            <div className="flex flex-col justify-between cursor-pointer">
              <div className="relative w-full aspect-[1.1]">
                <Image
                  src={blog.blogImage}
                  alt={blog.blogTitle}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                <div className=" w-36 h-16  sm:w-44 sm:h-20 lg:w-52 lg:h-24 xl:w-60 xl:h-28 absolute bottom-0 left-0 bg-primary/80 flex items-center justify-center px-4 py-2">
                  <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-2 mr-4 lg:p-4 border-t-2 lg:border-t-4">
                    {new Date(blog.createdAt).toLocaleDateString("default", {
                      day: "2-digit",
                    })}
                  </p>
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white leading-6">
                    <p>{new Date(blog.createdAt).getFullYear()}</p>
                    <p>
                      {new Date(blog.createdAt).toLocaleString("default", {
                        month: "long",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[33px] font-bold">
                  {blog.blogTitle}
                </h3>
                <p className="mt-2 text-base md:text-lg lg:text-xl xl:text-2xl line-clamp-4">
                  {blog.blogData}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 items-center justify-center [&_*]:transition-all [&_*]:duration-300 px-8">
        <div className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:h-16 xl:w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800">
          <ChevronLeft className="group-hover:text-white h-3/4 w-3/4" />
        </div>
        {Array(4)
          .fill(0)
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
