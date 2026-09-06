import { createRawSnippet } from 'svelte';

export function rawText(text: string) {
	return createRawSnippet(() => ({ render: () => text }));
}