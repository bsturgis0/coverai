import { cn } from "@/lib/utils";

export function LoadingDots({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("space-x-1 flex", className)}>
      <div className="w-2 h-2 bg-current rounded-full animate-[bounce_1s_infinite_0ms]" />
      <div className="w-2 h-2 bg-current rounded-full animate-[bounce_1s_infinite_200ms]" />
      <div className="w-2 h-2 bg-current rounded-full animate-[bounce_1s_infinite_400ms]" />
    </div>
  );
}