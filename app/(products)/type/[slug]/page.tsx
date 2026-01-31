import { getTypeWiseProducts } from "@/apis/get-apis";
import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";
import { TypePageProps } from "@/types/union";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";

type Params = Promise<{ slug: string }>;

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const pageData = await getTypeWiseProducts(slug);
  const pageUrl = getAbsoluteUrl(`/type/${slug}`);

  return generateSeoMetadata(pageData.type, pageUrl, "article");
};

const ProductTypes = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const pageData = await getTypeWiseProducts(slug);
  // console.log("pageData:", pageData);
  // console.log("product type data:", slug);
  const props: TypePageProps = {
    pageType: "type",
    slug,
    data: pageData,
  };

  return <ProductsListingLayout {...props} />;
};

export default ProductTypes;
