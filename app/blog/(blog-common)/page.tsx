import { getBlogs, getLogoAndDesc } from "@/apis/get-apis";
import BlogListingLayout from "@/components/common/layout/blog/BlogListingLayout";
import { AllBlogsPageProps } from "@/types/union";
import { ApiSeoData, generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

export const generateMetadata = async () => {
  const logoAndDesc = await getLogoAndDesc();
  const pageData: ApiSeoData = {
    seo_title: "Blogs",
    seo_description: "Insights & Updates in Healthcare",
    seo_image: logoAndDesc.logo,
  };

  const pageUrl = getAbsoluteUrl("/blog");
  return generateSeoMetadata(pageData, pageUrl, "article");
};

const AllBlogsPage = async () => {
  const blogsData = await getBlogs();
  const recentBlogsData = blogsData.data.slice(0, 5);

  const props: AllBlogsPageProps = {
    pageType: "allBlogs",
    data: blogsData,
    recentData: recentBlogsData,
  };
  return <BlogListingLayout {...props} />;
};

export default AllBlogsPage;
