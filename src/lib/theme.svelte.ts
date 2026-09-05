const STORAGE_KEY = "negodesign-theme";

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
	if (typeof window === "undefined") return "light";
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "light" || stored === "dark") return stored;
	if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) return "dark";
	return "light";
}

export const theme: { current: Theme } = $state({ current: getInitialTheme() });

export function applyTheme(value: Theme): void {
	if (typeof document !== "undefined") {
		const el = document.documentElement;
		el.classList.toggle("dark", value === "dark");
		el.style.colorScheme = value;
		window.localStorage.setItem(STORAGE_KEY, value);
	}
	theme.current = value;
}

export function toggleMode(): void {
	applyTheme(theme.current === "dark" ? "light" : "dark");
}

export function setMode(value: Theme): void {
	applyTheme(value);
}

if (typeof window !== "undefined") {
	theme.current = getInitialTheme();
	const el = document.documentElement;
	el.classList.toggle("dark", theme.current === "dark");
	el.style.colorScheme = theme.current;
}