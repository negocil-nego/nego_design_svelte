import type { CarouselItem, CarouselItemType } from "$lib/components/core/carousel/data/CarouselModel"
import type { Snippet } from "svelte"

export type ResetPasswordRequestDto = {
  code: string
  password: string
  confirmPassword: string
}

export type PageResetPasswordProps = {
  carousel?: CarouselItem[];
  varient?: CarouselItemType;
  title?: string;
  children?: Snippet;
  otpLength?: number;
  onSubmit?: (request: ResetPasswordRequestDto) => void;
};
