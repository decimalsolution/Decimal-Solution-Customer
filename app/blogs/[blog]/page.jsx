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

  const res = await fetch(`${process.env.BASE_URL}/blogs/${blogId}`, {
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) throw new Error("Something went wrong");

  const data = await res.json();

  const blog = data.data;

  const blogs = data.recentBlogs;

  return (
    <div>
      <PageIntroduction title={blog.blogTitle} image={blog.blogImage} />
      <div className="px-36 py-16">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center gap-4">
            <h2 className="landing-page-heading">{blog.blogTitle} </h2>
            <p className="text-sm text-gray-400 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">
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
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#3b5998]">
                <Facebook
                  strokeWidth={0}
                  className="h-3/4 w-3/4 fill-white text-white"
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
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#00acee]">
                <Twitter
                  strokeWidth={0}
                  className="h-3/4 w-3/4 fill-white text-white"
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
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#0072b1]">
                <Linkedin strokeWidth={2} className="h-3/4 w-3/4 text-white" />
              </div>
            </Link>
          </div>
        </div>
        <div className="my-8 flex flex-col gap-4 text-base !leading-loose md:text-lg lg:text-xl xl:text-2xl">
          {blog.blogData}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 2xl:grid-cols-3">
          {blogs?.map((blog, index) => (
            <BlogView key={"blog-" + index} blog={blog} />
          ))}
        </div>

        <Link
          className="my-16 block text-3xl font-medium uppercase text-primary hover:underline"
          href={"/blogs"}
        >
          <div className="flex items-center gap-4">
            <ChevronLeft className="h-10 w-10 text-primary" />
            <p>Go Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
