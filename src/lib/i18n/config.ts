/* eslint-disable @typescript-eslint/no-explicit-any */
import baseTranslations from "./translations";

type Translations = Record<string, Record<string, string>>;

let userTranslations: Translations = {};

function deepMerge(target: Record<string, any>, source: Record<string, any>): Record<string, any> {
    const result = { ...target };
    for (const key of Object.keys(source)) {
        if (
            source[key] &&
            typeof source[key] === "object" &&
            !Array.isArray(source[key]) &&
            target[key] &&
            typeof target[key] === "object"
        ) {
            result[key] = deepMerge(target[key], source[key]);
        } else {
            result[key] = source[key];
        }
    }
    return result;
}

/**
 * Define as traduções customizadas do utilizador.
 * São mergeadas com as traduções base da lib (não sobrescrevem — são adicionadas).
 */
export function setUserTranslations(translations: Translations): void {
    userTranslations = translations;
}

/**
 * Retorna as traduções mescladas (base + customizadas do utilizador).
 */
export function getMergedTranslations(): Translations {
    return deepMerge(baseTranslations, userTranslations) as Translations;
}

/**
 * Retorna a lista de idiomas disponíveis (base + customizados).
 */
export function getLocales(): string[] {
    return Object.keys(getMergedTranslations());
}
