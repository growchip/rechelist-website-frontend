"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import ProductCard from "./ProductCard";
import { Product } from "@/types/products";

type ProductsGridProps = {
  productsList: Product[];
  per_page?: number;
  last_page?: number;
  total?: number;
  pageType: "category" | "type" | "allProducts";
  slug?: string;
};

const ProductsGrid: React.FC<ProductsGridProps> = ({
  productsList,
  per_page,
  last_page,
  total,
  pageType,
  slug,
}) => {
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>(productsList ?? []);

  // console.log(
  //   "ProductsGrid productsList:",
  //   productsList,
  //   "Slug:",
  //   slug,
  //   pageType
  // );

  const hasProducts = products.length > 0;

  // Check if all products are already loaded
  useEffect(() => {
    const totalProductsCount = total ?? 0;

    if (totalProductsCount > 0 && products.length >= totalProductsCount) {
      setAllLoaded(true);
    } else if (
      !last_page ||
      last_page <= 1 ||
      products.length < (per_page ?? 9)
    ) {
      setAllLoaded(true);
    } else {
      setAllLoaded(false);
    }
  }, [last_page, products.length, per_page, total]);

  const handleShowMore = async () => {
    if (loading || allLoaded) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const endpoint =
        pageType === "allProducts"
          ? `/api/all-products`
          : pageType === "type"
          ? `/api/type-products/${slug}`
          : `/api/category-products/${slug}`;

      const res = await fetch(`${endpoint}?page=${nextPage}`);
      const data = await res.json();

      if (res.ok && data?.data?.length > 0) {
        setProducts((prev) => [...prev, ...data.data]);
        setCurrentPage(nextPage);

        if (nextPage >= (data.last_page ?? 1)) {
          setAllLoaded(true);
        }
      } else {
        setAllLoaded(true);
      }
    } catch (err) {
      console.error("Error fetching more products:", err);
      setAllLoaded(true);
    } finally {
      setLoading(false);
    }
  };

  if (!hasProducts) {
    return (
      <p className="text-center text-gray-500 py-4 lg:py-8 text-lg font-medium">
        No products found!
      </p>
    );
  }

  return (
    <div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Show More Button + Status */}
      <div className="mt-8 flex flex-col-reverse gap-gap lg:gap-0 items-center justify-center relative">
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
            className="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 3h4v4H4V3zM4 9h4v4H4V9zM4 15h4v4H4v-4zM10 3h4v4h-4V3zM10 9h4v4h-4V9zM10 15h4v4h-4v-4zM16 3h4v4h-4V3zM16 9h4v4h-4V9zM16 15h4v4h-4v-4z" />
          </svg>
          {`Showing 1-${products.length} of ${
            total ?? products.length
          } Products`}
        </span>
      </div>
    </div>
  );
};

export default ProductsGrid;
