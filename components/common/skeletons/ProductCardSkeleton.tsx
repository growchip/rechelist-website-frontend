import Skeleton from "@/components/ui/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <Skeleton className="w-full h-[18rem]" />
      <div className="p-5 flex flex-col gap-3">
        <Skeleton className="w-20 h-5 rounded-full" />
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-9 rounded-full" />
      </div>
    </div>
  );
}
