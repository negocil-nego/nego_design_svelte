<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { NavigationMenuItemCardProps } from "../../../data/types";
  import DropdownMenuListItem from "./DropdownMenuListItem.svelte";

  let { label, header, cards: items }: NavigationMenuItemCardProps = $props();
</script>

{#snippet headerSnippet(label: string, description: string)}
  <div class="mt-4 mb-2 text-lg font-medium {header?.labelClass}">{label}</div>
  <p
    class="text-sm leading-tight {header?.descriptionClass ||
      'text-muted-foreground'}"
  >
    {description}
  </p>
{/snippet}

<DropdownMenu.Sub>
  <DropdownMenu.SubTrigger>{label}</DropdownMenu.SubTrigger>
  <DropdownMenu.SubContent>
    <ul class="grid gap-2 p-2 w-100 lg:w-125">
      {#if header}
        <li
          class="row-span-3 relative"
          style={header.imgUrl
            ? `background-image: url(${header.imgUrl}); background-repeat: no-repeat; background-size: cover; background-position: center; border-radius: 12px;`
            : ``}
        >
          <a
            href={header.href ?? "#"}
            class={`flex h-full w-full flex-col justify-end p-4 ${
              header.imgUrl
                ? `no-underline outline-hidden select-none`
                : `bg-linear-to-b from-muted/50 to-muted rounded-md`
            }`}
          >
            {@render headerSnippet(header.label, header.description)}
          </a>
        </li>
      {/if}
      {#if items && items.length > 0}
        {#each items as item, i (i)}
          <DropdownMenuListItem {...item} />
        {/each}
      {/if}
    </ul>
  </DropdownMenu.SubContent>
</DropdownMenu.Sub>
