import { Suspense } from "react";

import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import PCDSection from "@/components/common/layout/services/PCDSection";
import ThirdPartySection from "@/components/common/layout/services/ThirdPartySection";
import { getPcdOpportunity } from "@/apis/get-apis";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = async () => {
  const defaultSeo = {
    seo_title: "Services",
    seo_description:
      "Get in touch with Rechelist Pharma for PCD Pharma Franchise opportunities, partnerships, and product inquiries. Reach us at our offices or send us a message online.",
  };

  const pageUrl = getAbsoluteUrl("/services");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

export default async function ServicesPage() {
  const { data: pcdData } = await getPcdOpportunity();

  return (
    <div className="mt-0  flex flex-col gap-[2rem] lg:gap-[4rem]">
      {/* Banner */}
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb
            title="Services"
            subtitle="Discover the pharma solutions we offer to empower your business"
          />
        </Wrapper>
      </section>

      <Wrapper>
        <div className="flex flex-col gap-gapUltra lg:gap-[4rem]">
          <PCDSection
            title={pcdData?.title || "PCD Opportunity"}
            image={pcdData?.innerimage}
            content={pcdData?.content}
            offers={pcdData?.offers}
          />

          <Suspense fallback={<p>Loading...</p>}>
            <ThirdPartySection />
          </Suspense>
        </div>
      </Wrapper>
    </div>
  );
}
