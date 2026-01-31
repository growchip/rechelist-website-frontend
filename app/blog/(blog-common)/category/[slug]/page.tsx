import { getBlogs, getCategoryWiseBlogs } from "@/apis/get-apis";
import BlogListingLayout from "@/components/common/layout/blog/BlogListingLayout";
import { CategoryBlogsPageProps } from "@/types/union";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const pageData = await getCategoryWiseBlogs(slug);
  const pageUrl = getAbsoluteUrl(`/blog/category/${slug}`);

  return generateSeoMetadata(pageData?.seo || {}, pageUrl, "article");
}

const BlogCatPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const categoryBlogsData = await getCategoryWiseBlogs(slug);

  const blogsData = await getBlogs();
  const recentBlogsData = blogsData.data.slice(0, 5);

  const props: CategoryBlogsPageProps = {
    pageType: "categoryBlogs",
    data: categoryBlogsData,
    recentData: recentBlogsData,
  };

  return <BlogListingLayout {...props} />;
};

export default BlogCatPage;
