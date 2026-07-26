import { type ButtonProps } from "../../ui/button/button.svelte";
import { type IconSvgElement } from "@hugeicons/svelte";
import type { Snippet } from "svelte";
type IconDefault = "GOOGLE" | "FACEBOOK" | "LINKEDLN";
type Props = {
    icon?: IconSvgElement | IconDefault | Snippet;
    label?: string;
};
type $$ComponentProps = Props & ButtonProps;
declare const ButtonLoginWith: import("svelte").Component<$$ComponentProps, {}, "">;
type ButtonLoginWith = ReturnType<typeof ButtonLoginWith>;
export default ButtonLoginWith;
