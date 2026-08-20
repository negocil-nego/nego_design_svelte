<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import type { NavigationMenuItemCardProps } from "./types";
  import MenuListItem from "./MenuListItem.svelte";

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

<NavigationMenu.Item>
  <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
  <NavigationMenu.Content>
    <ul class="grid gap-2 p-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
      {#if header}
        <li
          class="row-span-3 relative"
          style={header.imgUrl
            ? `background-image: url(${header.imgUrl}); background-repeat: no-repeat; background-size: cover; background-position: center; border-radius: 12px;`
            : ``}
        >
          <NavigationMenu.Link
            class={`flex h-full w-full flex-col justify-end p-4 md:p-6 ${
              header.imgUrl
                ? `no-underline outline-hidden select-none`
                : `bg-linear-to-b from-muted/50 to-muted rounded-md focus:shadow-md`
            }`}
          >
            {#snippet child({ props })}
              {#if header.imgUrl}
                <a
                  {...props}
                  href={header.href ?? "#"}
                  class="bg-transparent absolute left-2 bottom-2"
                >
                  {@render headerSnippet(header.label, header.description)}
                </a>
              {:else}
                <a {...props} href={header.href ?? "#"}>
                  {@render headerSnippet(header.label, header.description)}
                </a>
              {/if}
            {/snippet}
          </NavigationMenu.Link>
        </li>
      {/if}
      {#if items && items.length > 0}
        {#each items as item, i (i)}
          <MenuListItem {...item} />
        {/each}
      {/if}
    </ul>
  </NavigationMenu.Content>
</NavigationMenu.Item>
