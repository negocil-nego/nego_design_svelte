import type { LoginCarouselItem, LoginCarouselItemType } from "$lib/components/pages/security/login/types"
import type { Snippet } from "svelte"

export type OtpVerificationRequestDto = {
  code: string
}

export type PageOtpVerificationProps = {
  carousel?: LoginCarouselItem[];
  varient?: LoginCarouselItemType;
  title?: string;
  children?: Snippet;
  otpLength?: number;
  onSubmit?: (request: OtpVerificationRequestDto) => void;
};
