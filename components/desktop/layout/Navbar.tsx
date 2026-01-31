"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/ui/Wrapper";
import Button from "@/components/ui/Button";
import OffCanvas from "@/components/ui/OffCanvas";
import NavMob from "@/components/mobile/layout/NavMob";
import DropdownContent from "@/components/ui/DropdownContent";
import { MenuGroup } from "@/types/nav-items";
import { CategoriesResponse } from "@/types/products";
import { useSidebar } from "@/hooks/useSidebarMob";
import Modal from "@/components/ui/Modal";
import { useModal } from "@/hooks/useModalContext";
import ContactForm from "@/components/common/forms/ContactForm";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

type NavBarProps = {
  navData: MenuGroup;
  logo: string;
  categories: CategoriesResponse;
  range: CategoriesResponse;
};

const Navbar: React.FC<NavBarProps> = ({
  navData,
  logo,
  categories,
  range,
}) => {
  const { sideBarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const { showModal, toggleModal, closeModal } = useModal();

  const pathname = usePathname();

  //-------------Checking for homepage----------
  const isHomePage = pathname === "/";

  return (
    <>
      {showModal && (
        <Modal
          close={closeModal}
          className="relative w-[85%] md:w-[50%] left-[6%] md:left-[25%] top-[2vh] md:top-[10vh] lg:top-[5vh] sm:overflow-auto sm:max-h-[90vh]"
        >
          <div className="flex justify-end">
            <button
              className="absolute top-[2.1rem] lg:top-[1.8rem] right-gapSmall lg:right-gap cursor-pointer border-none bg-white text-[1.5rem]"
              onClick={closeModal}
            >
              <RxCross2 />
            </button>
          </div>
          <ContactForm />
        </Modal>
      )}

      {/*--------------------- MOBILE NAVBAR --------------------------------*/}
      <div className="block lg:hidden bg-white top-[-0.5px] left-0 w-full z-[99] sticky py-gapSmall shadow-md">
        <OffCanvas
          close={closeSidebar}
          offcanvas={sideBarOpen}
          className="left-0 -translate-x-full max-w-[75%] w-[26.875rem] overflow-scroll"
        >
          <NavMob
            close={closeSidebar}
            navData={{
              ...navData,
              items: navData.items.filter(
                (item) =>
                  item.title.toLowerCase() !== "contact" &&
                  item.title.toLowerCase() !== "contact us"
              ),
            }}
            categories={categories}
            range={range}
          />
        </OffCanvas>
        <Wrapper>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-gap">
              <button onClick={toggleSidebar}>
                <GiHamburgerMenu size={20} />
              </button>
              <Link href="/">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${logo}`}
                  alt="logo-header-mob"
                  height={48}
                  width={104}
                  unoptimized
                  className="w-[6.5rem] h-[3rem]"
                />
              </Link>
            </div>
            {(() => {
              const contactItem = navData.items.find(
                (item) =>
                  item.title.toLowerCase() === "contact" ||
                  item.title.toLowerCase() === "contact us"
              );

              if (!contactItem) return null;

              return (
                <Button
                  type="link"
                  text={contactItem.title}
                  href={contactItem.url}
                  target={contactItem.target}
                  className="px-4 lg:px-6 py-2 text-fontDesk md:text-fontDeskLarge rounded-full text-white transition-all duration-300 bg-gradient-to-r from-primaryOrange to-secondaryYellow hover:opacity-90"
                />
              );
            })()}
          </div>
        </Wrapper>
      </div>

      {/*--------------------- DESKTOP NAVBAR ---------------------*/}
      <nav
        className={`  relative z-[100] hidden lg:block   ${
          !isHomePage
            ? "bg-primary2 py-gap "
            : "bg-transparent  border-b border-white/20 mt-gap "
        }`}
      >
        <Wrapper>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${logo}`}
                alt="logo-header-desk"
                height={80}
                width={176}
                unoptimized
                className="w-[11rem] h-[5rem]"
              />
            </Link>

            <ul className="relative flex items-center gap-gapLargest">
              {navData.items.map((item, index) => {
                if (
                  item.title.toLowerCase() === "contact" ||
                  item.title.toLowerCase() === "contact us"
                ) {
                  return (
                    <li key={index} className="hidden">
                      <Button
                        type="link"
                        text={item.title}
                        href={item.url}
                        target={item.target}
                      />
                    </li>
                  );
                }

                if (item.url === "button") {
                  return (
                    <li key={index}>
                      <button
                        className={`transition-colors duration-300 text-white hover:text-primary
                        `}
                        onClick={toggleModal}
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

                  return (
                    <li
                      key={index}
                      className="relative group text-fontDeskLarge flex items-center"
                    >
                      <span
                        className={`text-white hover:text-primary cursor-pointer  transition-colors duration-300 flex items-center`}
                      >
                        {item.title}{" "}
                        <RiArrowDropDownLine color="white" size={"1.5rem"} />
                      </span>
                      <DropdownContent className="min-w-[12rem] top-full hidden group-hover:block rounded-md shadow-custom">
                        <ul className="flex flex-col gap-2 p-4">
                          {dropdownData.map((child) => (
                            <li
                              key={child.id}
                              className="border-b pb-gapMed last:pb-0 last:border-none"
                            >
                              <Link
                                href={`/${dynamicURL}/${child.slug}`}
                                className="text-black text-fontDesk hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primaryOrange hover:to-secondaryYellow transition-colors duration-300"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </DropdownContent>
                    </li>
                  );
                }

                return (
                  <li
                    key={index}
                    className="relative text-fontDeskLarge flex items-center"
                  >
                    <Link
                      className={`transition-colors duration-300 text-white hover:text-primary`}
                      href={item.url}
                      target={item.target}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div>
              {navData.items.map((item, index) => {
                if (
                  item.title.toLowerCase() === "contact" ||
                  item.title.toLowerCase() === "contact us"
                ) {
                  return (
                    <div key={index}>
                      <Button
                        type="link"
                        text={item.title}
                        href={item.url}
                        target={item.target}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </Wrapper>
      </nav>
    </>
  );
};

export default Navbar;

//------------------EXTRA CODE------------------------
// const navData = [
//   { title: "About Us", path: "about-us" },
//   { title: "Career", path: "career" },
//   { title: "Services", path: "services" },
//   { title: "Products", path: "products" },
//   { title: "Categories", path: "categories" },
//   { title: "Product Range", path: "product-range" },
//   { title: "Post Your Requirement", path: "post-requirement" },
// ];
// import mainLogo from "@/images/logo.svg";
// const [sideBarOffCanvasOpen, setSideBarOffCanvasOpen] = useState(false);

// //--------------------TOGGLE SIDEBAR OFF-CANVAS----------------------
// const toggleSideBarOffCanvas = () => {
//   setSideBarOffCanvasOpen((prevState) => !prevState);
// };
