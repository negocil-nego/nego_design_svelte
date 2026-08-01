import type { LoginCarouselItem, LoginCarouselItemType } from "$lib/components/pages/security/login/types"
import type { Snippet } from "svelte"

export type ResetPasswordRequestDto = {
  code: string
  password: string
  confirmPassword: string
}

export type PageResetPasswordProps = {
  carousel?: LoginCarouselItem[];
  varient?: LoginCarouselItemType;
  title?: string;
  children?: Snippet;
  otpLength?: number;
  onSubmit?: (request: ResetPasswordRequestDto) => void;
};
