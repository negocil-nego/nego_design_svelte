import type { Snippet } from "svelte";
type Props = {
    appsidebar?: Snippet;
    content?: Snippet;
    breadcrumb?: Snippet;
};
declare const AdminPanel: import("svelte").Component<Props, {}, "">;
type AdminPanel = ReturnType<typeof AdminPanel>;
export default AdminPanel;
