/* eslint-disable @typescript-eslint/no-explicit-any */
import baseTranslations from "./translations";
let userTranslations = {};
function deepMerge(target, source) {
    const result = { ...target };
    for (const key of Object.keys(source)) {
        if (source[key] &&
            typeof source[key] === "object" &&
            !Array.isArray(source[key]) &&
            target[key] &&
            typeof target[key] === "object") {
            result[key] = deepMerge(target[key], source[key]);
        }
        else {
            result[key] = source[key];
        }
    }
    return result;
}
/**
 * Define as traduções customizadas do utilizador.
 * São mergeadas com as traduções base da lib (não sobrescrevem — são adicionadas).
 */
export function setUserTranslations(translations) {
    userTranslations = translations;
}
/**
 * Retorna as traduções mescladas (base + customizadas do utilizador).
 */
export function getMergedTranslations() {
    return deepMerge(baseTranslations, userTranslations);
}
/**
 * Retorna a lista de idiomas disponíveis (base + customizados).
 */
export function getLocales() {
    return Object.keys(getMergedTranslations());
}
