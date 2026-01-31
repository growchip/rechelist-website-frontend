import Image from "next/image";
import Link from "next/link";

import { BlogPost, Post } from "@/types/blog";
import { format } from "date-fns";

import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import blogDemo from "@/images/about-company-one.png";

type BlogsCardProps = {
  blog: Post | BlogPost;
  categoryName?: string;
};

const BlogsCard: React.FC<BlogsCardProps> = ({ blog, categoryName }) => {
  const firstCategory = (blog as Post).categories?.[0]?.name || categoryName;
  const blogUrl = `/blog/${blog.slug}`;

  const formattedDate = blog.created_at
    ? format(new Date(blog.created_at), "MMMM dd, yyyy")
    : "";

  const blogImage = blog.image
    ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${blog.image}`
    : blogDemo;

  const blogTitle = (blog as BlogPost).title || (blog as Post).name;
  const blogAuthor =
    (blog as BlogPost).author || (blog as Post).author || "Admin";

  return (
    <div className="flex flex-col sm:flex-row gap-4 rounded-lg overflow-hidden bg-white shadow-[0_3px_10px_rgba(0,123,255,0.15)] hover:shadow-[0_3px_20px_rgba(0,123,255,0.2)] transition-shadow duration-300">
      {/* Image */}
      <Link
        href={blogUrl}
        className="relative w-full sm:w-[15rem] h-[13rem] shrink-0"
      >
        <Image
          src={blogImage}
          alt={blogTitle}
          fill
          className="object-cover"
          unoptimized
          quality={100}
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-between p-4">
        {/* Category */}
        <div className="text-primary font-medium text-sm uppercase mb-2">
          {firstCategory}
        </div>

        {/* Title */}
        <Link href={blogUrl} className="block">
          <h3 className="text-lg font-semibold leading-snug transition-colors duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primaryOrange hover:to-secondaryYellow">
            {blogTitle}
          </h3>
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-8 text-gray-500 text-sm mt-2">
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt size={14} />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1">
            <FaUser size={14} />
            {blogAuthor}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {`${blog.description}...`}
        </p>
      </div>
    </div>
  );
};

export default BlogsCard;
