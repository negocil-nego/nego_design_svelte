import type { Snippet } from "svelte";
/** Wrapper de conteúdo para páginas admin. */
type Props = {
    children?: Snippet;
};
declare const AdminContent: import("svelte").Component<Props, {}, "">;
type AdminContent = ReturnType<typeof AdminContent>;
export default AdminContent;
