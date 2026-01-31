import ProductsListingLayout from "@/components/common/layout/ProductsListingLayout";
import { getAllProducts } from "@/apis/get-apis";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { AllProductsPageProps } from "@/types/union";

export const generateMetadata = async () => {
  const pageData = await getAllProducts();
  const pageUrl = getAbsoluteUrl("/products");

  return generateSeoMetadata(pageData.allproducts, pageUrl, "article");
};

const Products = async () => {
  const pageData = await getAllProducts();
  // console.log("All Products Page Data:", pageData);
  const props: AllProductsPageProps = {
    pageType: "allProducts",
    data: pageData,
  };
  return <ProductsListingLayout {...props} />;
};

export default Products;
