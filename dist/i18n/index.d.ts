export declare const locale: import("svelte/store").Writable<string>;
type TranslationVars = Record<string, string | number>;
export declare const locales: import("svelte/store").Readable<string[]>;
export declare const t: import("svelte/store").Readable<(key: string, vars?: TranslationVars) => string>;
export {};
