import { derived, writable } from "svelte/store";
import translations from "./translations";
export const locale = writable("en");
export const locales = Object.keys(translations);
function translate(currentLocale, key, vars) {
    if (!key)
        throw new Error("no key provided to $t()");
    if (!currentLocale)
        throw new Error(`no translation for key "${key}"`);
    // Fazemos o type assertion para garantir que o TypeScript reconheça as chaves com segurança
    const langTranslations = translations[currentLocale];
    if (!langTranslations)
        throw new Error(`no translation found for locale "${currentLocale}"`);
    let text = langTranslations[key];
    if (!text)
        throw new Error(`no translation found for ${currentLocale}.${key}`);
    // Substitui as variáveis passadas na string de tradução de forma segura
    Object.keys(vars).forEach((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, String(vars[k]));
    });
    return text;
}
export const t = derived(locale, ($locale) => (key, vars = {}) => translate($locale, key, vars));
