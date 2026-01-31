import Image from "next/image";
import Link from "next/link";

import { Post } from "@/types/blog";
import { format } from "date-fns";
import { UnionBlogsProps } from "@/types/union";

import { FaRegCalendarAlt } from "react-icons/fa";
import blogDemo from "@/images/about-company-one.png";

export default function RecentBlogsSection(props: UnionBlogsProps) {
  const { recentData } = props;

  return (
    <div className="flex flex-col gap-gap lg:gap-gapLargest">
      <h3 className="text-fontDeskLargest font-semibold">Recent Blogs</h3>

      <div className="flex flex-col gap-gapLargest">
        {recentData?.map((blog: Post) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group flex gap-6 items-center"
          >
            {/* Blog Image */}
            <div className="relative w-[6rem] h-[6rem] rounded overflow-hidden flex-shrink-0">
              <Image
                src={
                  `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${blog.image}` ||
                  blogDemo
                }
                alt={blog.name}
                unoptimized
                quality={100}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Blog Details */}
            <div className="flex flex-col">
              <span
                title={blog.name}
                className="text-fontDeskLarge font-medium text-gray-800 leading-snug lg:group-hover:text-primaryOrange transition-colors line-clamp-2"
              >
                {blog.name}
              </span>
              {blog.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.description}
                </p>
              )}
              {blog.created_at && (
                <span className="text-fontDeskSmall font-semibold text-gray-800 flex gap-2 items-center">
                  <FaRegCalendarAlt size={12} />
                  {format(new Date(blog.created_at), "MMMM dd, yyyy")}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
