import { Button } from "@/components/ui";
import type { BackgroundItemType } from "@/features/avatar-background/types";
import { cn } from "@/utils/cn";

type BackgroundCardPropsType = {
  readonly background: BackgroundItemType;
  readonly isSelected: boolean;
  readonly onSelect: (id: string) => void;
};

export const AvatarBackgroundCard = ({
  background,
  isSelected,
  onSelect,
}: BackgroundCardPropsType) => {
  const { id, thumbnailUrl, isDefault, isGenerating, progress, estimatedTime } =
    background;

  if (isGenerating) {
    const displayProgress = progress || 0;
    const progressCircumference = (displayProgress * 1.005).toFixed(2);

    return (
      <div className="relative aspect-[112/198] w-full overflow-hidden rounded-[12px] bg-black">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="relative size-[65px]">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                className="opacity-20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray={`${progressCircumference} 100`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium">
              {displayProgress}%
            </span>
          </div>
        </div>
        {estimatedTime && (
          <span className="absolute bottom-4 left-0 right-0 text-center text-[12px] font-semibold text-white">
            {estimatedTime}
          </span>
        )}
      </div>
    );
  }

  const cardClasses = cn(
    "p-0 hover:bg-transparent focus-visible:outline-none",
    "relative aspect-[112/198] h-auto w-full overflow-hidden rounded-[12px]",
    isSelected && "border-2 border-black rounded-[16px]"
  );

  return (
    <Button
      onClick={() => onSelect(id)}
      variant="ghost"
      className={cardClasses}
    >
      <img
        src={thumbnailUrl}
        alt="Background option"
        className="size-full object-cover"
      />
      
      {isDefault && (
        <span className="absolute left-2 top-2 rounded-[5px] border border-black/5 bg-white px-1 py-1 text-[10px] font-bold uppercase leading-[100%] text-[#404040] backdrop-blur-[7.5px]">
          default
        </span>
      )}
    </Button>
  );
};
