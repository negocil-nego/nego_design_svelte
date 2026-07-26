import type { HTMLInputTypeAttribute } from "svelte/elements";
export interface InputLabelProps {
    type?: HTMLInputTypeAttribute;
    isLabel?: boolean;
    isIcon?: boolean;
    label?: string;
    [key: string]: any;
}
