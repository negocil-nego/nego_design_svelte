import type { Snippet } from "svelte"

export type LoginFormType = "EMAIL_PASSWORD" | "PHONE_PASSWORD" | "USERNAME_PASSWORD"
export type LoginCarouselItemType = "NUMBER" | "DOT" | "POINTER"
export type LoginVariant = "EMAIL" | "USERNAME" | "PHONE"

export interface LoginCarouselItem {
  title: string
  description: string
  buttonText: string
  buttonUrl?: string
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
};
