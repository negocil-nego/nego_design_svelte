<script lang="ts">
  import { defaultIcon, icons } from "./icons";
  import type { HugeiconsIconName } from "./icons";
  import { cn } from "$lib/utils.js";

  let {
    icon,
    class: className = "",
    ...rest
  }: {
    icon: HugeiconsIconName;
    class?: string;
    [key: string]: unknown;
  } = $props();

  const iconClass = $derived(icons[icon] ?? icons[defaultIcon]);

  const hasSizeClass = $derived(
    /(?:^|\s)(?:[\w[\].-]+:)*size-/.test(className),
  );
</script>

<i
  class={cn(iconClass, hasSizeClass ? className : cn("size-5", className))}
  {...rest}
></i>
