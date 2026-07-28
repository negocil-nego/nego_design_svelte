import baseTranslations from "./translations";
import { getConfig } from "../config";

type Translations = Record<string, Record<string, string>>;

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

export function getMergedTranslations(): Translations {
    const userConfig = getConfig();
    const merged = deepMerge(baseTranslations, userConfig.translations ?? {}) as Translations;
    return merged;
}

export function getLocales(): string[] {
    return Object.keys(getMergedTranslations());
}
