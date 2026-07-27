import type { Snippet } from "svelte";
/**
 * Layout de admin com sidebar, header e conteúdo.
 * @property {Snippet} appsidebar - Sidebar da aplicação
 * @property {Snippet} content - Conteúdo principal
 * @property {Snippet} breadcrumb - Navegação breadcrumb
 */
type Props = {
    appsidebar?: Snippet;
    content?: Snippet;
    breadcrumb?: Snippet;
};
declare const AdminPanel: import("svelte").Component<Props, {}, "">;
type AdminPanel = ReturnType<typeof AdminPanel>;
export default AdminPanel;
