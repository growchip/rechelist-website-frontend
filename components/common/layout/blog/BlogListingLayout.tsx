import Wrapper from "@/components/ui/Wrapper";
import BlogsBannerSection from "./BlogsBannerSection";
import BlogCategoriesSection from "./BlogCategoriesSection";
import RecentBlogsSection from "./RecentBlogsSection";
import BlogsListSection from "./BlogsListSection";
import { UnionBlogsProps } from "@/types/union";

const BlogListingLayout = (props: UnionBlogsProps) => {
  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BlogsBannerSection {...props} />
      <Wrapper>
        {/* Mobile layout (flex-col order: Categories -> BlogsList -> RecentBlogs) */}
        <div className="md:hidden mx-auto mt-gapLargest lg:mt-gapUltra flex flex-col gap-8">
          <BlogCategoriesSection />
          <BlogsListSection {...props} />
          <RecentBlogsSection {...props} />
        </div>

        {/* Desktop layout (grid with BlogsList on left, sidebar on right) */}
        <div className="hidden md:grid mx-auto mt-gapLargest lg:mt-gapUltra grid-cols-[1fr_0.4fr] gap-8 lg:gap-20">
          <BlogsListSection {...props} />
          <main className="flex flex-col gap-[3rem] h-fit sticky md:top-20 lg:top-8">
            <BlogCategoriesSection />
            <RecentBlogsSection {...props} />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogListingLayout;
