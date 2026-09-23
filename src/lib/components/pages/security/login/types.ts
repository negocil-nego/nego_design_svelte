import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons-icons";
import type { Snippet } from "svelte"

export type LoginFormType = "EMAIL_PASSWORD" | "PHONE_PASSWORD" | "USERNAME_PASSWORD" | "USERNAME_OR_EMAIL_PASSWORD"
export type LoginCarouselItemType = "NUMBER" | "DOT" | "POINTER"
export type LoginVariant = "EMAIL" | "USERNAME" | "PHONE" | "USERNAME_OR_EMAIL"
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
  type: LoginCarouselItemType
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
  icon?: HugeiconsIconName
  label?: string
  onclick?: () => void
}

export type PageLoginProps = {
  carousel?: LoginCarouselItem[];
  type?: LoginCarouselItemType;
  title?: string;
  children?: Snippet;
  formType?: LoginFormType;
  onSubmit?: (credential: LoginRequestDto) => void;
  onButtonBack?: () => void;
  forgetPassword?: LinkProps;
  privacyPolicy?: LinkProps;
  termsOfService?: LinkProps;
  socialLogins?: SocialLoginItem[];
  isLoading?: boolean;
  iconLinkButtonClass?: string;
};
