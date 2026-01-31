import Skeleton from "@/components/ui/Skeleton";
import BlogCardSkeleton from "./BlogCardSkeleton";

export default function BlogsListSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-gapLargest">
      {/* Section Title Skeleton */}
      <Skeleton className="h-[2rem] w-[15rem] mx-auto" />

      <div className="flex flex-col gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
