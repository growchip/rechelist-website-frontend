import Skeleton from "@/components/ui/Skeleton";

export default function RecentBlogsSkeleton() {
  return (
    <div className="flex flex-col gap-gapLargest">
      {/* Title Skeleton */}
      <Skeleton className="h-[1.5rem] w-[10rem]" />

      <div className="flex flex-col gap-gap">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-6 items-center">
            {/* Image Skeleton */}
            <Skeleton className="w-[6rem] h-[6rem] rounded flex-shrink-0" />

            {/* Text Skeletons */}
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
