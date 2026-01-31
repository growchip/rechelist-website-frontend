import { getServicesData } from "@/apis/get-apis";
import PCDSection from "./PCDSection";

export default async function ThirdPartySection() {
  const service = await getServicesData();

  return (
    <PCDSection
      title={service?.description || "Third Party Manufacturing"}
      image={service?.image}
      content={service?.content}
      reverse
    />
  );
}
