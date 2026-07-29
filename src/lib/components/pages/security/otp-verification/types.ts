import type { CarouselItem, CarouselItemType } from "$lib/components/core/carousel/data/CarouselModel"
import type { Snippet } from "svelte"

export type OtpVerificationRequestDto = {
  code: string
}

export type PageOtpVerificationProps = {
  carousel?: CarouselItem[];
  varient?: CarouselItemType;
  title?: string;
  children?: Snippet;
  otpLength?: number;
  onSubmit?: (request: OtpVerificationRequestDto) => void;
};
