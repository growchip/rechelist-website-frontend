import Image, { StaticImageData } from "next/image";

import { UnionBlogsProps } from "@/types/union";
import Wrapper from "@/components/ui/Wrapper";
import Breadcrumb from "@/components/ui/Breadcrumb";

import blogBanner from "@/images/blog-banner.jpg";

export default async function BlogsBannerSection(props: UnionBlogsProps) {
  let title: string = "Blogs";
  let subtitle: string | null = "Insights & Updates in Healthcare";
  let bgImage: string | StaticImageData | null = blogBanner;

  if (props.pageType === "allBlogs") {
    title = "Blogs";
    subtitle = "Insights & Updates in Healthcare";
    bgImage = blogBanner;
  } else if (props.pageType === "blogDetail") {
    title = props.data.data.name;
    subtitle = null;
    bgImage = null;
  } else {
    title = props.data.category.name;
    subtitle = "Insights & Updates in Healthcare";
    bgImage = blogBanner;
  }

  if (!bgImage) {
    return (
      <section className="bg-gradient-to-r from-primaryOrange to-secondaryYellow py-10 md:py-14 lg:py-16 text-center">
        <Wrapper>
          <Breadcrumb title={title} subtitle={subtitle} />
        </Wrapper>
      </section>
    );
  }

  return (
    <section className="relative h-[9rem] sm:h-[14rem]">
      <Image
        src={bgImage}
        alt={title}
        priority
        fill
        unoptimized
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/50 to-secondaryYellow/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <Breadcrumb title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
