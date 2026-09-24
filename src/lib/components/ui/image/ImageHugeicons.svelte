<script lang="ts">
  import { hugeiconsIcons } from "./hugeicons-icons";
  import type { HugeiconsIconName } from "./hugeicons-icons";
  import { cn } from "$lib/utils.js";

  let {
    icon,
    class: className = "",
    alt,
    width = 30,
    height = 30,
    ...rest
  }: {
    icon: HugeiconsIconName | string;
    class?: string;
    alt?: string;
    width?: number;
    height?: number;
    [key: string]: unknown;
  } = $props();

  const hasDarkWhite = $derived(
    className?.includes("dark:text-white") ||
      className?.includes("dark:text-white!"),
  );

  const hasWhite = $derived(
    className?.includes("text-white") || className?.includes("text-white!"),
  );

  const imgClasses = $derived(
    cn(
      className
        ?.replace(/dark:text-\S+/g, "")
        .replace(/text-\S+/g, "")
        .trim(),
    ),
  );

  const iconSrc = $derived(
    hugeiconsIcons[icon as HugeiconsIconName] ?? hugeiconsIcons["alert-circle"],
  );
</script>

{#if iconSrc}
  <img
    src={iconSrc}
    alt={alt ?? icon}
    class={cn(
      imgClasses,
      hasDarkWhite && "hugeicons-dark-white",
      hasWhite && "hugeicons-white",
    )}
    draggable={false}
    {width}
    {height}
    {...rest}
  />
{/if}

<style>
  :global(html.dark) .hugeicons-dark-white {
    filter: brightness(0) invert(1) !important;
  }

  :global(.hugeicons-white) {
    filter: brightness(1) invert(0) !important;
  }
</style>
