import React from "react";
import ProductDetail from "@/components/common/layout/products-section/ProductDetail";
import Wrapper from "@/components/ui/Wrapper";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getProductDetails } from "@/apis/get-apis";

interface ProductBySlugProps {
  params: Promise<{ slug: string }>;
}

const ProductDetailPage = async ({ params }: ProductBySlugProps) => {
  const { slug } = await params;

  const pageData = await getProductDetails(slug);

  // Sample product data
  const product = {
    name: "ACBOX-200 SR",

    composition: "Aceclofenac 200mg SR",
  };

  return (
    <div className="min-h-screen">
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb
            title={pageData?.data?.combination}
            subtitle={pageData?.data?.title}
          />
        </Wrapper>
      </section>
      <ProductDetail data={pageData.data} />
    </div>
  );
};

export default ProductDetailPage;
