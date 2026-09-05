import { getContext, setContext } from "svelte";

export type PopoverStore = {
	open: boolean;
	anchorId: string;
	anchorEl: HTMLElement | null;
	clickEvent: MouseEvent | null;
	toggle: () => void;
	openMenu: () => void;
	closeMenu: () => void;
	setAnchor: (el: HTMLElement | null) => void;
};

const POPOVER_CONTEXT_KEY = Symbol("popover-context");

let popoverIdCounter = 0;

export function generatePopoverId(): string {
	popoverIdCounter += 1;
	return `popover-${popoverIdCounter.toString(36)}`;
}

export function setPopoverContext(store: PopoverStore): PopoverStore {
	return setContext(POPOVER_CONTEXT_KEY, store);
}

export function getPopoverContext(): PopoverStore {
	return getContext(POPOVER_CONTEXT_KEY) as PopoverStore;
}