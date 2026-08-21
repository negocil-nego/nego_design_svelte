/**
 * Tipagem partilhada por todos os componentes da página de documentação/política.
 * @module types
 */

/** Um item do breadcrumb no topo da página (ex: Blog / Current). */
export interface BreadcrumbItem {
    label: string;
    href?: string;
}

/**
 * Um bloco de conteúdo dentro de uma secção: parágrafo de texto
 * ou lista de pontos (bullets).
 */
export type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

/**
 * Uma secção de conteúdo (ex: "1. Introduction", "2.1 Personal Data").
 * `level` define o tamanho do título (1 = h2, 2 = h3).
 * `subsections` permite aninhar secções (2 -> 2.1, 2.2, ...).
 */
export interface DocSection {
    /** id único, usado para o link/scroll da sidebar e TOC (#id) */
    id: string;
    /** número exibido antes do título, ex: "1", "2.1" */
    number?: string;
    /** título da secção */
    title: string;
    /** nível do título (1 = h2, 2 = h3). Padrão: 1 */
    level?: 1 | 2;
    /** blocos de conteúdo (parágrafos, listas) */
    blocks?: ContentBlock[];
    /** subsecções aninhadas */
    subsections?: DocSection[];
}

/** Item derivado automaticamente das secções, para a tabela de conteúdos (TOC). */
export interface TocItem {
    id: string;
    label: string;
    level: 1 | 2;
}


export interface PrivacyPolicyOrTermsOfUseProps {
    /** Variante do layout: 1 = sidebar+TOC, 2 = hero+coluna. */
    variant?: 1 | 2;
    /** título da página */
    title: string;
    /** data da última atualização */
    lastUpdated: string;
    /** itens do breadcrumb */
    breadcrumb: BreadcrumbItem[];
    /** secções de conteúdo (usadas pela sidebar, TOC e renderização) */
    sections: DocSection[];
    isVisibleMenuLeft?: boolean;
    isVisibleMenuRight?: boolean;
}

/** Alias de PrivacyPolicyOrTermsOfUseProps — dados completos da página de documentação. */
export type DocPageData = PrivacyPolicyOrTermsOfUseProps;