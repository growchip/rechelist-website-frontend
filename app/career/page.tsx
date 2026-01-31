import Wrapper from "@/components/ui/Wrapper";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CareerIntro from "@/components/common/layout/career/CareerIntro";
import CareerPerks from "@/components/common/layout/career/CareerPerks";
import CareerForm from "@/components/common/forms/CareerForm";
import { getCareerData } from "@/apis/get-apis";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = async () => {
  const defaultSeo = {
    seo_title: "Careers",
    seo_description:
      "Get in touch with Rechelist Pharma for PCD Pharma Franchise opportunities, partnerships, and product inquiries. Reach us at our offices or send us a message online.",
  };

  const pageUrl = getAbsoluteUrl("/career");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

export default async function CareerPage() {
  const careerData = await getCareerData();

  return (
    <div className="mt-0  flex flex-col gap-gapUltra lg:gap-[4rem]">
      {/* Top Background + Breadcrumb */}
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Breadcrumb
          title={careerData.name}
          subtitle="Careers at Rechelist Pharma"
        />
      </section>

      {/* Sections */}
      <Wrapper>
        <div className="flex flex-col gap-gapUltra lg:gap-[4rem]">
          <CareerIntro
            title={careerData.description}
            content={careerData.content}
          />
          <CareerPerks />
          <CareerForm image={careerData.image} />
        </div>
      </Wrapper>
    </div>
  );
}
