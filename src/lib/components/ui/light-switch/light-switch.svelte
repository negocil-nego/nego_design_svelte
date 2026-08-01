<script lang="ts" module>
  import type { ButtonSize } from "$lib/components/ui/button/button.svelte";

  export type LightSwitchProps = {
    variant?: "outline" | "ghost";
    size?: ButtonSize;
  };
</script>

<script lang="ts">
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
  import { toggleMode } from "mode-watcher";
  import Button from "$lib/components/ui/button/button.svelte";

  let { variant = "outline", size = "default" }: LightSwitchProps = $props();

  const sizeMap = {
    default: "icon",
    xs: "icon-xs",
    sm: "icon-sm",
    lg: "icon-lg",
    icon: "icon",
    "icon-xs": "icon-xs",
    "icon-sm": "icon-sm",
    "icon-lg": "icon-lg",
  };
</script>

<Button
  onclick={toggleMode}
  {variant}
  size={sizeMap[size] as ButtonSize}
  class="relative rounded-full bg-input"
>
  <SunIcon
    class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
  />
  <MoonIcon
    class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
  />
  <span class="sr-only">Toggle theme</span>
</Button>