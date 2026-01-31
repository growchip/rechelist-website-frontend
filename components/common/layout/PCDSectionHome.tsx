import Image from "next/image";
import Link from "next/link";

import Wrapper from "@/components/ui/Wrapper";
import { PcdFranchiseResponse } from "@/types/static-items";
import { getPcdOpportunity } from "@/apis/get-apis";

import headerCommon from "@/images/section-header.svg";
import arrowIcon from "@/icons/arrow-right-up.svg";

const PCDSectionHome = async () => {
  const pcdData: PcdFranchiseResponse = await getPcdOpportunity();

  return (
    <div className="mt-gapUltra lg:mt-sectionGap">
      <Wrapper>
        <div className="rounded-2xl overflow-hidden max-w-[unset] lg:max-w-[75rem] mx-auto bg-[#ffede8] lg:bg-transparent lg:bg-[url('/franchise-bg.png')] lg:bg-cover lg:bg-no-repeat">
          {/* Gradient Heading with Icon */}
          {/* <div className="relative w-fit mx-auto mt-gap px-[2.5rem] lg:px-[9rem] py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow"> */}
          <div className="relative w-fit mx-auto mt-gap px-[2.5rem] lg:px-[9rem] py-2 rounded-full transition-all duration-300 bg-[#0098DB]">
            <span className="text-white text-fontDeskLarge md:text-fontDeskLargest font-bold">
              {pcdData.data.title}
            </span>
            <Image
              src={headerCommon}
              alt="header-icon"
              height={32}
              width={32}
              unoptimized
              quality={100}
              className="size-[1.5rem] lg:w-[2rem] lg:h-[2rem] absolute top-1/2 -translate-y-1/2 right-[2%] lg:right-[18%]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-gapLargest p-6 md:p-12 items-center">
            {/* ---------------- Left Content ---------------- */}
            <div className="flex flex-col gap-gap">
              {/* Paragraph */}
              <p
                className="leading-relaxed text-fontDesk whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: pcdData.data.content,
                }}
              />

              {/* What We Offer */}
              <div>
                <h3 className="font-bold text-lg mb-2">What We Offer:</h3>
                <ul className="list-disc pl-5 space-y-1 text-fontDesk">
                  {pcdData.data.offers.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: item,
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {/* ---------------- Right Image ---------------- */}
            <div className="relative h-[20rem] lg:h-[25rem]">
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${pcdData.data.image}`}
                alt="franchise"
                fill
                unoptimized
                quality={100}
              />

              {/* Small Arrow Button */}
              <Link
                href="/services"
                className="absolute -bottom-1 right-0 bg-gradient-to-r from-primaryOrange to-secondaryYellow 
               size-[2.5rem] lg:w-[3rem] lg:h-[3rem] flex items-center justify-center 
               rounded-full shadow-lg hover:scale-105 transition"
              >
                <Image
                  src={arrowIcon}
                  alt="arrow"
                  width={20}
                  height={20}
                  unoptimized
                  quality={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PCDSectionHome;
