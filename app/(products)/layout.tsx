import dynamic from "next/dynamic";

import { getFeaturedProducts, getTestimonials } from "@/apis/get-apis";

const HomeProductsList = dynamic(
  () => import("@/components/common/layout/HomeProductsList")
);

const Testimonials = dynamic(
  () => import("@/components/common/layout/Testimonials")
);

export default async function ProductsParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch once & cache for 1 hour
  const [featuredData, testimonialsData] = await Promise.all([
    getFeaturedProducts(),
    getTestimonials(),
  ]);

  return (
    <>
      {children}
      <HomeProductsList products={featuredData} />
      <Testimonials testimonials={testimonialsData} />
    </>
  );
}
