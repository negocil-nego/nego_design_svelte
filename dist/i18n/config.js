import baseTranslations from "./translations";
import { getConfig } from "../config";
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
export function getMergedTranslations() {
    const userConfig = getConfig();
    const merged = deepMerge(baseTranslations, userConfig.translations ?? {});
    return merged;
}
export function getLocales() {
    return Object.keys(getMergedTranslations());
}
