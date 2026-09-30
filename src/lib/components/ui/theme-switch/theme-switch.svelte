<script lang="ts" module>
  export type ThemeSwitchProps = {
    class?: string;
  };
</script>

<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { toggleMode } from "$lib/theme.svelte";

  let { class: className }: ThemeSwitchProps = $props();
</script>

<button
  onclick={toggleMode}
  class={[
    "grid h-10 w-10 place-items-center rounded-full bg-input dark:bg-white",
    className,
  ]}
>
  <ImageHugeicons
    icon="Sun01Icon"
    class="col-start-1 row-start-1 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
  />
  <ImageHugeicons
    icon="Moon02Icon"
    class="col-start-1 row-start-1 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0 dark:text-black"
  />
  <span class="sr-only">Toggle theme</span>
</button>
