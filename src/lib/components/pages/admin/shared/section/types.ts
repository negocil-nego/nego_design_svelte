import type { ImageLogoProps } from "$lib/components/ui/image/types";
import type { IconSvgElement } from "@hugeicons/svelte";
import type { NavMenuLinksProps } from "$lib/components/ui/nav/data/nav-menu";

/**
 * Item do menu de navegação da AdminSection.
 * Cada item funciona como uma aba: ao clicar, `onSelect` é chamado
 * com o `id` e os cards associados ao `menuId` correspondente são exibidos.
 */
export interface AdminSectionMenuItem {
    /** Identificador único do item (usado no callback `onSelect` e como valor ativo) */
    id?: string | number;
    /** Título exibido no botão do menu */
    title: string;
    /** Texto curto exibido ao lado do título (ex.: quantidade) */
    caption?: string;
    /** Ícone do item — URL de classe CSS (string) ou componente Hugeicons (IconSvgElement) */
    icon?: string | IconSvgElement;
    /** Define este item como selecionado por padrão quando `selectedKey` não é passado */
    isActive?: boolean;
}

/**
 * Card exibido dentro da grade da AdminSection.
 * Opcionalmente pode ser associado a um item do menu via `menuId`;
 * cards sem `menuId` ficam sempre visíveis em qualquer menu ativo.
 */
export interface AdminSectionCard {
    /** Identificador único do card (usado no callback `onCardClick`) */
    id?: string | number;
    /** Ícone do card — classe CSS (string) ou componente Hugeicons (IconSvgElement) */
    icon?: string | IconSvgElement;
    /** Título do card */
    title: string;
    /** Valor principal do card (ex.: número, moeda, percentagem) */
    value?: string | number;
    /** Menu ao qual este card pertence (id do `AdminSectionMenuItem`) */
    menuId?: string | number;
    iconClass?: string;
}

/**
 * Props do componente AdminUserSection — avatar do utilizador logado com
 * dropdown de perfil que abre no hover (quase idêntico ao NavUserSidebar).
 */
export interface AdminUserSectionProps {
    /** Nome completo do utilizador */
    name: string;
    /** Email do utilizador */
    email: string;
    /** URL da imagem de perfil/avatar (opcional) */
    avatarUrl?: string;
    /** Callback acionado ao clicar na opção "Perfil" */
    onProfile?: () => void;
    /** Callback acionado ao clicar na opção "Definições" */
    onSettings?: () => void;
    /** Callback acionado ao clicar na opção "Terminar sessão" */
    onLogout?: () => void;
    /** Classe CSS adicional do container do dropdown */
    className?: string;
    /** Classe CSS adicional do trigger (avatar) */
    triggerClass?: string;
    /** Classe CSS adicional do avatar */
    avatarClass?: string;
}

/**
 * Props do componente AdminSection — secção administrativa com fundo,
 * menu de navegação (tabs) e grade de cards.
 */
export interface AdminSectionProps {
    /** Título da secção */
    logo?: ImageLogoProps;
    /** Dados do usuário logado */
    user: AdminUserSectionProps;
    /** Itens do menu de navegação (tabs) */
    menuItems?: NavMenuLinksProps[];
    /** Cards exibidos na grade abaixo do menu */
    cards?: AdminSectionCard[];
    /** Id do item de menu ativo (controlado pelo utilizador; bindable) */
    selectedKey?: string | number;
    /** Classe CSS adicional do container (div com fundo) */
    className?: string;
    /** Classe CSS adicional da barra de menu */
    menuClass?: string;
    /** Classe CSS adicional de cada card */
    cardClass?: string;
    /** Classe CSS adicional da grade de cards */
    gridClass?: string;
    /** Callback chamado quando um item do menu é clicado, recebendo o `id` */
    onSelect?: (id: string | number) => void;
    /** Callback chamado quando um card é clicado, recebendo o `id` */
    onCardClick?: (id: string | number) => void;
}

/**
 * Props do componente AdminUserSectionMobile — avatar do utilizador em
 * menu móvel (drawer) com links de navegação.
 */
export interface AdminUserSectionMobileProps {
    /** Dados do usuário logado */
    user: AdminUserSectionProps;
    /** Links de navegação exibidos no menu móvel */
    menuItems?: NavMenuLinksProps[];
}