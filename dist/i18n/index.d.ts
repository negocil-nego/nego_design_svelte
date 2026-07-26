import translations from "./translations";
export declare const locale: import("svelte/store").Writable<string>;
export declare const locales: Array<keyof typeof translations>;
type TranslationVars = Record<string, string | number>;
export declare const t: import("svelte/store").Readable<(key: string, vars?: TranslationVars) => string>;
export {};
