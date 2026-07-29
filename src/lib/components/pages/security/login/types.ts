import type { CarouselItem, CarouselItemType } from "$lib/components/core/carousel/data/CarouselModel"
import type { Snippet } from "svelte"

export type AuthFormType = "EMAIL_PASSWORD" | "PHONE_PASSWORD" | "USERNAME_PASSWORD"

export type LoginVariant = "EMAIL" | "USERNAME" | "PHONE"

export type LoginRequestDto = {
  password: string
  data: string
}

export type LinkProps = {
  url?: string
  onclick?: () => void
}

export type PageLoginProps = {
  carousel?: CarouselItem[];
  varient?: CarouselItemType;
  title?: string;
  children?: Snippet;
  formType?: AuthFormType;
  onSubmit?: (credential: LoginRequestDto) => void;
  forgetPassword?: LinkProps;
  privacyPolicy?: LinkProps;
  termsOfService?: LinkProps;
};
