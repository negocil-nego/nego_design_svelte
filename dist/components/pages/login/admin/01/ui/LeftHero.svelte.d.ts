import type { CarouselProps } from "../../../../../core/carousel/data/CarouselModel";
import type { Snippet } from "svelte";
type Props = {
    title?: string | Snippet;
    variant?: "NUMBER" | "DOT";
    autoPlayInterval?: number;
};
type $$ComponentProps = Props & CarouselProps;
declare const LeftHero: import("svelte").Component<$$ComponentProps, {}, "">;
type LeftHero = ReturnType<typeof LeftHero>;
export default LeftHero;
