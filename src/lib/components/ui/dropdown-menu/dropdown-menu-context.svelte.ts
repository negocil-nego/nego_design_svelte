import { getContext, setContext } from "svelte";

export type DropdownMenuStore = {
	open: boolean;
	anchorId: string;
	anchorEl: HTMLElement | null;
	clickEvent: MouseEvent | null;
	toggle: () => void;
	openMenu: () => void;
	closeMenu: () => void;
	setAnchor: (el: HTMLElement | null) => void;
};

export type DropdownMenuSubStore = {
	open: boolean;
};

export type DropdownRadioGroupStore = {
	state: { value: string };
	setValue: (value: string) => void;
};

const DROPDOWN_MENU_CONTEXT_KEY = Symbol("dropdown-menu-context");
const DROPDOWN_MENU_SUB_CONTEXT_KEY = Symbol("dropdown-menu-sub-context");
const DROPDOWN_MENU_RADIO_GROUP_CONTEXT_KEY = Symbol("dropdown-menu-radio-group-context");

let dropdownMenuIdCounter = 0;

export function generateDropdownMenuId(): string {
	dropdownMenuIdCounter += 1;
	return `dropdown-menu-${dropdownMenuIdCounter.toString(36)}`;
}

export function setDropdownMenuContext(store: DropdownMenuStore): DropdownMenuStore {
	return setContext(DROPDOWN_MENU_CONTEXT_KEY, store);
}

export function getDropdownMenuContext(): DropdownMenuStore {
	return getContext(DROPDOWN_MENU_CONTEXT_KEY) as DropdownMenuStore;
}

export function setDropdownMenuSubContext(store: DropdownMenuSubStore): DropdownMenuSubStore {
	return setContext(DROPDOWN_MENU_SUB_CONTEXT_KEY, store);
}

export function getDropdownMenuSubContext(): DropdownMenuSubStore {
	return getContext(DROPDOWN_MENU_SUB_CONTEXT_KEY) as DropdownMenuSubStore;
}

export function setDropdownMenuRadioGroupContext(ctx: DropdownRadioGroupStore): DropdownRadioGroupStore {
	return setContext(DROPDOWN_MENU_RADIO_GROUP_CONTEXT_KEY, ctx);
}

export function getDropdownMenuRadioGroupContext(): DropdownRadioGroupStore {
	return getContext(DROPDOWN_MENU_RADIO_GROUP_CONTEXT_KEY) as DropdownRadioGroupStore;
}