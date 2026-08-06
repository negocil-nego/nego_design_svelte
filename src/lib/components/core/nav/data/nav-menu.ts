import type { IconSvgElement } from "@hugeicons/svelte"

export interface NavMenuLogoProps {
    img?: string
    url?: string
    label: string
    className?: string
    onclick?: () => void
}

export interface NavMenuLinksProps {
    url?: string
    label: string
    icon?: IconSvgElement
    onclick?: () => void
}

export interface NavMenuActionsProps {
    url?: string
    label: string
    type?: 'BUTTON' | 'LINK'
    className?: string
    icon?: IconSvgElement
    onclick?: () => void
}

export interface NavMenuProps {
    navClass?: string
    linkClass?: string
    buttonClass?: string
    logo?: NavMenuLogoProps
    links: NavMenuLinksProps[]
    actions?: NavMenuActionsProps[]
    align?: 'LINK_SEPARATED_ACTIONS' | 'LINK_INTO_ACTIONS'
    isLightSwitch?: boolean
    isLanguageSwitcher?: boolean
    onclickButtonLogin?: () => void
    onclickButtonRegister?: () => void
}