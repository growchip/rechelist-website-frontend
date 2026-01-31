import FAQ from "@/components/common/layout/FAQ";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";
import { getFaqData } from "@/apis/get-apis";

export const generateMetadata = async () => {
  const defaultSeo = {
    seo_title: "FAQ",
    seo_description:
      "Get in touch with Rechelist Pharma for PCD Pharma Franchise opportunities, partnerships, and product inquiries. Reach us at our offices or send us a message online.",
  };

  const pageUrl = getAbsoluteUrl("/faq");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

const FAQPage = async () => {
  const faqData = await getFaqData();

  return (
    <div className="mt-0  flex flex-col gap-gapUltra lg:gap-[3rem]">
      {/* Top Background + Breadcrumb */}
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Breadcrumb title="FAQ" subtitle="Your Queries, Answered" />
      </section>
      <Wrapper>
        <FAQ faqData={faqData} />
      </Wrapper>
    </div>
  );
};

export default FAQPage;
