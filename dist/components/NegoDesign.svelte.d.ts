type Translations = Record<string, Record<string, string>>;
type $$ComponentProps = {
    /** Traduções customizadas por idioma. São mergeadas com as traduções base da lib. */
    translations?: Translations;
    children: any;
};
declare const NegoDesign: import("svelte").Component<$$ComponentProps, {}, "">;
type NegoDesign = ReturnType<typeof NegoDesign>;
export default NegoDesign;
