import type { MouseEventHandler } from 'svelte/elements';
export type ButtonProps = ButtonPrimitiveProps & {
    loading?: boolean;
    onClickPromise?: (e: Parameters<MouseEventHandler<HTMLButtonElement>>[0] | Parameters<MouseEventHandler<HTMLAnchorElement>>[0]) => Promise<void>;
};
export type Size = 'default' | 'xs' | 'sm' | 'lg';
/**
 * Map sizes to their icon/normal size variant
 */
export declare const sizeMap: {
    readonly default: {
        readonly icon: "icon";
        readonly normal: "default";
    };
    readonly xs: {
        readonly icon: "icon-xs";
        readonly normal: "xs";
    };
    readonly sm: {
        readonly icon: "icon-sm";
        readonly normal: "sm";
    };
    readonly lg: {
        readonly icon: "icon-lg";
        readonly normal: "lg";
    };
};
export { type ButtonSize, type ButtonVariant } from './ui/button';
import { Button, type ButtonProps as ButtonPrimitiveProps } from './ui/button';
declare const Button: import("svelte").Component<ButtonProps, {}, "ref">;
type Button = ReturnType<typeof Button>;
export default Button;
