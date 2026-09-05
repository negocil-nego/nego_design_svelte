import type { CarouselPlugins } from "./context.js";

export type AutoplayOptions = {
	delay?: number;
	stopOnInteraction?: boolean;
	loop?: boolean;
};

export function autoplay(options: AutoplayOptions = {}): CarouselPlugins[number] {
	return {
		delay: options.delay ?? 4000,
		stopOnInteraction: options.stopOnInteraction ?? true,
		loop: options.loop ?? false,
	};
}