import Wrapper from "@/components/ui/Wrapper";
import BlogCategoriesSection from "@/components/common/layout/blog/BlogCategoriesSection";
import BlogsBannerSection from "@/components/common/layout/blog/BlogsBannerSection";
import RecentBlogsSection from "@/components/common/layout/blog/RecentBlogsSection";
import SingleBlogDetail from "@/components/common/layout/blog/SingleBlogDetail";
import { getBlogDetail, getBlogs } from "@/apis/get-apis";
import { BlogDetailPageProps } from "@/types/union";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const pageData = await getBlogDetail(slug);
  const pageUrl = getAbsoluteUrl(`/blog/${slug}`);

  return generateSeoMetadata(pageData?.seo || {}, pageUrl, "article");
}

const BlogDetail = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const blogDetailData = await getBlogDetail(slug);

  const blogsData = await getBlogs();
  const recentBlogsData = blogsData.data.slice(0, 5);

  const props: BlogDetailPageProps = {
    pageType: "blogDetail",
    data: blogDetailData,
    recentData: recentBlogsData,
  };

  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BlogsBannerSection {...props} />
      <Wrapper>
        {/* Mobile layout */}
        <div className="md:hidden mx-auto mt-gapLargest lg:mt-gapUltra flex flex-col gap-8">
          <SingleBlogDetail {...props} />
          <BlogCategoriesSection />
          <RecentBlogsSection {...props} />
        </div>

        {/* Desktop layout  */}
        <div className="hidden md:grid mx-auto mt-gapLargest lg:mt-[3rem] grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <SingleBlogDetail {...props} />
          <main className="flex flex-col gap-[3rem] h-fit sticky md:top-20 lg:top-8">
            <BlogCategoriesSection />
            <RecentBlogsSection {...props} />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogDetail;
