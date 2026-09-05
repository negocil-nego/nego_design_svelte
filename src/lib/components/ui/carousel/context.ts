import { getContext, hasContext, setContext } from "svelte";
import type { WithElementRef } from "$lib/utils.js";
import type { HTMLAttributes } from "svelte/elements";

export type CarouselAPI = {
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
	selectedIndex: number;
	scrollTo: (index: number) => void;
	scrollSnapList: () => number[];
};

export type CarouselOptions = Record<string, unknown>;

export type CarouselPlugins = {
	delay?: number;
	stopOnInteraction?: boolean;
	loop?: boolean;
}[];

export type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugins;
	setApi?: (api: CarouselAPI | undefined) => void;
	orientation?: "horizontal" | "vertical";
} & WithElementRef<HTMLAttributes<HTMLDivElement>>;

const CAROUSEL_CONTEXT = Symbol("CAROUSEL_CONTEXT");

export type EmblaContext = {
	orientation: "horizontal" | "vertical";
	containerEl: HTMLElement | undefined;
	canScrollNext: boolean;
	canScrollPrev: boolean;
	selectedIndex: number;
	scrollSnaps: number[];
	scrollPrev: () => void;
	scrollNext: () => void;
	scrollTo: (index: number, jump?: boolean) => void;
	onScroll: () => void;
	handleKeyDown: (e: KeyboardEvent) => void;
	plugins: CarouselPlugins;
	setContainer: (el: HTMLDivElement | null | undefined) => void;
};

export function setEmblaContext(config: EmblaContext): EmblaContext {
	setContext(CAROUSEL_CONTEXT, config);
	return config;
}

export function getEmblaContext(name = "This component") {
	if (!hasContext(CAROUSEL_CONTEXT)) {
		throw new Error(`${name} must be used within a <Carousel.Root> component`);
	}
	return getContext<EmblaContext>(CAROUSEL_CONTEXT);
}