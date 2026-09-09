import type { ClassValue } from "svelte/elements";

export function cn(...inputs: (ClassValue | false | null | undefined)[]): string {
	const result: string[] = [];
	for (const input of inputs) {
		if (!input) continue;
		if (typeof input === "string" || typeof input === "number") {
			result.push(String(input));
		} else if (Array.isArray(input)) {
			result.push(cn(...input));
		} else if (typeof input === "object") {
			for (const key in input) {
				if (input[key]) result.push(key);
			}
		}
	}
	return result.join(" ");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };