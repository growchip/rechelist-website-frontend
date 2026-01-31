import { getBlogCategories } from "@/apis/get-apis";
import BlogCategories from "./BlogCategories";

type BlogCategory = {
  name: string;
  slug: string;
};

const BlogCategoriesSection = async () => {
  const categories: { data: BlogCategory[] } = await getBlogCategories();

  return (
    <div className="flex flex-col gap-gapLarge">
      <h3 className="text-fontDeskLargest font-semibold">Blog Categories</h3>
      <div className="flex flex-wrap gap-3">
        {categories.data.map((category, index) => (
          <BlogCategories category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCategoriesSection;
