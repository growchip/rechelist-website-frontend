import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import { getTermsConditionsData } from "@/apis/get-apis";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";

export const generateMetadata = async () => {
  const defaultSeo = {
    seo_title: "Terms and Conditions",
    seo_description:
      "Get in touch with Rechelist Pharma for PCD Pharma Franchise opportunities, partnerships, and product inquiries. Reach us at our offices or send us a message online.",
  };

  const pageUrl = getAbsoluteUrl("/terms-and-conditions");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

const TermsConditionsPage = async () => {
  const termsData = await getTermsConditionsData();

  return (
    <div className="mt-0  flex flex-col gap-gapUltra lg:gap-[4rem]">
      {/* Banner */}
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb title={termsData.name} subtitle={termsData.description} />
        </Wrapper>
      </section>

      {/* MAIN SECTION */}
      <Wrapper>
        <section className="max-w-4xl mx-auto px-4">
          {/* Heading */}
          <h1 className="text-2xl lg:text-4xl font-bold text-primaryBlue text-center">
            {termsData.name}
          </h1>

          {/* Content */}
          <div
            className="mt-gap lg:mt-6 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 privacy-content text-gray-700 text-fontDesk md:text-fontDeskLarge"
            dangerouslySetInnerHTML={{
              __html: termsData.content,
            }}
          ></div>
        </section>
      </Wrapper>
    </div>
  );
};

export default TermsConditionsPage;
