import ProductsGrid from "./ProductsGrid";
import { UnionProductsProps } from "@/types/union";

const ProductsSection = (props: UnionProductsProps) => {
  const { data, pageType, slug } = props;

  return (
    <ProductsGrid
      productsList={data.data}
      per_page={data.per_page}
      last_page={data.last_page}
      total={data.total}
      pageType={pageType}
      slug={slug}
    />
  );
};

export default ProductsSection;
