<script lang="ts">
  import IconRender from "$lib/components/ui/image/IconRender.svelte";
  import { cn } from "$lib/utils";
  import type { ListItemProps } from "../../data/types";
  let {
    title,
    content,
    href,
    icon,
    image,
    textClass,
    subTextClass,
    class: className,
    isLoading = false,
    ...restProps
  }: ListItemProps & {
    isLoading?: boolean;
    textClass?: string;
    subTextClass?: string;
  } = $props();

  const hasImage = $derived(!!image);
</script>

<li>
  <a
    {href}
    class={cn(
      "block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...restProps}
  >
    {#if icon || hasImage}
      <div class="flex flex-col gap-2 items-center">
        {#if hasImage}
          <div
            class="relative w-full aspect-video overflow-hidden rounded-md bg-muted"
          >
            <img
              src={image}
              alt={title}
              class="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/30"></div>
            {#if icon}
              <div class="absolute inset-0 grid place-items-center text-white">
                <IconRender {icon} class="size-6 md:size-8" />
              </div>
            {/if}
          </div>
        {:else if icon}
          <IconRender {icon} class="size-8 md:size-10 shrink-0" />
        {/if}
        <div class="min-w-0 -mt-1">
          <div class={cn("leading-none font-medium")}>{title}</div>
        </div>
      </div>
    {:else}
      <div class={cn("leading-none font-medium")}>{title}</div>
    {/if}
    {#if content}
      <p
        class={cn(
          "line-clamp-2 text-sm leading-snug text-muted-foreground",
          subTextClass,
        )}
      >
        {content}
      </p>
    {/if}
  </a>
</li>
