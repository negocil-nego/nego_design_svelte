<script lang="ts" module>
  import type { ButtonSize } from "$lib/components/ui/button/button.svelte";

  export type ThemeSwitchProps = {
    class?: string;
  };
</script>

<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
  import { toggleMode } from "$lib/theme.svelte";

  let { class: className }: ThemeSwitchProps = $props();

  function handleClick() {
    toggleMode();
  }
</script>

<button
  onclick={handleClick}
  class="rounded-full bg-input h-10 w-10 flex items-center justify-center {className}"
>
  <HugeiconsIcon
    icon={Sun01Icon}
    class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
  />
  <HugeiconsIcon
    icon={Moon02Icon}
    class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
  />
  <span class="sr-only">Toggle theme</span>
</button>
