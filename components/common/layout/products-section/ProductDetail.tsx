"use client";

import React, { useState } from "react";
import productTypeImg from "@/images/product-range-four.png";
import ProductEnquiryForm from "../../forms/ProductEnquiryForm";
import { FaRupeeSign } from "react-icons/fa";
import {
  FiPackage,
  FiShield,
  FiInfo,
  FiDroplet,
  FiActivity,
} from "react-icons/fi";
import Image from "next/image";
import { BiPlusMedical } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineHealthAndSafety, MdVerified } from "react-icons/md";
import Wrapper from "@/components/ui/Wrapper";
import Modal from "@/components/ui/Modal";
import { RxCross2 } from "react-icons/rx";
import productDummyImg from "@/images/product-range-three.png";

interface ProductDetailProps {
  data: any;
}

const ProductDetail = ({ data }: ProductDetailProps) => {
  // console.log("Product Detail:", data);

  const [activeTab, setActiveTab] = useState("details");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  // Sample product data

  const imageSrc = data.image
    ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${data.image}`
    : productDummyImg;
  return (
    <>
      {/* --------------------------PRODUCTS RANGE---------------------------- */}
      <div className="mt-gapUltra lg:mt-sectionGap">
        <Wrapper>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Product Image */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl  sm:p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-gradient-to-r from-primary2 to-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {data?.type}
                    </span>
                  </div>

                  {/* Product Image Placeholder */}
                  <div className="fill  relative aspect-square bg-gray-50 rounded-xl flex items-center justify-center  sm:border border-[#e8e8e8]">
                    {/* <div className="text-center">
                      <BiCapsule className="w-32 h-32 text-blue-600 mx-auto mb-4" />
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800">
                          {product.name}
                        </h2>
                        <p className="text-gray-500 mt-1">{product.form}</p>
                      </div>
                    </div> */}
                    <Image
                      src={imageSrc}
                      alt="Product Image"
                      fill
                      unoptimized
                      quality={100}
                      className="object-contain sm:p-8"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Product Details */}
              <div className="space-y-6">
                {/* Product Title and Category */}
                <div className="bg-white rounded-2xl border border-[#e8e8e8] p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-normal sm:font-semibold text-primary2 mb-2">
                        {data.combination}
                      </h1>
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          <FiActivity className="w-4 h-4 mr-1" />
                          {data?.categories[0]?.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          by Rechelist Pharma
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-6">
                    <div className="flex space-x-8">
                      {["details"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-3 text-sm font-medium capitalize transition-colors ${
                            activeTab === tab
                              ? "text-primary border-b-2 border-primary"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-4">
                    {activeTab === "details" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="flex items-start space-x-3">
                            <BiPlusMedical className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-black">
                                Name
                              </p>
                              <p className="">{data?.title}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <FaRupeeSign className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-black">
                                M.R.P.
                              </p>
                              <p className="flex flex-row gap-1 items-center justify-center">
                                <span>{data?.mrp}</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <FiPackage className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-black">
                                Packing
                              </p>
                              <p className="">{data?.pack}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="flex-1 bg-gradient-to-r from-primary2 to-primary text-white font-semibold py-3 px-6 rounded-xl hover:from-primary hover:to-primary2 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Place Enquiry
                  </button>
                  {/* <button className="flex-1 bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                            Download Brochure
                          </button> */}
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-around">
                    <div className="text-center">
                      <MdVerified className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-600">
                        ISO Certified
                      </p>
                    </div>
                    <div className="text-center">
                      <FiShield className="w-8 h-8 text-green-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-600">
                        WHO-GMP
                      </p>
                    </div>
                    <div className="text-center">
                      <BsBoxSeam className="w-8 h-8 text-purple-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-gray-600">
                        Quality Pack
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      {showModal && (
        <Modal
          className="bg-white rounded-2xl shadow-lg relative w-[85%] md:w-1/2 lg:w-[38%] left-[7%] md:left-[23%] lg:left-[35%] top-[5vh] md:top-[15vh] px-6 py-8 overflow-auto max-h-[90vh]"
          close={toggleModal}
        >
          {/* Close Icon */}
          <button
            onClick={toggleModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-50"
          >
            <RxCross2 size={24} />
          </button>

          <ProductEnquiryForm productTitle={data?.title} />
        </Modal>
      )}
    </>
  );
};

export default ProductDetail;
