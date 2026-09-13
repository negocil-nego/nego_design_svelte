import type { HTMLInputTypeAttribute } from "svelte/elements";
import {
  Mail01Icon,
  LockPasswordIcon,
  Search01Icon,
  SmartPhone01Icon,
  File01Icon,
  Calendar01Icon,
  Url,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/svelte";

export const inputIconMap: Partial<Record<HTMLInputTypeAttribute, IconSvgElement>> = {
  email: Mail01Icon,
  password: LockPasswordIcon,
  search: Search01Icon,
  tel: SmartPhone01Icon,
  url: Url,
  file: File01Icon,
  date: Calendar01Icon,
};
