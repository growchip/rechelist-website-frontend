import BannerSkeleton from "@/components/common/skeletons/BannerSkeleton";
import ProductsGridSkeleton from "@/components/common/skeletons/ProductsGridSkeleton";
import RangeBarSkeleton from "@/components/desktop/skeletons/RangeBarSkeleton";
import SidebarSkeleton from "@/components/desktop/skeletons/SidebarSkeleton";
import Wrapper from "@/components/ui/Wrapper";

const ProductsLoading = () => {
  return (
    <div className="mt-0 lg:mt-gapLargest">
      <BannerSkeleton />
      <Wrapper>
        <div className="mx-auto mt-gapUltra flex flex-col lg:grid lg:grid-cols-[0.35fr_1fr] gap-8 lg:gap-12">
          <SidebarSkeleton />
          <div>
            {/* <RangeBarSkeleton /> */}
            <ProductsGridSkeleton count={9} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductsLoading;
