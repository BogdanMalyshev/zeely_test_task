import { BASE_URL } from "@/constants";
import type { BackgroundItemType } from "@/features/avatar-background/types";

export const INITIAL_BACKGROUNDS: BackgroundItemType[] = [
  {
    id: "bg-1",
    thumbnailUrl: `${BASE_URL}images/background-1.png`,
    isDefault: true,
  },
  {
    id: "bg-2",
    thumbnailUrl: `${BASE_URL}images/background-2.png`,
  },
  {
    id: "bg-3",
    thumbnailUrl: `${BASE_URL}images/background-3.png`,
  },
  {
    id: "bg-4",
    thumbnailUrl: `${BASE_URL}images/background-4.png`,
  },
  {
    id: "bg-5",
    thumbnailUrl: `${BASE_URL}images/background-5.png`,
  },
];
