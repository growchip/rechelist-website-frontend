import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";
import { CategoriesResponse } from "@/types/products";
import { getCategories } from "@/apis/get-apis";

const ProductCategoriesList = async () => {
  const categories: CategoriesResponse = await getCategories();

  const filteredCategories = categories.data
    .filter((item) => item.image !== null)
    .slice(0, 7);

  return (
    <div className="mt-gapUltra lg:mt-sectionGap ">
      <Wrapper>
        <div className="flex flex-col gap-gapLargest lg:gap-gapUltra">
          <SectionHeader mainText="Categories" subText="Product Categories" />
          <div className="flex items-center justify-between gap-gap lg:gap-0 overflow-x-scroll no-scrollbar">
            {filteredCategories.map((item, index) => (
              <Link
                href={`/category/${item.slug}`}
                className="flex flex-col items-center gap-gap"
                key={index}
              >
                <div className="relative h-[3.5rem] w-[3.5rem] md:h-[4.375rem] md:w-[4.375rem]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${item.image}`}
                    alt={item.title}
                    fill
                    unoptimized
                    quality={100}
                  />
                </div>
                <span className="text-fontDeskSmall md:text-fontDeskLarge whitespace-nowrap md:whitespace-normal">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductCategoriesList;

//----------------------------EXTRA CODE-------------------------------
// import pcdOpportunityNew from "@/images/pcd-opportunity-new.png";
// import pcdOpportunity from "@/images/pcd-opportunity.png";
// import ortho from "@/images/ortho.svg";
// import gastro from "@/images/gastro.svg";
// import ent from "@/images/ent.svg";
// import cardiac from "@/images/cardiac.svg";
// import derma from "@/images/derma.svg";
// import paediatric from "@/images/pediatric.svg";
// import ayurvedic from "@/images/ayurvedic.svg";
// const catList = [
//   { title: "Ortho & Surgery", image: ortho, path: "#" },
//   { title: "Gastro", image: gastro, path: "#" },
//   { title: "ENT", image: ent, path: "#" },
//   { title: "Cardiac", image: cardiac, path: "#" },
//   { title: "Derma", image: derma, path: "#" },
//   { title: "Paediatric", image: paediatric, path: "#" },
//   { title: "Ayurvedic", image: ayurvedic, path: "#" },
// ];
