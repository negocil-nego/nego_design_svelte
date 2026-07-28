import { derived, writable } from "svelte/store";
import { getMergedTranslations } from "./config";
export const locale = writable("en");
function translate(currentLocale, key, vars) {
    if (!key)
        throw new Error("no key provided to $t()");
    if (!currentLocale)
        throw new Error(`no translation for key "${key}"`);
    const translations = getMergedTranslations();
    const langTranslations = translations[currentLocale];
    if (!langTranslations)
        throw new Error(`no translation found for locale "${currentLocale}"`);
    let text = langTranslations[key];
    if (!text)
        throw new Error(`no translation found for ${currentLocale}.${key}`);
    Object.keys(vars).forEach((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, String(vars[k]));
    });
    return text;
}
export const locales = derived(locale, () => Object.keys(getMergedTranslations()));
export const t = derived(locale, ($locale) => (key, vars = {}) => translate($locale, key, vars));
