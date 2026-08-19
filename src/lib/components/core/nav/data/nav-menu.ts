import type { IconSvgElement } from "@hugeicons/svelte"

/**
 * Props do logotipo no NavMenu.
 */
export interface NavMenuLogoProps {
    /** URL da imagem do logotipo */
    img?: string
    /** URL de destino ao clicar no logo */
    url?: string
    /** Texto alternativo / label do logo */
    label: string
    /** Classe CSS adicional */
    className?: string
    /** Callback ao clicar no logo */
    onclick?: () => void
}

/**
 * Props de um link individual no menu de navegação.
 */
export interface NavMenuLinksProps {
    /** Key menu */
    key?: string
    /** URL de destino do link */
    url?: string
    /** Alias de `url` — URL de destino do link (compatibilidade) */
    href?: string
    /** Texto exibido no link */
    label: string
    /** Ícone SVG opcional antes do label */
    icon?: IconSvgElement
    /** Callback ao clicar no link */
    onclick?: () => void
}

/**
 * Props de um item de ação (botão ou link) no menu de navegação.
 * Usado para login, registo, etc.
 */
export interface NavMenuActionsProps {
    /** URL de destino da ação */
    url?: string
    /** Texto exibido na ação */
    label: string
    /** Tipo de elemento: botão estilizado ou link simples */
    type?: 'BUTTON' | 'LINK'
    /** Classe CSS adicional */
    className?: string
    /** Ícone SVG opcional */
    icon?: IconSvgElement
    /** Callback ao clicar na ação */
    onclick?: () => void
}

/**
 * Props do componente NavMenu — barra de navegação principal
 * com logo, links, ações (login/registo), language switcher e light switch.
 */
export interface NavMenuProps {
    /** Key nav menu */
    menuKey?: string
    /** Key CSS nav menu */
    activeClass?: string
    /** Classe CSS adicional para o container do nav */
    navClass?: string
    /** Classe CSS personalizada para cada link */
    linkClass?: string
    /** Classe CSS personalizada para o grupo de links/açōes */
    groupClass?: string
    /** Classe CSS personalizada para os botões */
    buttonClass?: string
    /** Configuração do logotipo */
    logo?: NavMenuLogoProps
    /** Lista de links de navegação */
    links: NavMenuLinksProps[]
    /** Lista de ações (ex: Login, Registar) */
    actions?: NavMenuActionsProps[]
    /** Alinhamento dos links e das ações */
    align?: 'LINK_SEPARATED_ACTIONS' | 'LINK_INTO_ACTIONS'
    /** Exibe o interruptor de tema (claro/escuro) */
    isLightSwitch?: boolean
    /** Exibe o seletor de idioma */
    isLanguageSwitcher?: boolean
    /** Callback ao clicar no botão Login */
    onclickButtonLogin?: () => void
    /** Callback ao clicar no botão Registar */
    onclickButtonRegister?: () => void
}
