import type { Snippet } from "svelte";

/**
 * Props do componente AdminPanel — layout principal de administração
 * com sidebar, header (breadcrumb, language switcher, light switch) e área de conteúdo.
 */
export interface AdminPanelProps {
    /** Snippet com a sidebar da aplicação */
    appsidebar?: Snippet;
    /** Snippet com o conteúdo principal */
    content?: Snippet;
    /** Snippet com a navegação breadcrumb */
    breadcrumb?: Snippet;
}

/**
 * Props do componente AdminContent — wrapper de conteúdo
 * para páginas admin com padding e layout flex.
 */
export interface AdminContentProps {
    /** Snippet com o conteúdo interno da página */
    children?: Snippet;
}
