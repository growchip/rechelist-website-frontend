"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CategoriesResponse } from "@/types/products";

type CategoriesSidebarProps = {
  categoriesList: CategoriesResponse;
};

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categoriesList,
}) => {
  const pathname = usePathname();

  return (
    <aside className="w-full bg-gray-50 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-lg p-gap  flex-col gap-gapLarge h-fit sticky top-0 hidden lg:flex">
      <h3 className="text-lg font-semibold">Categories</h3>
      <ul className="space-y-2">
        {categoriesList.data.map((cat) => {
          const slug = cat.slug;
          const pathParts = pathname.split("/");
          const currentSlug = pathParts[2];
          const active = currentSlug === slug;

          return (
            <li key={slug}>
              <Link
                href={`/category/${slug}`}
                className={`block px-3 py-2 rounded-md transition duration-300
                   ${
                     active
                       ? "bg-gradient-to-r from-primary2 to-primary text-white"
                       : "hover:bg-primary/10 hover:text-primary"
                   }
                `}
              >
                {cat.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CategoriesSidebar;
