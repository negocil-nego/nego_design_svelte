/** Locale atual do sistema de internacionalização. Pode ser alterado diretamente. */
export declare const locale: import("svelte/store").Writable<string>;
type TranslationVars = Record<string, string | number>;
/** Lista de idiomas disponíveis. Atualizado automaticamente quando a config muda. */
export declare const locales: import("svelte/store").Readable<string[]>;
/**
 * Função de tradução reativa. Use `$t("chave")` nos templates Svelte
 * ou `get(t)("chave")` em scripts.
 *
 * Suporta interpolação de variáveis: `$t("button.login.with", { name: "Google" })`
 * @example
 * ```svelte
 * <p>{$t("label.welcome")}</p>
 * <p>{$t("button.login.with", { name: "Google" })}</p>
 * ```
 */
export declare const t: import("svelte/store").Readable<(key: string, vars?: TranslationVars) => string>;
export {};
