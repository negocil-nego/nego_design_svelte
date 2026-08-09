import { onMount } from "svelte";

const MOBILE_BREAKPOINT = 768;

export function useDevice() {
    let isMobile = $state(false);

    onMount(() => {
        const update = () => {
            isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        };

        update();

        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    });

    return {
        get isMobile() {
            return isMobile;
        },
    };
}