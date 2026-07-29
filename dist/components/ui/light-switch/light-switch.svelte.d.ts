import type { Size } from "../button/button.svelte";
export type LightSwitchProps = {
    variant?: "outline" | "ghost";
    size?: Size;
};
declare const LightSwitch: import("svelte").Component<LightSwitchProps, {}, "">;
type LightSwitch = ReturnType<typeof LightSwitch>;
export default LightSwitch;
