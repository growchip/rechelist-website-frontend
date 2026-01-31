import Skeleton from "@/components/ui/Skeleton";

const BlogCategoriesSkeleton = () => {
  return (
    <div className="flex flex-col gap-gapLarge">
      {/* Section heading skeleton */}
      <Skeleton className="h-[1.5rem] w-[10rem]" />

      {/* Categories pills skeleton */}
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="h-[2rem] w-[6rem] rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default BlogCategoriesSkeleton;
