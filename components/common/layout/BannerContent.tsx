import Button from "@/components/ui/Button";
import BannerEnquiry from "./BannerEnquiry";
import Wrapper from "@/components/ui/Wrapper";
import home from "@/images/home-2.png";
import Image from "next/image";
import map from "@/images/map.svg";

type BannerContentProps = {
  bannerTitle: string;
  bannerDesc: string;
};

const BannerContent: React.FC<BannerContentProps> = ({
  bannerTitle,
  bannerDesc,
}) => {
  return (
    <div className="absolute top-[1rem] md:top-[2rem] lg:top-[9.5rem] left-1/2 transform -translate-x-1/2 w-full">
      <Wrapper>
        <div className="  min-w-full flex flex-row sm:px-12 ">
          <div className=" min-w-1/2 w-full py-10  flex flex-col  itme-center justify-center">
            {" "}
            <h6 className="text-white text-fontDesk md:text-fontDeskLargest lg:text-[2.5rem] letter-spacing-[4%]">
              Your Reliable Partner for Growth, Innovation, and Success in
              Pharma Industry
            </h6>
            {/* <h1 className="text-stroke-white text-fontDeskLargest md:text-[2.5rem] lg:text-[4.5rem] font-extrabold ">
              {bannerTitle}
            </h1> */}
            <p className="text-white text-fontDeskLarge font-normal  hidden md:block mt-[1rem] mb-[1.5rem]">
              {/* {bannerDesc} */}
              Join hands with Rechelist Pharma – a trusted name in PCD Pharma
              Franchise. We deliver high-quality, affordable medicines backed by
              certifications and timely support to help your business grow.
            </p>
            <div className="flex flex-row items-center gap-gap mt-gapLarge">
              <Button
                type="link"
                href="products"
                text="View Products"
                className="text-white border border-white px-4 md:px-6 py-2 rounded-full text-fontDesk md:text-fontDeskLarge"
              />
              <BannerEnquiry />
            </div>
            <div className="h-[3.25rem] w-[90%] relative  flex items-center justify-start mt-[1rem]">
              <Image
                src={home}
                alt="home-banner"
                fill
                className="object-contain  "
                unoptimized
                quality={100}
              />
            </div>
          </div>
          <div className=" min-w-1/2 w-full  pl-10 md:block hidden">
            <div className=" relative h-[25rem] md:h-[30rem] lg:h-[38rem] ">
              <Image
                src={map}
                alt="map-banner"
                fill
                unoptimized
                quality={100}
                className="object-contain "
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BannerContent;
