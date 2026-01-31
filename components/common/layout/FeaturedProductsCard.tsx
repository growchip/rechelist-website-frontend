import Image from "next/image";

import Button from "@/components/ui/Button";
import { Product } from "@/types/products";
import Link from "next/link";
import productTypeImg from "@/images/product-range-one.png";
import { useState } from "react";
import ProductEnquiryForm from "../forms/ProductEnquiryForm";
import Modal from "@/components/ui/Modal";

import { RxCross2 } from "react-icons/rx";

type FeaturedProductsCardProps = {
  product: Product;
};

const FeaturedProductsCard: React.FC<FeaturedProductsCardProps> = ({
  product,
}) => {
  // console.log("featuredData:", product);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const imageSrc = product.image
    ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${product.image}`
    : productTypeImg;

  return (
    <>
      <div className="mx-gapSmall flex flex-col gap-gap">
        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden w-[11.5rem] md:w-[13rem] lg:w-full h-[11.5rem] md:h-[13rem] lg:h-[18.438rem]">
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            unoptimized
            quality={100}
            className="object-contain md:object-fill"
          />
        </div>

        {/* Product Type Badge */}
        <span className="w-fit bg-white rounded-full text-black text-sm font-medium px-3 py-1 border border-orange-400 capitalize">
          {product.type}
        </span>

        {/* Product Details */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-fontDeskLarge lg:text-xl font-semibold">
            {product.title}
          </h3>
          <p
            // className="bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow text-sm font-medium lg:line-clamp-1"
            className="bg-clip-text text-base text-transparent bg-primary lg:line-clamp-1 "
            title={product.combination ?? undefined}
          >
            {product.combination}
          </p>
          <p className="text-gray-300 text-sm">{`${product.pack}`}</p>
        </div>

        {/* Send Enquiry Button */}
        <div>
          <Button
            type="button"
            text="Send Enquiry"
            className="w-fit text-white px-4 lg:px-6 py-2 text-fontDesk lg:text-fontDeskLarge rounded-full transition-all duration-300 bg-primary hover:opacity-90"
            onClick={toggleModal}
          />
          <Link
            href={product?.slug ? `/products/${product.slug}` : "#"}
            type="button"
            className={`w-fit text-white px-2 lg:px-2 py-2 text-fontDesk lg:text-fontDeskLarge transition-all duration-300 hover:underline
              ${
                product?.slug
                  ? "hover:opacity-90 cursor-pointer"
                  : "opacity-50 cursor-not-allowed pointer-events-none"
              }`}
          >
            View Details...
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal
          className="bg-white rounded-2xl shadow-lg relative w-[85%] md:w-1/2 lg:w-[38%] left-[7%] md:left-[23%] lg:left-[35%] top-[5vh] md:top-[15vh] px-6 py-8 overflow-auto max-h-[90vh]"
          close={toggleModal}
        >
          {/* Close Icon */}
          <button
            onClick={toggleModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <RxCross2 size={24} />
          </button>

          <ProductEnquiryForm productTitle={product.title} />
        </Modal>
      )}
    </>
  );
};

export default FeaturedProductsCard;
