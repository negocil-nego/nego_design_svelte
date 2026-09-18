import type { HTMLInputTypeAttribute } from "svelte/elements";

export interface InputLabelProps {
    type?: HTMLInputTypeAttribute;
    onClick?: () => void;
    isLabel?: boolean;
    isIcon?: boolean;
    label?: string;
    labelClass?: string;
    inputClass?: string;
    placeholderClass?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
