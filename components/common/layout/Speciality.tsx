import Image from "next/image";

import SectionHeader from "@/components/ui/SectionHeader";
import Wrapper from "@/components/ui/Wrapper";

import map from "@/images/speciality-map.png";
import categoriesIcon from "@/icons/categories-icon.svg";
import classificationIcon from "@/icons/classification-icon.svg";
import divisionIcon from "@/icons/market-div.svg";
import { SpecialityType } from "@/types/static-items";

const iconMap: Record<string, string> = {
  "fa fa-sitemap": divisionIcon, // Our Marketing Divisions
  "fa fa-th-large": categoriesIcon, // Categories
  "fa fa-cubes": classificationIcon, // Product Classification
};

type SpecialityProps = {
  data: SpecialityType;
};

const Speciality: React.FC<SpecialityProps> = ({ data }) => {
  return (
    <div className="mt-gapUltra lg:mt-sectionGap">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gapUltra lg:gap-20 items-center">
          <div className="flex flex-col gap-gapUltra">
            <SectionHeader
              mainText={data.subtitle}
              subText={data.title}
              isBlock
              subTextClass="text-fontDeskLarge lg:text-fontDeskUltra"
            />
            <div className="flex flex-col gap-gapUltra">
              {data.features.map((item, index) => (
                <div key={index} className="flex gap-gapMed items-start">
                  <Image
                    src={iconMap[item.icon] || divisionIcon}
                    alt={item.title}
                    width={32}
                    height={32}
                    unoptimized
                    quality={100}
                    className="w-6 h-6 md:w-8 md:h-8 text-blue-500"
                  />
                  <div className="flex flex-col gap-gapSmall md:gap-gapMed">
                    <h3 className="font-bold text-fontDeskLarge md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-fontDesk md:text-fontDeskLarge">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT SECTION MAP IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${data.map_image}`}
              alt="World Map"
              width={700}
              height={400}
              unoptimized
              quality={100}
              className="object-contain w-full max-w-lg md:max-w-none"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Speciality;

//-----------------------EXTRA CODE-------------------------------
// const specialityData = [
//   {
//     img: divisionIcon,
//     title: "Our Marketing Divisions",
//     content:
//       "A wide array of marketing divisions including PCD Pharma Franchise and Third Party Manufacturing",
//   },
//   {
//     img: categoriesIcon,
//     title: "Categories",
//     content:
//       "Different types of product categories include Ayurvedic, Dermatology, Nutraceuticals, General, and Pediatrics.",
//   },
//   {
//     img: classificationIcon,
//     title: "Product Classification",
//     content:
//       "A diverse portfolio of pharma products is available under a range of product classifications such as tablets, capsules, syrups, and injectables.",
//   },
// ];
