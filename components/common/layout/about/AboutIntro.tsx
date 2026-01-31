import Image from "next/image";

import { getAboutUsData } from "@/apis/get-apis";

const AboutIntro = async () => {
  const aboutCompany = await getAboutUsData();

  return (
    <div className="flex flex-col md:grid md:grid-cols-[0.5fr_1fr] gap-gapLargest lg:gap-[3rem] items-center">
      {aboutCompany.image && (
        <div className="relative h-[20rem] md:h-full lg:h-[25rem] w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${aboutCompany.image}`}
            alt="about"
            fill
            unoptimized
            quality={100}
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      <section className="flex flex-col gap-gapSmall lg:gap-gap">
        <h1 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-primary">
          {aboutCompany.name}
        </h1>
        <div
          className="leading-relaxed text-fontDeskLarge text-gray-700 flex flex-col gap-gapSmall"
          dangerouslySetInnerHTML={{
            __html: aboutCompany.content,
          }}
        />
      </section>
    </div>
  );
};

export default AboutIntro;
