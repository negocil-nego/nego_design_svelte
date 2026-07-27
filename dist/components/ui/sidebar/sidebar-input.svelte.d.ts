declare const SidebarInput: import("svelte").Component<(Omit<import("svelte/elements").HTMLInputAttributes, "type"> & ({
    type: "file";
    files?: FileList;
} | {
    type?: "number" | "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "hidden" | "image" | "month" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" | (string & {});
    files?: undefined;
})) & {
    ref?: HTMLElement | null | undefined;
}, {}, "value" | "ref">;
type SidebarInput = ReturnType<typeof SidebarInput>;
export default SidebarInput;
