"use client";
import { BlogData } from "@/components/Data/BlogData";
import Reveal from "@/components/utils/Reveal";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();
  const blogsList = BlogData.filter((item) => item.id !== params.id);
  const blog = BlogData.find((element) => element.id === params.id);
  return (
    <>
      {/* 
Install the "flowbite-typography" NPM package to apply styles and format the article content: 

URL: https://flowbite.com/docs/components/typography/ 
*/}
      <main className="pt-32 pb-16 lg:pt-32 lg:pb-24 bg-white text-black antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl ">
            <header className="mb-4 lg:mb-6 not-format">
              <Reveal sequence={8}>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                  {blog?.content.title}
                </h1>
              </Reveal>
            </header>
            <Reveal sequence={10}>
              <div className="pb-4">
                <p>{blog?.content.maindescription.part1} </p>
                <br />
                <p>{blog?.content.maindescription.part2}</p>
                <br />
                <p>{blog?.content.maindescription.part3}</p>
              </div>
            </Reveal>
            <figure>
              <img
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
              />
            </figure>
            <p>{blog?.content.maindescription.part4}</p>
            <br />
            <p>{blog?.content.maindescription.part5}</p>
            <br />
            <p>{blog?.content.maindescription.part6}</p>
            <br />
            <p>{blog?.content.maindescription.part7}</p>
            <br />
            <p>{blog?.content.maindescription.part8} </p>
          </article>
        </div>
      </main>
      <aside
        aria-label="Related Blogs"
        className="py-8 lg:py-24 bg-gray-600 rounded-xl p-1 sm:p-4 sm:py-8 "
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl text-center sm:text-left w-full font-bold text-blue-600 ">
            Related Blogs
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {blogsList.map((blog) => {
              return <BlogCard key={blog?.id} blog={blog} />;
            })}
          </div>
        </div>
      </aside>
    </>
  );
}

function BlogCard({ blog }: any) {
  return (
    <article className="max-w-xs">
      <Link href={`/blog/${blog?.id}`}>
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
          className="mb-5 rounded-lg"
          alt="Image 4"
        />
      </Link>
      <h2 className="mb-2 text-xl font-bold leading-tight text-white/90 ">
        <Link href={`/blog/${blog?.id}`}>{blog?.content.title}</Link>
      </h2>

      <Link
        href={`/blog/${blog?.id}`}
        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
      >
        {blog?.content.readTime}
      </Link>
    </article>
  );
}
