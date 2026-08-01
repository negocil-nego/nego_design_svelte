import { derived, writable } from "svelte/store";
import { getMergedTranslations } from "./config";

/** Locale atual do sistema de internacionalização. Pode ser alterado diretamente. */
export const locale = writable("en");

type TranslationVars = Record<string, string | number>;

function translate(currentLocale: string, key: string, vars: TranslationVars) {
    if (!key) throw new Error("no key provided to $t()");
    if (!currentLocale) throw new Error(`no translation for key "${key}"`);

    const translations = getMergedTranslations();
    const langTranslations = (translations as Record<string, Record<string, string>>)[currentLocale];

    if (!langTranslations) throw new Error(`no translation found for locale "${currentLocale}"`);

    let text = langTranslations[key];

    if (!text) throw new Error(`no translation found for ${currentLocale}.${key}`);

    Object.keys(vars).forEach((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, String(vars[k]));
    });

    return text;
}

/** Lista de idiomas disponíveis. Atualizado automaticamente quando a config muda. */
export const locales = derived(locale, () => Object.keys(getMergedTranslations()) as string[]);

/**
 * Função de tradução reativa. Use `$t("chave")` nos templates Svelte
 * ou `get(t)("chave")` em scripts.
 *
 * Suporta interpolação de variáveis: `$t("label.login.with", { name: "Google" })`
 * @example
 * ```svelte
 * <p>{$t("label.welcome")}</p>
 * <p>{$t("label.login.with", { name: "Google" })}</p>
 * ```
 */
export const t = derived(
    locale,
    ($locale) =>
        (key: string, vars: TranslationVars = {}) =>
            translate($locale, key, vars),
);
