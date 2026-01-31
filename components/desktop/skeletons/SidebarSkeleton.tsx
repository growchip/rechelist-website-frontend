import Skeleton from "@/components/ui/Skeleton";

export default function SidebarSkeleton() {
  return (
    <aside className="w-full bg-gray-50 shadow-[0px_0px_4px_rgba(0,0,0,0.1)] rounded-lg p-gap flex-col gap-gapLarge h-fit sticky top-0 hidden lg:flex">
      {/* Header Skeleton */}
      <Skeleton className="w-32 h-6 rounded" />

      {/* List Skeletons */}
      <ul className="space-y-2">
        {Array.from({ length: 13 }).map((_, i) => (
          <li key={i}>
            <Skeleton className="w-full h-9 rounded-md" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
