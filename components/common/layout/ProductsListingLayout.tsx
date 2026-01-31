import Wrapper from "@/components/ui/Wrapper";
import ProductsBannerSection from "@/components/common/layout/ProductsBannerSection";
import SidebarSection from "@/components/desktop/layout/categories-sidebar/CategoriesSidebarSection";
import RangeBarSection from "@/components/desktop/layout/range-bar/RangeBarSection";
import ProductsSection from "@/components/common/layout/products-section/ProductsSection";
import { UnionProductsProps } from "@/types/union";

const ProductsListingLayout = (props: UnionProductsProps) => {
  return (
    <div className="mt-0 ">
      {/* Banner */}
      <ProductsBannerSection {...props} />
      <Wrapper>
        <div className="mx-auto mt-gapUltra flex flex-col lg:grid lg:grid-cols-[0.35fr_1fr] gap-8 lg:gap-12">
          {props.pageType === "type" ? <RangeBarSection /> : <SidebarSection />}
          <main className="flex-1">
            {/* <RangeBarSection /> */}
            <ProductsSection {...props} />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductsListingLayout;
