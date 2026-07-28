type Translations = Record<string, Record<string, string>>;
/**
 * Define as traduções customizadas do utilizador.
 * São mergeadas com as traduções base da lib (não sobrescrevem — são adicionadas).
 */
export declare function setUserTranslations(translations: Translations): void;
/**
 * Retorna as traduções mescladas (base + customizadas do utilizador).
 */
export declare function getMergedTranslations(): Translations;
/**
 * Retorna a lista de idiomas disponíveis (base + customizados).
 */
export declare function getLocales(): string[];
export {};
