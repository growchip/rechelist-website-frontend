import Image from "next/image";

type PCDSectionProps = {
  title: string;
  image: string;
  content?: string;
  offers?: string[];
  reverse?: boolean;
};

const PCDSection = ({
  title,
  image,
  content,
  offers,
  reverse,
}: PCDSectionProps) => {
  return (
    <section
      className={`flex flex-col md:grid md:grid-cols-[0.8fr_1fr] lg:flex lg:flex-row gap-gapLarge lg:gap-[3rem] ${
        reverse ? "flex-col-reverse lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-[20rem] md:h-[25rem] w-full lg:w-[45%]">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${image}`}
          alt={title}
          fill
          unoptimized
          quality={100}
          className="object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Content */}
      <div className="text-left lg:w-full">
        <h3 className="mb-2 lg:mb-4 text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-primary">
          {title}
        </h3>

        {content && (
          <div
            className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {offers && offers.length > 0 && (
          <div className="text-gray-700 leading-relaxed mt-4">
            <h4 className="font-semibold text-lg mb-2">What We Offer:</h4>
            <ul className="list-disc pl-5 space-y-1 text-left">
              {offers.map((offer, idx) => (
                <li key={idx}>{offer}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default PCDSection;
