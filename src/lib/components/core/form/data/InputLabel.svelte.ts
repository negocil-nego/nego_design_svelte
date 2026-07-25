import type { HTMLInputTypeAttribute } from "svelte/elements";

export interface InputLabelProps {
    type?: HTMLInputTypeAttribute;
    isLabel?: boolean;
    isIcon?: boolean;
    label?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
