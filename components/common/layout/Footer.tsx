import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import Wrapper from "@/components/ui/Wrapper";
import { Contact, MenuGroup } from "@/types/nav-items";

import locationIcon from "@/icons/location-icon.svg";
import mailIcon from "@/icons/mail-icon.svg";
import phoneIcon from "@/icons/phone-icon.svg";
import NewsletterForm from "../forms/NewsletterForm";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandPinterest,
  IconBrandInstagram,
} from "@tabler/icons-react";

type FooterProps = {
  socialLinks: MenuGroup;
  quickLinks: MenuGroup;
  resourceLinks: MenuGroup;
  contactInfo: Contact;
  logo: string;
  description: string;
};

const Footer: React.FC<FooterProps> = ({
  socialLinks,
  quickLinks,
  resourceLinks,
  contactInfo,
  logo,
  description,
}) => {
  const contactUsData = [
    {
      img: locationIcon,
      content: contactInfo.address,
    },
    {
      img: mailIcon,
      content: contactInfo.email,
      email: true,
    },
    {
      img: phoneIcon,
      content: contactInfo.phone,
      tel: true,
    },
  ];

  const iconMap: Record<string, JSX.Element> = {
    "ti ti-brand-facebook": <IconBrandFacebook size={24} stroke={1.5} />,
    "ti ti-brand-x": <IconBrandX size={24} stroke={1.5} />,
    "ti ti-brand-pinterest": <IconBrandPinterest size={24} stroke={1.5} />,
    "ti ti-brand-instagram": <IconBrandInstagram size={24} stroke={1.5} />,
  };

  return (
    <div className="mt-sectionGap bg-grayNeutral py-gapUltra">
      <Wrapper>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-gapUltra border-b border-[#2297CA]/10 pb-gapUltra md:grid md:grid-cols-[1fr_1fr] md:gap-[5rem] items-center ">
            <div className="flex flex-col gap-gap">
              <Link href="/" className="w-fit">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${logo}`}
                  alt="logo-footer"
                  height={72}
                  width={160}
                  unoptimized
                  className="w-[6.5rem] h-[3rem] md:w-[10rem] md:h-[4.5rem]"
                />
              </Link>
              <p className="text-white text-base font-normal">{description}</p>
            </div>
            <NewsletterForm />
          </div>

          <div className="flex flex-col gap-gapUltra ">
            <div className=" flex flex-col md:flex-row gap-gapUltra md:gap-0 justify-between w-full">
              <div className="flex flex-col gap-gapMed lg:gap-gap pt-gapLargest w-full md:pl-0 pl-10">
                <h6 className="text-white font-semibold">Contact Us</h6>
                <div className="flex flex-col gap-gap">
                  {contactUsData.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-gapMed items-center text-base font-normal"
                    >
                      <Image
                        src={item.img}
                        alt={`contact-icon-${index}`}
                        width={20}
                        height={20}
                        unoptimized
                        className="size-[1.25rem]"
                      />
                      {item.tel ? (
                        <a
                          href={`tel:${item.content}`}
                          className="text-white hover:text-primaryOrange transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : item.email ? (
                        <a
                          href={`mailto:${item.content}`}
                          className="text-white hover:text-primaryOrange transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span
                          className="text-white"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-gap pt-gapLargest w-full border-[#2297CA]/10  md:border-r md:border-l md:items-center md:justify-center md:pl-0 pl-10">
                <h6 className="text-white font-semibold">{quickLinks.name}</h6>
                <div className="flex flex-col gap-gap text-base font-normal">
                  {quickLinks.items.map((link, linkIndex) => (
                    <Link
                      target={link.target}
                      href={link.url}
                      key={linkIndex}
                      className="w-fit text-white hover:bg-clip-text hover:text-primary transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-gap pt-gapLargest w-full pl-10">
                <h6 className="text-white font-semibold">
                  {resourceLinks.name}
                </h6>
                <div className="flex flex-col gap-gap text-base font-normal">
                  {resourceLinks.items.map((link, linkIndex) => (
                    <Link
                      target={link.target}
                      href={link.url}
                      key={linkIndex}
                      className="w-fit text-white hover:bg-clip-text hover:text-primary transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-gapUltra items-center ">
              {socialLinks.items.map((item, index) => {
                const iconKey = item.icon ?? "";
                const IconElement = iconMap[iconKey];

                return (
                  <Link
                    key={index}
                    href={item.url}
                    target={item.target}
                    className="transition-transform duration-300 flex items-center justify-center  hover:scale-125 text-white hover:text-primary h-[2.5rem] w-[2.5rem] border border-white/10 rounded-full"
                  >
                    {IconElement || null}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="text-center text-white text-base font-normal">
            Copyright © {new Date().getFullYear()} All Rights Reserved |{" "}
            Rechelist Pharma
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;

//--------------------EXTRA CODE--------------------------
// import fbIcon from "@/icons/fb-icon.svg";
// import linkedinIcon from "@/icons/linkedin-icon.svg";
// import xIcon from "@/icons/x-icon.svg";
// import mainLogo from "@/images/logo.svg";
// const socialIcons = [
//   { img: fbIcon, slug: "#" },
//   { img: linkedinIcon, slug: "#" },
//   { img: xIcon, slug: "#" },
// ];
{
  /* <div className="flex gap-gapUltra items-center">
              {socialIcons.map((social, socialIndex) => (
                <Link
                  href={social.slug}
                  key={socialIndex}
                  className="transition-transform duration-300 hover:scale-125"
                >
                  <Image
                    src={social.img}
                    alt={`social-icon-${socialIndex}`}
                    width={20}
                    height={20}
                    unoptimized
                    className="size-[1.25rem]"
                  />
                </Link>
              ))}
            </div> */
}
{
  //   const footerDummyData = [
  //   {
  //     title: "Quick Links",
  //     content: [
  //       { title: "About Us", slug: "about-us" },
  //       { title: "Products", slug: "products" },
  //       { title: "Services", slug: "services" },
  //       { title: "Blog", slug: "blog" },
  //       { title: "Contact Us", slug: "contact-us" },
  //     ],
  //   },
  //   {
  //     title: "Resource",
  //     content: [
  //       { title: "Privacy Policy", slug: "privacy-policy" },
  //       { title: "Terms and Conditions", slug: "terms-and-conditions" },
  //       { title: "FAQ", slug: "faq" },
  //       { title: "How We Work", slug: "how-we-work" },
  //     ],
  //   },
  // ];
}
