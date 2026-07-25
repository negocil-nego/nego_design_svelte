import { derived, writable } from "svelte/store";
import translations from "./translations";

export const locale = writable("en");
export const locales = Object.keys(translations) as Array<keyof typeof translations>;

// Definimos o tipo para as chaves com base no idioma padrão (ex: 'en')
type TranslationVars = Record<string, string | number>;

function translate(currentLocale: string, key: string, vars: TranslationVars) {
  if (!key) throw new Error("no key provided to $t()");
  if (!currentLocale) throw new Error(`no translation for key "${key}"`);

  // Fazemos o type assertion para garantir que o TypeScript reconheça as chaves com segurança
  const langTranslations = (translations as Record<string, Record<string, string>>)[currentLocale];

  if (!langTranslations) throw new Error(`no translation found for locale "${currentLocale}"`);

  let text = langTranslations[key];

  if (!text) throw new Error(`no translation found for ${currentLocale}.${key}`);

  // Substitui as variáveis passadas na string de tradução de forma segura
  Object.keys(vars).forEach((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, String(vars[k]));
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key: string, vars: TranslationVars = {}) =>
      translate($locale, key, vars),
);