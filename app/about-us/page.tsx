import AboutIntro from "@/components/common/layout/about/AboutIntro";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Wrapper from "@/components/ui/Wrapper";
import FocusTeam from "@/components/common/layout/about/FocusTeam";
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import { getAboutUsData } from "@/apis/get-apis";

export const generateMetadata = async () => {
  const pageData = await getAboutUsData();
  const pageUrl = getAbsoluteUrl("/about-us");

  return generateSeoMetadata(pageData.seo, pageUrl, "article");
};

const AboutUs = () => {
  return (
    <div className="mt-0  flex flex-col gap-[2rem] lg:gap-[3rem]">
      {/* Banner */}
      {/* <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-7 md:py-9 lg:py-12 text-center"> */}
      <section className="bg-[#9dddfa] py-7 md:py-9 lg:py-12 text-center">
        <Wrapper>
          <Breadcrumb title="About Us" subtitle="Who We Are" />
        </Wrapper>
      </section>
      <Wrapper>
        <div className="flex flex-col gap-[3rem]">
          <AboutIntro />
          <FocusTeam />
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
