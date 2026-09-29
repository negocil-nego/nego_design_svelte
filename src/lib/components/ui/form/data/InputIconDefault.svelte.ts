import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
import type { HTMLInputTypeAttribute } from "svelte/elements";

export const inputIconMap: Partial<Record<HTMLInputTypeAttribute, HugeiconsIconName>> = {
  email: "Mail01Icon",
  password: "LockPasswordIcon",
  search: "Search01Icon",
  tel: "SmartPhone02Icon",
  url: "Link01Icon",
  file: "File01Icon",
  date: "Calendar03Icon",
};
