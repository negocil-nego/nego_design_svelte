<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { NavMenuLinksProps } from "../data/nav-menu";

  type Props = {
    links: NavMenuLinksProps[];
    linkClass?: string;
    groupClass?: string;
    menuKey?: string;
    activeClass?: string;
    orientation?: "horizontal" | "vertical";
  };

  let {
    links,
    linkClass,
    groupClass,
    menuKey,
    activeClass = "bg-gradient text-white",
    orientation,
  }: Props = $props();
</script>

<ul
  class={`flex ${orientation === "vertical" ? "flex-col" : "items-center"}  gap-2 md:gap-5 lg:gap-15 ${groupClass}`}
>
  {#each links as item (item.label)}
    <li>
      <a
        class={`flex items-center gap-1 ${linkClass} ${item.key && menuKey === item.key ? activeClass : ""}`}
        href={item.url ?? item.href ?? "#"}
      >
        {#if item.icon}
          <HugeiconsIcon icon={item.icon} size={15} />
        {/if}
        {item.label}
      </a>
    </li>
  {/each}
</ul>
