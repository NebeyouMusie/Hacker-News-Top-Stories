import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center min-w-[60px]">
          <Skeleton className="h-6 w-6 rounded-full mb-1" />
          <Skeleton className="h-4 w-8" />
        </div>
        <div className="flex-1">
          <Skeleton className="h-7 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;