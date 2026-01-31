import HowWeWork from "@/components/common/layout/HowWeWork";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAbsoluteUrl } from "@/utils/helper";
import { getHowWeWorkData } from "@/apis/get-apis";

export const generateMetadata = async () => {
  const defaultSeo = {
    seo_title: "How We Work",
    seo_description:
      "Get in touch with Rechelist Pharma for PCD Pharma Franchise opportunities, partnerships, and product inquiries. Reach us at our offices or send us a message online.",
  };

  const pageUrl = getAbsoluteUrl("/how-we-work");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

const HowWeWorkPage = async () => {
  const howWorkData = await getHowWeWorkData();

  return (
    <div className="mt-0  flex flex-col gap-gapUltra lg:gap-[3rem]">
      {/* Top Background + Breadcrumb */}
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Breadcrumb
          title="How We Work"
          subtitle="Our Approach to Better Healthcare"
        />
      </section>
      <Wrapper>
        <HowWeWork data={howWorkData} />
      </Wrapper>
    </div>
  );
};

export default HowWeWorkPage;
