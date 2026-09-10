/**
 * Item de link individual exibido numa coluna do footer.
 */
export interface FooterLinkItem {
    /** Texto exibido no link */
    text: string;
    /** URL de destino (href) */
    href?: string;
}

/**
 * Item de rede social do footer com ícone, texto e link.
 */
export interface FooterSocialItem {
    /** Ícone da rede social — nome do ícone pré-definido */
    icon: "facebook" | "instagram" | "x" | "github" | "youtube" | "linkedin";
    /** Texto usado como aria-label / tooltip */
    text: string;
    /** URL do perfil/rede social */
    href?: string;
}

/**
 * Coluna do footer com título e lista de links.
 */
export interface FooterColumnProps {
    /** Título da coluna (ex: "Empresa", "Recursos") */
    title: string;
    /** Lista de links dentro da coluna */
    items: FooterLinkItem[];
}

/**
 * Props do componente Footer — rodapé completo com múltiplas colunas,
 * logo, newsletter opcional e ícones de redes sociais.
 */
export interface FooterProps {
    /** Lista de colunas de navegação do rodapé */
    items: FooterColumnProps[];
    /** URL do logotipo da empresa */
    logo?: string;
    /** Habilita/desabilita o formulário de newsletter */
    isNewsletter?: boolean;
    /** Lista de ícones das redes sociais */
    socialsMedia: FooterSocialItem[];
    /** Nome da empresa (exibido no copyright e newsletter) */
    companyName?: string;
    /** Título da seção de newsletter */
    newsletterTitle?: string;
    /** Descrição/texto auxiliar da newsletter */
    newsletterDescription?: string;
    /** Callback acionado ao submeter o email da newsletter */
    onSubscribe?: (email: string) => void;
}
