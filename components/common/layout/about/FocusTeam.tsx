import Image from "next/image";

import { getAboutUsInnerData } from "@/apis/get-apis";

const FocusTeam = async () => {
  const aboutInner = await getAboutUsInnerData();

  //----------------MISSION VISION DATA----------------
  const data = [
    {
      title: "Our Vision",
      content: aboutInner?.data?.our_vision || "",
    },
    {
      title: "Our Mission",
      content: aboutInner?.data?.our_mission || "",
    },
  ];

  //----------------OUR FOCUS DATA----------------
  const focusItems = [
    aboutInner?.data?.innovation_in_pharma || "",
    aboutInner?.data?.global_presence_expansion || "",
    aboutInner?.data?.growth_future_readiness || "",
    aboutInner?.data?.quality_of_primary_health_care || "",
    aboutInner?.data?.uncompromised_quality || "",
    aboutInner?.data?.customer_patient_centric_approach || "",
  ];

  return (
    <div className="flex flex-col gap-[3rem]">
      {/* Mission & Vision from props */}
      {data.map((item, index) => (
        <section
          key={index}
          className="bg-white p-6 rounded-2xl shadow-custom privacy-content"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-primaryBlue mb-gapMed">
            {item.title}
          </h3>
          <div
            className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </section>
      ))}
      {/* Our Focus */}
      <section className="mx-auto flex flex-col gap-gap lg:gap-gapLarge">
        <h3 className="text-center text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-primary">
          Our Focus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 focus-team-design">
          {focusItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border shadow-md rounded-2xl p-6 text-center default-font-family"
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            />
          ))}
        </div>
      </section>

      {/* Meet Our Expert Team */}
      <div className="flex flex-col md:grid md:grid-cols-[0.5fr_1fr] gap-gapLarge lg:gap-[3rem] items-center">
        <div className="relative h-[20rem] md:h-full lg:h-[25rem] w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${aboutInner.data.pharma_team}`}
            alt="meet-team"
            unoptimized
            quality={100}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <section className="mx-auto lg:text-left privacy-content">
          <h3 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-primary mb-gap">
            Meet Our Expert Pharma Quality Assurance Team Specialists
          </h3>

          <div
            className="text-gray-700 default-font-family leading-relaxed space-y-3 max-w-3xl mx-auto lg:mx-0"
            dangerouslySetInnerHTML={{
              __html: aboutInner.data.team_specialists,
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default FocusTeam;
