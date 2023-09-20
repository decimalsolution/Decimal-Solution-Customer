import PageIntroduction from "@/components/generic/page-introduction";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-1.png",
    date: "2021-12-23",
  },
  {
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-2.png",
    date: "2021-12-28",
  },
  {
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-3.png",
    date: "2022-01-05",
  },
  {
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-4.png",
    date: "2021-12-23",
  },
  {
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-5.png",
    date: "2021-12-28",
  },
  {
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-6.png",
    date: "2022-01-05",
  },
];

export default function Blogs() {
  return (
    <div className="mb-16">
      <PageIntroduction title="Blogs" image={"/blogs.png"} />

      <div className="p-36 grid grid-cols-3 gap-16">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col justify-between cursor-pointer"
          >
            <div className="relative w-full aspect-[1.1]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
              <div className="w-60 h-28 absolute bottom-0 left-0 bg-primary/80 flex items-center px-4 py-2">
                <p className="text-white text-6xl font-bold p-4 border-t-4">
                  {new Date(blog.date).toLocaleDateString("default", {
                    day: "2-digit",
                  })}
                </p>
                <div className="text-xl text-white leading-6">
                  <p>{new Date(blog.date).getFullYear()}</p>
                  <p>
                    {new Date(blog.date).toLocaleString("default", {
                      month: "long",
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[33px] font-bold">{blog.title}</h3>
              <p className="mt-2 text-2xl">{blog.headline}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 items-center justify-center [&_*]:transition-all [&_*]:duration-300">
        <div className="h-16 w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800">
          <ChevronLeft size={40} className="group-hover:text-white" />
        </div>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="h-16 w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800"
            >
              <p className="text-3xl group-hover:text-white">{index + 1}</p>
            </div>
          ))}
        <div className="h-16 w-16 grid place-items-center cursor-pointer rounded-full border border-gray-500/50 group hover:bg-gray-800">
          <ChevronRight size={40} className="group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}
