import Image from "next/image";

import { format } from "date-fns";
import { UnionBlogsProps } from "@/types/union";

import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

const SingleBlogDetail = (props: UnionBlogsProps) => {
  const { pageType, data } = props;

  if (pageType !== "blogDetail") return null;

  const blog = data.data;

  return (
    <div className="flex flex-col gap-6">
      {/* Blog Image */}
      <div className="w-full h-[15rem] md:h-[25rem] lg:h-[30rem] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${blog.image}`}
          alt={blog.name}
          fill
          unoptimized
          quality={100}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-gap lg:gap-gapUltra items-start lg:items-center">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {/* Categories */}
          {blog.categories.map((item, index) => (
            <span
              key={index}
              className="text-sm font-medium text-white bg-primaryBlue px-3 py-2 rounded-full"
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="flex gap-gap lg:gap-gapUltra">
          <span className="text-gray-700 font-medium flex items-center gap-2">
            <FaUser size={14} />
            {blog.author_name}
          </span>

          {/* Date */}
          <span className="text-gray-500 flex items-center gap-2">
            <FaRegCalendarAlt size={14} />
            {format(new Date(blog.created_at), "MMMM d, yyyy")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-gapSmall">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold leading-snug">
          {blog.name}
        </h1>

        {/* Blog Content */}
        <div
          className="prose prose-lg max-w-none prose-img:rounded-xl prose-img:my-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default SingleBlogDetail;
