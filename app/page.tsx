import dynamic from "next/dynamic";

import BannerContent from "@/components/common/layout/BannerContent";
import BlogsHome from "@/components/common/layout/BlogsHome";
import Certifications from "@/components/common/layout/Certifications";
import MainBanner from "@/components/common/layout/MainBanner";
import ProductCategoriesList from "@/components/common/layout/ProductCategoriesList";
import ProductRangeList from "@/components/common/layout/ProductRangeList";
import Speciality from "@/components/common/layout/Speciality";
import PCDSectionHome from "@/components/common/layout/PCDSectionHome";

const HomeProductsList = dynamic(
  () => import("@/components/common/layout/HomeProductsList")
);

const Testimonials = dynamic(
  () => import("@/components/common/layout/Testimonials")
);
import {
  getBannerAndDesc,
  getCertificates,
  getSpeciality,
  getBlogs,
  getFeaturedProducts,
  getTestimonials,
  getAboutUsData,
} from "@/apis/get-apis";

import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

export const generateMetadata = async () => {
  const pageData = await getBannerAndDesc();
  const pageUrl = getAbsoluteUrl("/");

  return generateSeoMetadata(pageData, pageUrl, "website");
};

export default async function Home() {
  //------PARALLEL DATA FETCHING FOR CRITICAL ELEMENTS--------------------
  const [bannerDesc] = await Promise.all([getBannerAndDesc()]);

  // PARALLEL DATA FETCHING FOR NON CRITICAL ELEMENTS WITH ERROR HANDELLING
  // Errors don’t break other requests (with Promise.allSettled())
  const [
    allCertificatesResult,
    specialityResult,
    blogsResult,
    featuredProductsResult,
    testimonialsResult,
    aboutUsResult,
  ] = await Promise.allSettled([
    getCertificates(),
    getSpeciality(),
    getBlogs(),
    getFeaturedProducts(),
    getTestimonials(),
    getAboutUsData(),
  ]);

  const allCertificates =
    allCertificatesResult.status === "fulfilled"
      ? allCertificatesResult.value
      : null;

  const specialityData =
    specialityResult.status === "fulfilled" ? specialityResult.value : null;

  const blogsData =
    blogsResult.status === "fulfilled" ? blogsResult.value : null;

  const featuredData =
    featuredProductsResult.status === "fulfilled"
      ? featuredProductsResult.value
      : null;

  const testimonialsData =
    testimonialsResult.status === "fulfilled" ? testimonialsResult.value : null;

  const aboutUsData =
    aboutUsResult.status === "fulfilled" ? aboutUsResult.value : null;

  const latestBlogs = blogsData?.data?.slice(0, 3) || [];

  return (
    <main>
      <>
        <div className="mt-0 lg:mt-[-6.25rem] relative">
          <MainBanner bannerImg={bannerDesc.banner_image} />
          <BannerContent
            bannerTitle={bannerDesc.site_title}
            bannerDesc={bannerDesc.site_description}
          />
        </div>
        <ProductCategoriesList />
        <PCDSectionHome />
        <ProductRangeList />
        <Certifications certificates={allCertificates} aboutUs={aboutUsData} />
        <HomeProductsList products={featuredData} />
        <Speciality data={specialityData} />
        <Testimonials testimonials={testimonialsData} />
        <BlogsHome blogs={latestBlogs} />
      </>
    </main>
  );
}
