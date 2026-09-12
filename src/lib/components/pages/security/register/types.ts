import type { Snippet } from "svelte"
import type { IconSvgElement } from "@hugeicons/svelte"

export type RegisterCarouselItemType = "NUMBER" | "DOT" | "POINTER"
export type SocialProvider = "GOOGLE" | "FACEBOOK" | "LINKEDIN"

export interface RegisterCarouselItem {
  title: string
  description: string
  buttonText: string
  buttonUrl?: string
  backgroundUrl?: string
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

export type RegisterFormFields = {
  isName?: boolean
  isEmail?: boolean
  isPassword?: boolean
  isConfirmPassword?: boolean
  isBirthday?: boolean
  isGender?: boolean
  isPhone?: boolean
}

export type RegisterRequestDto = {
  name?: string
  email: string
  password?: string
  confirmPassword?: string
  birthday?: string
  gender?: string
  phone?: string
}

export type PageRegisterProps = {
  carousel?: RegisterCarouselItem[]
  type?: RegisterCarouselItemType
  title?: string
  children?: Snippet
  fields?: RegisterFormFields
  onSubmit?: (data: RegisterRequestDto) => void
  login?: LinkProps
  privacyPolicy?: LinkProps
  termsOfService?: LinkProps
  socialLogins?: SocialLoginItem[]
}
