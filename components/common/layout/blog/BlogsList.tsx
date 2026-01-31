"use client";

import { useEffect, useState } from "react";

import { BlogPost, Post } from "@/types/blog";
import BlogsCard from "./BlogsCard";
import Button from "@/components/ui/Button";

type BlogsListProps = {
  categoryName?: string;
  blogsList: Post[] | BlogPost[];
  per_page?: number;
  last_page?: number;
  total?: number;
  pageType?: "allBlogs" | "categoryBlogs";
  slug?: string;
};

const BlogsList: React.FC<BlogsListProps> = ({
  categoryName,
  blogsList,
  per_page,
  last_page,
  total,
  pageType,
  slug,
}) => {
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Post[] | BlogPost[]>(blogsList ?? []);

  const hasBlogs = blogs.length > 0;

  // Check if all blogs are already loaded
  useEffect(() => {
    const totalBlogsCount = total ?? 0;

    if (totalBlogsCount > 0 && blogs.length >= totalBlogsCount) {
      setAllLoaded(true);
    } else if (
      !last_page ||
      last_page <= 1 ||
      blogs.length < (per_page ?? 10)
    ) {
      setAllLoaded(true);
    } else {
      setAllLoaded(false);
    }
  }, [last_page, blogs.length, per_page, total]);

  const handleShowMore = async () => {
    if (loading || allLoaded) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const endpoint =
        pageType === "allBlogs"
          ? `/api/all-blogs`
          : `/api/category-blogs/${slug}`;

      const res = await fetch(`${endpoint}?page=${nextPage}`);
      const data = await res.json();

      if (res.ok && data?.data?.length > 0) {
        setBlogs((prev) => [...prev, ...data.data]);
        setCurrentPage(nextPage);

        if (nextPage >= (data.last_page ?? 1)) {
          setAllLoaded(true);
        }
      } else {
        setAllLoaded(true);
      }
    } catch (err) {
      console.error("Error fetching more blogs:", err);
      setAllLoaded(true);
    } finally {
      setLoading(false);
    }
  };

  if (!hasBlogs) {
    return (
      <p className="text-center text-gray-500 py-4 lg:py-8 text-lg font-medium">
        No blogs found!
      </p>
    );
  }

  return (
    <div>
      {/* Blogs List */}
      <div className="flex flex-col gap-8">
        {blogs.map((blog) => (
          <BlogsCard key={blog.id} blog={blog} categoryName={categoryName} />
        ))}
      </div>

      {/* Show More Button + Status */}
      <div className="mt-8 lg:mt-12 flex flex-col-reverse gap-gap lg:gap-0 items-center justify-center relative">
        {!allLoaded && (
          <Button
            type="button"
            text={loading ? "Loading..." : "Show More"}
            className={`px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-lg text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
            }`}
            onClick={handleShowMore}
          />
        )}

        <span className="lg:absolute right-0 flex items-center gap-2 font-semibold text-gray-700 text-fontDesk">
          <svg
            className="w-5 h-5 text-primaryOrange"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 3h4v4H4V3zM4 9h4v4H4V9zM4 15h4v4H4v-4zM10 3h4v4h-4V3zM10 9h4v4h-4V9zM10 15h4v4h-4v-4zM16 3h4v4h-4V3zM16 9h4v4h-4V9zM16 15h4v4h-4v-4z" />
          </svg>
          {`Showing 1-${blogs.length} of ${total ?? blogs.length} Blogs`}
        </span>
      </div>
    </div>
  );
};

export default BlogsList;
