import type { HugeiconsIconName } from "$lib/components/ui/image/icons";

export type { GridBadgeProps } from "./badge/types";
export type { GridHeroItem, GridHeroProps } from "./hero/types";

/**
 * Item individual do GridBadge — categoria/opção com ícone,
 * imagem, label e callback de clique.
 */
export interface ItemGridBadge {
    /** Valor único do item (usado para identificar seleção) */
    value: string,
    /** Texto exibido no item */
    label: string,
    /** Código ISO do país da bandeira a exibir via ImageFlag */
    country?: string,
    /** URL da imagem opcional do item */
    image?: string,
    /** URL de navegação opcional */
    link?: string,
    /** Ícone SVG opcional do item */
    icon?: HugeiconsIconName | string,
    /** Indica se o item está ativo/selecionado */
    isActive?: boolean,
    /** Callback acionado ao clicar no item */
    onClick?: (value: string) => void,
}

/**
 * Props do GridHeader — cabeçalho de grid com título e descrição.
 * Estrutura equivalente ao CarouselHeader para permitir troca direta.
 */
export interface GridHeaderProps {
    /** Título do grid */
    title?: string,
    /** Descrição/subtítulo abaixo do título */
    description?: string,
    /** Classe CSS personalizada para o título */
    titleClass?: string,
    /** Classe CSS personalizada para a descrição */
    descriptionClass?: string,
    /** Classe CSS adicional para o container do header */
    containerClass?: string,
    /** Mantido por compatibilidade com o CarouselHeader (sem efeito no grid) */
    positionButtonPreviousAndNext?: "center" | "top_right",
    /** Exibe borda inferior no header */
    isBorder?: boolean;
}
