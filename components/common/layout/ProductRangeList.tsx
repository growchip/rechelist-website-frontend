import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";
import { CategoriesResponse } from "@/types/products";
import { getRange } from "@/apis/get-apis";

import chooseArrow from "@/images/why-choose-arrow.png";

const chooseUsData = [
  {
    number: "01",
    title: "Mission",
    desc: "We focus on delivering the top-quality, reliable, and cost-effective healthcare formulations. Maintaining ethical practices and building partnerships.",
  },
  {
    number: "02",
    title: "Vision",
    desc: "To establish ourselves among the leading names in the pharmaceutical industry through our services and products.",
  },
  {
    number: "03",
    title: "Core Values",
    desc: (
      <>
        <strong>Quality</strong> – Never compromised,&nbsp;
        <strong>Integrity</strong> – Transparent & honest,&nbsp;
        <strong>Innovation</strong> – Always evolving,&nbsp;
        <strong>Partnership</strong> – Growing together,&nbsp;
        <strong>Customer Focus</strong> – You come first
      </>
    ),
  },
];

const ProductRangeList = async () => {
  const productsRange: CategoriesResponse = await getRange();
  return (
    <>
      {/* --------------------------PRODUCTS RANGE---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap">
        <Wrapper>
          <div className="flex flex-col gap-gapLargest lg:gap-gapUltra">
            <SectionHeader
              mainText="Type of Products"
              subText="Product Range"
            />
            <div className="flex overflow-x-scroll no-scrollbar md:grid md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-gap">
              {productsRange.data.map((item, index) => (
                <div key={index} className="flex flex-col gap-gap">
                  <div className="relative group lg:overflow-hidden rounded-xl">
                    <Link
                      href={`/type/${item.slug}`}
                      className="h-[12rem] md:h-[17rem] lg:h-[15rem] w-[12rem] lg:w-full block"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${item.image}`}
                        alt={item.title}
                        className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        unoptimized
                        quality={100}
                      />
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                     flex items-center justify-center transition-opacity duration-500 rounded-xl"
                      >
                        <span className="text-white text-lg font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <Link
                    href={`/type/${item.slug}`}
                    className="text-fontDeskLarge md:text-fontDeskLargest bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow text-center lg:hidden"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>

      {/* --------------------------WHY CHOOSE US---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap bg-[url('/choose-bg.png')] bg-cover bg-center">
        <Wrapper>
          <div className="flex flex-col gap-gapLargest lg:gap-gapUltra py-gapLargest">
            <SectionHeader mainText="Our Features" subText="Why Choose Us" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="flex flex-col gap-gapLargest">
                {chooseUsData.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center gap-gapMed">
                      <span
                        className={`text-[3rem] font-bold bg-clip-text text-transparent ${
                          index === 0
                            ? "bg-gradient-to-r from-[#E95323] to-[#fdb62f]"
                            : index === 1
                            ? "bg-gradient-to-r from-[#b0609d] to-[#6b067f]"
                            : "bg-gradient-to-r from-[#694d9f] to-[#2b1e7c]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="leading-relaxed">{item.desc}</p>
                    {index !== chooseUsData.length - 1 && (
                      <hr className="border-t border-gray-300 mt-gap" />
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side */}
              <div className="relative w-full h-[20rem] lg:h-[25rem] flex justify-center">
                <Image
                  src={chooseArrow}
                  alt="choose-arrow"
                  className="object-contain"
                  unoptimized
                  quality={100}
                  fill
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProductRangeList;

//------------------------EXTRA CODE------------------------------
// import productImgOne from "@/images/product-range-one.png";
// import productImgTwo from "@/images/product-range-two.png";
// import productImgThree from "@/images/product-range-three.png";
// import productImgFour from "@/images/product-range-four.png";
// import productImgFive from "@/images/product-range-five.png";
// import productImgSix from "@/images/product-range-six.png";
// import productImgSeven from "@/images/product-range-seven.png";

// const rangeListData = [
//   { title: "Range One", img: productImgOne, path: "#" },
//   { title: "Range Two", img: productImgTwo, path: "#" },
//   { title: "Range Three", img: productImgThree, path: "#" },
//   { title: "Range Four", img: productImgFour, path: "#" },
//   { title: "Range Five", img: productImgFive, path: "#" },
//   { title: "Range Six", img: productImgSix, path: "#" },
//   { title: "Range Seven", img: productImgSeven, path: "#" },
//   { title: "Range Eight", img: productImgOne, path: "#" },
// ];
