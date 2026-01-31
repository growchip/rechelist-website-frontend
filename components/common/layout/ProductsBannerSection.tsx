import Image, { StaticImageData } from "next/image";

import Breadcrumb from "@/components/ui/Breadcrumb";
import MobileCategoryBar from "@/components/mobile/layout/MobileCategoryBar";
import Wrapper from "@/components/ui/Wrapper";
import { UnionProductsProps } from "@/types/union";

import demo from "@/images/demo-banner.jpg";

export default function ProductsBannerSection(props: UnionProductsProps) {
  let title: string;
  let subtitle: string;
  let bgImage: string | StaticImageData = demo;

  if (props.pageType === "category") {
    title = props.data.category?.title || "Products";
    subtitle =
      props.data.category?.short_description ||
      "Explore Our Wide Range Of Products";
    bgImage = props.data.category?.banner_image
      ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${props.data.category.banner_image}`
      : demo;
  } else if (props.pageType === "type") {
    title = props.data.type?.title || "Products";
    subtitle =
      props.data.type?.short_description ||
      "Explore Our Wide Range Of Products";
    bgImage = props.data.type?.banner_image
      ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${props.data.type.banner_image}`
      : demo;
  } else {
    title = "Products";
    subtitle = "Explore Our Wide Range Of Products";
    bgImage = props.data.allproducts?.banner_image
      ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${props.data.allproducts.banner_image}`
      : demo;
  }

  return (
    <div className="flex flex-col gap-gapUltra">
      <section className="relative h-[9rem] sm:h-[14rem]">
        <Image
          src={bgImage}
          alt={title}
          priority
          fill
          unoptimized
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary2/50     to-primary/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Breadcrumb title={title} subtitle={subtitle} />
        </div>
      </section>
      <Wrapper>
        <MobileCategoryBar
          activeCategory={props.slug ? title : "All Products"}
        />
      </Wrapper>
    </div>
  );
}
