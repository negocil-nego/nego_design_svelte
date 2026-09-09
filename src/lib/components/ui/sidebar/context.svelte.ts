import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
import { getContext, setContext } from "svelte";
import { SIDEBAR_KEYBOARD_SHORTCUT } from "./constants.js";

type Getter<T> = () => T;

export type SidebarStateProps = {
	open: Getter<boolean>;
	setOpen: (open: boolean) => void;
	collapsible?: "icon" | "offcanvas" | "none";
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
};

class SidebarState {
	readonly props: SidebarStateProps;
	open = $derived.by(() => this.props.open());
	openMobile = $state(false);
	collapsible = $state<"icon" | "offcanvas" | "none">("offcanvas");
	side = $state<"left" | "right">("left");
	variant = $state<"sidebar" | "floating" | "inset">("sidebar");
	setOpen: SidebarStateProps["setOpen"];
	#isMobile: IsMobile;

	constructor(props: SidebarStateProps) {
		this.props = props;
		this.setOpen = props.setOpen;
		this.#isMobile = new IsMobile();
		if (props.collapsible !== undefined) this.collapsible = props.collapsible;
		if (props.side !== undefined) this.side = props.side;
		if (props.variant !== undefined) this.variant = props.variant;
	}

	get isMobile() {
		return this.#isMobile.current;
	}

	get state() {
		return this.open ? "expanded" : "collapsed";
	}

	get isOpen() {
		return this.isMobile ? this.openMobile : this.open;
	}

	setConfig(config: {
		collapsible?: "icon" | "offcanvas" | "none";
		side?: "left" | "right";
		variant?: "sidebar" | "floating" | "inset";
	}) {
		if (config.collapsible !== undefined) this.collapsible = config.collapsible;
		if (config.side !== undefined) this.side = config.side;
		if (config.variant !== undefined) this.variant = config.variant;
	}

	handleShortcutKeydown = (e: KeyboardEvent) => {
		if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			this.toggleSidebar();
		}
	};

	setOpenMobile = (value: boolean) => {
		this.openMobile = value;
	};

	toggleSidebar = () => {
		if (this.#isMobile.current) {
			this.openMobile = !this.openMobile;
		} else {
			this.setOpen(!this.open);
		}
	};

	toggle = this.toggleSidebar;
}

const SYMBOL_KEY = "scn-sidebar";

export function setSidebar(props: SidebarStateProps): SidebarState {
	return setContext(Symbol.for(SYMBOL_KEY), new SidebarState(props));
}

export function useSidebar(): SidebarState {
	return getContext(Symbol.for(SYMBOL_KEY));
}