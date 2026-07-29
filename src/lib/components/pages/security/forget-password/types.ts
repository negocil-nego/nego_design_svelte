import type { CarouselItem, CarouselItemType } from "$lib/components/core/carousel/data/CarouselModel"
import type { Snippet } from "svelte"

export type ForgetPasswordVariant = "EMAIL" | "PHONE" | "PHONE_EMAIL"

export type ForgetPasswordRequestDto = {
  data: string
  variant: ForgetPasswordVariant
}

export type PageForgetPasswordProps = {
  carousel?: CarouselItem[];
  varient?: CarouselItemType;
  title?: string;
  children?: Snippet;
  formType?: ForgetPasswordVariant;
  onSubmit?: (request: ForgetPasswordRequestDto) => void;
};
