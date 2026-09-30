<script lang="ts">
  import IconRender from "$lib/components/ui/image/IconRender.svelte";
  import type { MenuLinksProps } from "./type";
  import { cn } from "$lib/utils.js";

  let {
    links,
    linkClass,
    groupClass,
    iconClass,
    menuKey,
    activeClass = "bg-gradient text-white",
    orientation,
  }: MenuLinksProps = $props();
</script>

<ul
  class={`flex ${orientation === "vertical" ? "flex-col" : "items-center"}  gap-2 md:gap-5 lg:gap-15 ${groupClass}`}
>
  {#each links as item (item.label)}
    <li>
      <a
        class={`flex justify-center items-center gap-1 ${linkClass} ${item.key && menuKey === item.key ? activeClass : ""}`}
        href={item.url ?? item.href ?? "#"}
      >
        {#if item.icon}
          <IconRender icon={item.icon} class={cn("-mt-1", iconClass)} />
        {/if}
        {item.label}
      </a>
    </li>
  {/each}
</ul>
