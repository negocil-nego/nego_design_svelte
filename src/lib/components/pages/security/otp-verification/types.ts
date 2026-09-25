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
  onButtonBack?: () => void;
  onButtonOtp?: () => void;
  onSubmit?: (request: OtpVerificationRequestDto) => void;
};
