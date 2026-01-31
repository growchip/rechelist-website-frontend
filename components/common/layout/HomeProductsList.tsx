"use client";

import Slider from "react-slick";
import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";
import { ProductsResponse } from "@/types/products";
import FeaturedProductsCard from "./FeaturedProductsCard";

type HomeProductsListProps = {
  products: ProductsResponse;
};

const settings = {
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const HomeProductsList: React.FC<HomeProductsListProps> = ({ products }) => {
  return (
    <div className="mt-gapUltra lg:py-sectionGap bg-[#002332] py-gapUltra ">
      <Wrapper>
        <div className="flex flex-col gap-gapUltra">
          <SectionHeader
            mainText="Portfolio"
            subText="New Products"
            subTextClass="text-white text-fontDeskLargest lg:text-fontDeskUltra"
          />
          {/* Products Grid */}
          <div className="products-slider">
            <div className="flex overflow-x-scroll no-scrollbar lg:hidden">
              {products.data.map((item, index) => (
                <FeaturedProductsCard product={item} key={index} />
              ))}
            </div>
            <div className="lg:block hidden">
              <Slider {...settings}>
                {products.data.map((item, index) => (
                  <FeaturedProductsCard product={item} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomeProductsList;

//------------------------------EXTRA CODE-----------------------------
// import productImgOne from "@/images/product-range-one.png";
// import productImgTwo from "@/images/product-range-two.png";
// import productImgThree from "@/images/product-range-three.png";
// import productImgFour from "@/images/product-range-four.png";
// const homeProductsData = [
//   {
//     img: productImgOne,
//     type: "Tablet",
//     name: "Product Name",
//     salt: "Amoxycillin/Paracetamol",
//     qty: "10x10",
//   },
//   {
//     img: productImgTwo,
//     type: "Tablet",
//     name: "Product Name",
//     salt: "Amoxycillin/Paracetamol",
//     qty: "10x10",
//   },
//   {
//     img: productImgThree,
//     type: "Tablet",
//     name: "Product Name",
//     salt: "Amoxycillin/Paracetamol",
//     qty: "10x10",
//   },
//   {
//     img: productImgFour,
//     type: "Tablet",
//     name: "Product Name",
//     salt: "Amoxycillin/Paracetamol",
//     qty: "10x10",
//   },
// ];
