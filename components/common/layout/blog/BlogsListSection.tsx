import BlogsList from "./BlogsList";
import { UnionBlogsProps } from "@/types/union";

const BlogsListSection = (props: UnionBlogsProps) => {
  const { pageType, slug } = props;

  if (pageType === "allBlogs") {
    const { data } = props;
    return (
      <div className="flex flex-col gap-gap lg:gap-gapLargest">
        <h3 className="text-fontDeskLargest lg:text-[2rem] font-semibold lg:text-center">
          Explore All Blogs
        </h3>
        <BlogsList
          blogsList={data.data}
          per_page={data.meta.per_page}
          last_page={data.meta.last_page}
          total={data.meta.total}
          pageType={pageType}
        />
      </div>
    );
  } else if (pageType === "categoryBlogs") {
    const { data } = props;
    return (
      <div className="flex flex-col gap-gap lg:gap-gapLargest">
        <h3 className="text-fontDeskLargest lg:text-[2rem] font-semibold lg:text-center">
          {data.category.name}
        </h3>
        <BlogsList
          categoryName={data.category.name}
          slug={slug}
          blogsList={data.posts}
          per_page={data.meta.per_page}
          last_page={data.meta.last_page}
          total={data.meta.total}
          pageType={pageType}
        />
      </div>
    );
  }

  return null;
};

export default BlogsListSection;
