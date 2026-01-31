import Skeleton from "@/components/ui/Skeleton";

const BlogCardSkeleton = () => {
  return (
   <div className="flex flex-col sm:flex-row gap-4 rounded-lg overflow-hidden bg-white shadow-[0_3px_10px_rgba(0,123,255,0.15)]">
      {/* Image Skeleton */}
      <Skeleton className="relative w-full sm:w-[15rem] h-[13rem]" />

      {/* Content Skeleton */}
      <div className="flex flex-col justify-between p-4 w-full">
        {/* Category */}
        <Skeleton className="h-4 w-24 mb-2" />

        {/* Title */}
        <Skeleton className="h-5 w-3/4 mb-4" />

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm mb-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <Skeleton className="h-3 w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
