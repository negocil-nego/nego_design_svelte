<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import { cn } from "$lib/utils";
  import type { ListItemProps } from "../../../data/types";
  let {
    title,
    content,
    href,
    icon,
    class: className,
    ...restProps
  }: ListItemProps = $props();
</script>

{#snippet header()}
  <div class="leading-none font-medium">{title}</div>
{/snippet}

<li>
  <NavigationMenu.Link>
    {#snippet child()}
      <a
        {href}
        class={cn(
          "block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...restProps}
      >
        {#if icon}
          <div class="flex gap-1 items-center">
            <div>
              <i class={`${icon} size-8 md:size-10`}></i>
            </div>
            <div class="-mt-1">
              {@render header()}
            </div>
          </div>
        {:else}
          {@render header()}
        {/if}
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {content}
        </p>
      </a>
    {/snippet}
  </NavigationMenu.Link>
</li>
