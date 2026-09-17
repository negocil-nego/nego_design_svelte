<script lang="ts" module>
  import type { ButtonSize } from "$lib/components/ui/button/button.svelte";

  export type ThemeSwitchProps = {
    variant?: "outline" | "ghost";
    size?: ButtonSize;
  };
</script>

<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Sun01Icon, Moon01Icon } from "@hugeicons/core-free-icons";
  import { toggleMode } from "$lib/theme.svelte";
  import Button from "$lib/components/ui/button/button.svelte";

  let { variant = "outline", size = "default" }: ThemeSwitchProps = $props();

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

  function handleClick() {
    toggleMode();
  }
</script>

<Button
  onclick={handleClick}
  {variant}
  size={sizeMap[size] as ButtonSize}
  class="relative rounded-full bg-input"
>
  <HugeiconsIcon
    icon={Sun01Icon}
    class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
  />
  <HugeiconsIcon
    icon={Moon01Icon}
    class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
