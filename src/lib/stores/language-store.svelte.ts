import { get, derived } from "svelte/store";
import { locale, locales, t } from "$lib/i18n";
import { languageFlagMap } from "$lib/components/ui/image/flag-map";

/** Idioma atual (reactivo). Altere com `languageStore.set("pt")`. */
export const languageStore = derived(locale, ($locale) => $locale);

/** Lista de idiomas disponíveis. */
export const languagesStore = locales;

/** Bandeira do idioma atual. */
export const languageFlagStore = derived(locale, ($locale) => languageFlagMap[$locale] ?? "gb");

/** Define o idioma da aplicação. */
export function setLanguage(lang: string) {
	locale.set(lang);
}

/** Retorna a tradução para a chave indicada no idioma atual. */
export function useT() {
	return get(t);
}
