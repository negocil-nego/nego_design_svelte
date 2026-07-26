export type LanguageSwitcherProps = {
    /** Dropdown alignment */
    align?: "start" | "center" | "end";
    /** Button variant */
    variant?: "outline" | "ghost";
    class?: string;
};
declare const LanguageSwitcher: import("svelte").Component<LanguageSwitcherProps, {}, "">;
type LanguageSwitcher = ReturnType<typeof LanguageSwitcher>;
export default LanguageSwitcher;
