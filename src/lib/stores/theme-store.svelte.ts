import { theme, applyTheme, toggleMode, setMode, type Theme } from "$lib/theme.svelte";

/** Alterna entre light/dark. */
export { toggleMode as toggleTheme };

/** Define o tema explicitamente. */
export { setMode as setTheme };

/** Aplica um tema diretamente (alternativa a setTheme). */
export { applyTheme };

/** Obter o tema atual (não reativo — use $theme diretamente no componente). */
export function getTheme(): Theme {
	return theme.current;
}

/** Indica se o tema atual é escuro. */
export function isDark(): boolean {
	return theme.current === "dark";
}
