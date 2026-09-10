import type { TabProps } from "./data/TabModel";

/**
 * Props do componente TabUnderline — abas com estilo underline
 * que trocam o conteúdo conforme a aba selecionada.
 */
export interface TabUnderlineProps {
    /** Lista de abas com seu conteúdo (Snippet) */
    items?: TabProps[];
    /** Classe CSS adicional para o container */
    className?: string;
}
