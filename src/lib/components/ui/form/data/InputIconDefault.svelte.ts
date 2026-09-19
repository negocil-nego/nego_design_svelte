import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";
import type { HTMLInputTypeAttribute } from "svelte/elements";

export const inputIconMap: Partial<Record<HTMLInputTypeAttribute, HugeiconsIconName>> = {
  email: "mail-01",
  password: "lock-password",
  search: "search-01",
  tel: "smart-phone-02",
  url: "link-01",
  file: "file-01",
  date: "calendar-03",
};
