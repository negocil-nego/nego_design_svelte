import { getContext, setContext } from "svelte";

export type UnderlineTabsContext = {
	get value(): string;
	get hovered(): string | null;
	get orientation(): "horizontal" | "vertical";
	select: (value: string) => void;
	setHovered: (value: string | null) => void;
};

const UNDERLINE_TABS_CONTEXT_KEY = "scn-underline-tabs";

export function useUnderlineTabs(ctx: UnderlineTabsContext): UnderlineTabsContext {
	return setContext(UNDERLINE_TABS_CONTEXT_KEY, ctx);
}

export function useUnderlineTabsTrigger(): UnderlineTabsContext {
	return getContext<UnderlineTabsContext>(UNDERLINE_TABS_CONTEXT_KEY);
}