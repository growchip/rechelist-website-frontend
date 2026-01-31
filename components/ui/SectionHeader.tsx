import Image from "next/image";

import headerCommon from "@/images/section-header.svg";

type SectionHeaderProps = {
  mainText: string;
  subText: string;
  subTextClass?: string;
  isBlock?: boolean;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  mainText,
  subText,
  subTextClass,
  isBlock,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isBlock ? "items-start" : "items-center text-center justify-center"
      } `}
    >
      <span className="text-transparent bg-clip-text bg-primary text-fontDeskLarge font-semibold">
      {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange to-secondaryYellow text-fontDeskLarge font-semibold"> */}
        {mainText}
      </span>

      <div className="relative inline-block">
        <span
          className={`${
            subTextClass
              ? subTextClass
              : "text-black text-fontDeskLargest lg:text-fontDeskUltra"
          } font-bold leading-tight`}
        >
          {subText}
        </span>
        <Image
          src={headerCommon}
          alt="header-icon"
          height={36}
          width={36}
          unoptimized
          className="w-[2rem] h-[2rem] lg:w-[2.25rem] lg:h-[2.25rem] absolute top-1/2 -translate-y-1/2 right-[-2.5rem] lg:right-[-2.8rem]"
        />
      </div>
    </div>
  );
};

export default SectionHeader;
