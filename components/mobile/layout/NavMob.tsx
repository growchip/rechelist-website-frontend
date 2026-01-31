import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MenuGroup } from "@/types/nav-items";
import { CategoriesResponse } from "@/types/products";
import { useModal } from "@/hooks/useModalContext";

import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";

type NavMobProps = {
  close: () => void;
  navData: MenuGroup;
  categories: CategoriesResponse;
  range: CategoriesResponse;
};

const NavMob: React.FC<NavMobProps> = ({
  close,
  navData,
  categories,
  range,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { toggleModal } = useModal();

  const pathname = usePathname();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-gap">
      {/* Title */}
      <div className="flex items-center gap-gap py-gapMed px-gapSmall md:px-gapMed border-b border-gray-400 sticky top-0 bg-white z-10">
        <AiOutlineClose
          className="text-[1.5rem] text-gray-500 cursor-pointer"
          onClick={close}
        />
        <h4 className="text-fontDeskLargest md:text-[1.5rem] font-semibold">
          Menu
        </h4>
      </div>

      <ul className="px-gap md:px-gapLarge flex flex-col gap-gapLarge">
        {navData.items.map((item, index) => {
          if (item.url === "button") {
            return (
              <li key={index}>
                <button
                  className="text-fontDesk md:text-fontDeskLarge font-semibold"
                  onClick={() => {
                    toggleModal();
                    close();
                  }}
                >
                  {item.title}
                </button>
              </li>
            );
          }

          if (item.url === "range" || item.url === "categories") {
            const dropdownData =
              item.url === "range" ? range.data : categories.data;

            const dynamicURL = item.url === "range" ? "type" : "category";

            const isOpen = openIndex === index;
            return (
              <li key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-fontDesk md:text-fontDeskLarge"
                >
                  {item.title}
                  <AiOutlineRight
                    size={"0.75rem"}
                    className={`transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[50rem] mt-2" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 flex flex-col gap-2">
                    {dropdownData.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={`/${dynamicURL}/${child.slug}`}
                          className={`block py-1 text-fontDesk md:text-fontDeskLarge ${
                            pathname === `/${dynamicURL}/${child.slug}`
                              ? "bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow"
                              : "text-gray-600 hover:text-primaryOrange"
                          }`}
                          onClick={close}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }

          return (
            <li key={index}>
              <Link
                target={item.target}
                href={item.url}
                className={`text-fontDesk md:text-fontDeskLarge ${
                  pathname === item.url
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-primaryOrange to-secondaryYellow"
                    : "text-black"
                }`}
                onClick={close}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMob;
