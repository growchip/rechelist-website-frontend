import { getRange } from "@/apis/get-apis";
import RangeBar from "./RangeBar";

export default async function RangeBarSection() {
  const productsRange = await getRange();
  return <RangeBar rangeList={productsRange} />;
}
