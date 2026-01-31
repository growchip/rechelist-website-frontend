import { getCategoryWiseProducts } from "@/apis/get-apis";
import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";
import { CategoryPageProps } from "@/types/union";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

type Params = Promise<{ slug: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const pageData = await getCategoryWiseProducts(slug);
  const pageUrl = getAbsoluteUrl(`/category/${slug}`);

  return generateSeoMetadata(pageData.category, pageUrl, "article");
};

export default async function ProductCategoriesPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const pageData = await getCategoryWiseProducts(slug);

  const props: CategoryPageProps = {
    pageType: "category",
    slug,
    data: pageData,
  };

  return <ProductsListingLayout {...props} />;
}
