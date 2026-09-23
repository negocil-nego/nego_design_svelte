import { derived } from "svelte/store";
import { theme, applyTheme, toggleMode, setMode, type Theme } from "$lib/theme.svelte";

/** Tema atual ("light" | "dark"). Reactivo — atualiza-se em toda a app. */
export const themeStore = derived(theme, ($theme) => $theme.current);

/** Indica se o tema atual é escuro. */
export const isDarkStore = derived(theme, ($theme) => $theme.current === "dark");

/** Alterna entre light/dark. */
export { toggleMode as toggleTheme };

/** Define o tema explicitamente. */
export { setMode as setTheme };

/** Aplica um tema diretamente (alternativa a setTheme). */
export { applyTheme };
