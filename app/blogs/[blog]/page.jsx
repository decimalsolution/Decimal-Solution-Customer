import PageIntroduction from "@/components/generic/page-introduction";
import {
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-1.png",
    date: "2021-12-23",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-2.png",
    date: "2021-12-28",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    headline:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
    image: "/blogs/image-3.png",
    date: "2022-01-05",
  },
];

export default function SpecificBlog() {
  return (
    <div>
      <PageIntroduction title="Blog Title" image={"/blogs.png"} />
      <div className="px-36 py-16">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex gap-4 items-center">
            <h2 className="landing-page-heading">Lorem Ipsum</h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400 ">
              (05 January 2022)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full grid place-items-center hover:bg-[#3b5998] transition-all duration-300">
              <Facebook
                strokeWidth={0}
                className="text-white fill-white w-3/4 h-3/4"
              />
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full grid place-items-center hover:bg-[#00acee] transition-all duration-300">
              <Twitter
                strokeWidth={0}
                className="text-white fill-white w-3/4 h-3/4"
              />
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full grid place-items-center hover:bg-[#d62976] transition-all duration-300">
              <Instagram strokeWidth={2} className="text-white w-3/4 h-3/4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base md:text-lg lg:text-xl xl:text-2xl !leading-loose my-8">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>

        <div className="grid-cols-1 md:grid-cols-2 grid 2xl:grid-cols-3 gap-8 lg:gap-16">
          {blogs.map((blog, index) => (
            <Link key={"blog-" + index + "-link"} href={`/blogs/${blog.id}`}>
              <div className="flex flex-col justify-between cursor-pointer">
                <div className="relative w-full aspect-[1.1]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className=" w-36 h-16  sm:w-44 sm:h-20 lg:w-52 lg:h-24 xl:w-60 xl:h-28 absolute bottom-0 left-0 bg-primary/80 flex items-center justify-center px-4 py-2">
                    <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-2 mr-4 lg:p-4 border-t-2 lg:border-t-4">
                      {new Date(blog.date).toLocaleDateString("default", {
                        day: "2-digit",
                      })}
                    </p>
                    <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white leading-6">
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
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[33px] font-bold">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-base md:text-lg lg:text-xl xl:text-2xl">
                    {blog.headline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          className="text-primary text-3xl uppercase font-medium hover:underline my-16 block"
          href={"/blogs"}
        >
          <div className="flex gap-4 items-center">
            <ChevronLeft className="text-primary w-10 h-10" />
            <p>Go Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
