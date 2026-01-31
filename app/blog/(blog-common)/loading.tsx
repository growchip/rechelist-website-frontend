import BannerSkeleton from "@/components/common/skeletons/BannerSkeleton";
import BlogCategoriesSkeleton from "@/components/common/skeletons/BlogCategoriesSkeleton";
import RecentBlogsSkeleton from "@/components/common/skeletons/RecentBlogsSkeleton";
import BlogsListSkeleton from "@/components/common/skeletons/BlogsListSkeleton";
import Wrapper from "@/components/ui/Wrapper";

const BlogsLoading = () => {
  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BannerSkeleton />
      <Wrapper>
        {/* Mobile layout (stacked: Categories -> BlogsList -> RecentBlogs) */}
        <div className="md:hidden mx-auto mt-gapLargest lg:mt-gapUltra flex flex-col gap-8">
          <BlogCategoriesSkeleton />
          <BlogsListSkeleton count={6} />
          <RecentBlogsSkeleton />
        </div>

        {/* Desktop layout (grid: BlogsList left, Sidebar right) */}
        <div className="hidden md:grid mx-auto mt-gapLargest lg:mt-gapUltra grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <BlogsListSkeleton count={10} />
          <main className="flex flex-col gap-[3rem] h-fit sticky md:top-20 lg:top-8">
            <BlogCategoriesSkeleton />
            <RecentBlogsSkeleton />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogsLoading;
