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
import BlogView from "../blog-view";

export default async function SpecificBlog({ params }) {
  const blogId = params.blog;

  const res = await fetch(
    `https://backend.decimalsolution.com/api/v1/web/blogs/${blogId}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!res.ok) throw new Error("Something went wrong");

  const data = await res.json();

  const blog = data.data;

  const blogs = data.recentBlogs;

  return (
    <div>
      <PageIntroduction title={blog.blogTitle} image={blog.blogImage} />
      <div className="px-36 py-16">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex gap-4 items-center">
            <h2 className="landing-page-heading">{blog.blogTitle} </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400 ">
              (
              {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              )
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={
                // Write the link to to share the link of the blog on Facebook
                "https://www.facebook.com/sharer/sharer.php?u=" +
                "https://decimalsolution.com/blogs/" +
                blogId
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full grid place-items-center hover:bg-[#3b5998] transition-all duration-300">
                <Facebook
                  strokeWidth={0}
                  className="text-white fill-white w-3/4 h-3/4"
                />
              </div>
            </Link>
            <Link
              // Write the link to to share the link of the blog on Twitter
              href={
                "https://twitter.com/intent/tweet?url=" +
                "https://decimalsolution.com/blogs/" +
                blogId
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full grid place-items-center hover:bg-[#00acee] transition-all duration-300">
                <Twitter
                  strokeWidth={0}
                  className="text-white fill-white w-3/4 h-3/4"
                />
              </div>
            </Link>
            <Link
              // Write the link to to share the link of the blog on LinkedIn
              href={
                "https://www.linkedin.com/shareArticle?mini=true&url=" +
                "https://decimalsolution.com/blogs/" +
                blogId
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full grid place-items-center hover:bg-[#0072b1] transition-all duration-300">
                <Linkedin strokeWidth={2} className="text-white w-3/4 h-3/4" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base md:text-lg lg:text-xl xl:text-2xl !leading-loose my-8">
          {blog.blogData}
        </div>

        <div className="grid-cols-1 md:grid-cols-2 grid 2xl:grid-cols-3 gap-8 lg:gap-16">
          {blogs?.map((blog, index) => (
            <BlogView key={"blog-" + index} blog={blog} />
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
