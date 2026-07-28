import { derived, writable } from "svelte/store";
import { getMergedTranslations } from "./config";

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

export const locales = derived(locale, () => Object.keys(getMergedTranslations()) as string[]);

export const t = derived(
    locale,
    ($locale) =>
        (key: string, vars: TranslationVars = {}) =>
            translate($locale, key, vars),
);
