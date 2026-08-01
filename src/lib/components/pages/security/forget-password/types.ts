import type { LoginCarouselItem, LoginCarouselItemType } from "$lib/components/pages/security/login/types"
import type { Snippet } from "svelte"

export type ForgetPasswordVariant = "EMAIL" | "PHONE" | "PHONE_EMAIL"

export type ForgetPasswordRequestDto = {
  data: string
  variant: ForgetPasswordVariant
}

export type PageForgetPasswordProps = {
  carousel?: LoginCarouselItem[];
  varient?: LoginCarouselItemType;
  title?: string;
  children?: Snippet;
  formType?: ForgetPasswordVariant;
  onSubmit?: (request: ForgetPasswordRequestDto) => void;
};
