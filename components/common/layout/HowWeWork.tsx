"use client";

import Image from "next/image";

interface HowWeWorkProps {
  data: {
    id: number;
    name: string;
    slug: string;
    content: string;
    image: string | null;
    description: string;
  };
}

export default function HowWeWork({ data }: HowWeWorkProps) {
  return (
    <section>
      {/* Title */}
      <h1 className="mb-gapSmall text-2xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-primary">
        How We Work
      </h1>

      {/* Description */}
      <p className="text-fontDeskLarge text-gray-600 mb-gapUltra lg:mb-[3rem]">
        {data.description}
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Left Image */}
        {data.image && (
          <div className="relative h-[20rem] md:h-full lg:h-[25rem] w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${data.image}`}
              alt="how-we-work"
              fill
              unoptimized 
              quality={100}
              className="object-cover rounded-2xl"
            />
          </div>
        )}

        {/* Right Content */}
        <div className="flex flex-col gap-gap">
          <h2 className="text-2xl lg:text-3xl font-bold text-primaryBlue">
            {data.name}
          </h2>
          <div
            className="prose prose-lg text-gray-600 max-w-none text-fontDeskLarge"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </section>
  );
}
