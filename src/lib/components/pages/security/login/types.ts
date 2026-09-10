import type { Snippet } from "svelte"
import type { IconSvgElement } from "@hugeicons/svelte"

export type LoginFormType = "EMAIL_PASSWORD" | "PHONE_PASSWORD" | "USERNAME_PASSWORD"
export type LoginCarouselItemType = "NUMBER" | "DOT" | "POINTER"
export type LoginVariant = "EMAIL" | "USERNAME" | "PHONE"
export type SocialProvider = "GOOGLE" | "FACEBOOK" | "LINKEDIN"

export interface LoginCarouselItem {
  title: string
  description: string
  buttonText: string
  buttonUrl?: string
  backgroundUrl?: string
}

export interface LoginCarouselProps {
  items: LoginCarouselItem[],
  varient: LoginCarouselItemType
}

export type LoginRequestDto = {
  password: string
  data: string
}

export type LinkProps = {
  url?: string
  onclick?: () => void
}

export type SocialLoginItem = {
  provider: SocialProvider
  icon?: IconSvgElement
  label?: string
  onclick?: () => void
}

export type PageLoginProps = {
  carousel?: LoginCarouselItem[];
  varient?: LoginCarouselItemType;
  title?: string;
  children?: Snippet;
  formType?: LoginFormType;
  onSubmit?: (credential: LoginRequestDto) => void;
  forgetPassword?: LinkProps;
  privacyPolicy?: LinkProps;
  termsOfService?: LinkProps;
  socialLogins?: SocialLoginItem[];
};
