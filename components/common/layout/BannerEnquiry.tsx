"use client";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { useModal } from "@/hooks/useModalContext";

const BannerEnquiry = () => {
  const { toggleModal } = useModal();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <Button
      type="button"
      text="Send Enquiry"
      className={`bg-primaryBlue text-white px-4 md:px-6 py-2 rounded-full text-fontDesk md:text-fontDeskLarge ${
        isHomePage ? "border border-white" : ""
      }`}
      onClick={toggleModal}
    />
  );
};

export default BannerEnquiry;
