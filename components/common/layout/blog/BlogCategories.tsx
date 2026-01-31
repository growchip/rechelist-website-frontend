"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BlogCategoriesProps = {
  category: {
    name: string;
    slug: string;
  };
};

const BlogCategories: React.FC<BlogCategoriesProps> = ({ category }) => {
  const pathname = usePathname();
  const isActive = pathname === `/blog/category/${category.slug}`;

  return (
    <Link
      key={category.slug}
      href={`/blog/category/${category.slug}`}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-primaryOrange to-secondaryYellow text-white"
                    : "bg-gray-100 text-black lg:hover:bg-primaryOrange lg:hover:text-white"
                }
              `}
    >
      {category.name}
    </Link>
  );
};

export default BlogCategories;
