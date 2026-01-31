import Skeleton from "@/components/ui/Skeleton";

export default function RangeBarSkeleton() {
  return (
    <div className="sticky top-0 z-20 w-full hidden p-gap lg:flex flex-wrap gap-4 mb-gapLargest bg-white">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-28 rounded-full" />
      ))}
    </div>
  );
}
