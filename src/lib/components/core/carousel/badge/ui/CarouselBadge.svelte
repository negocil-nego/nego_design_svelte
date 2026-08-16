<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselBadgeProps } from "$lib/components/core/carousel/types.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";

  const {
    items = [],
    imageClass,
    iconClass,
    labelClass,
    activeClass = "bg-gradient text-white rounded-sm px-3",
    isLoading = false,
    orientation = "horizontal",
    itemClass,
    onClick,
  }: CarouselBadgeProps = $props();

  const DEFAULT_IMG_OR_ICON_CLASS = "size-3";
  const NAV_BUTTON_CLASS =
    "absolute top-1/2 -translate-y-1/2 mt-0.5 md:mr-0 z-50 bg-blue-700! text-white! cursor-pointer!";

  const responsive = useDevice();
  const skeletonCount = $derived(responsive.isMobile ? 2 : 8);

  let selectedValue = $state<unknown>(undefined);

  function isSelected(item: (typeof items)[number]) {
    return item.value !== undefined && item.value === selectedValue;
  }

  function selectItem(item: (typeof items)[number]) {
    selectedValue = item.value;
    item.onClick?.(item.value);
    onClick?.(item.value);
  }
</script>

{#snippet itemVisual(item: (typeof items)[number])}
  {#if item.image}
    <img
      src={item.image}
      alt={item.label}
      class={imageClass || DEFAULT_IMG_OR_ICON_CLASS}
    />
  {:else if typeof item.icon === "string"}
    <i class={`${item.icon} ${iconClass || DEFAULT_IMG_OR_ICON_CLASS}`}></i>
  {:else if item.icon}
    <HugeiconsIcon
      icon={item.icon}
      class={iconClass || DEFAULT_IMG_OR_ICON_CLASS}
    />
  {/if}
{/snippet}

<Carousel.Root>
  <Carousel.Content>
    {#if isLoading}
      <div class="flex items-center justify-between w-full gap-1 md:gap-2">
        {#each Array.from({ length: skeletonCount }) as _, i (`skeleton-${i}`)}
          <Skeleton class="h-4 w-25 bg-gray-900/90" />
        {/each}
      </div>
    {:else}
      {#each items as item, i (`badge-${i}-${item.value ?? item.label ?? i}`)}
        <Carousel.Item class="basis-auto" onclick={() => selectItem(item)}>
          <div
            class="flex gap-1 mx-2 p-0.5 justify-center items-center cursor-pointer
            {orientation === 'horizontal' ? 'flex-row' : 'flex-col'}
            {isSelected(item) ? activeClass : ''} 
            {itemClass} 
          "
          >
            {@render itemVisual(item)}
            <div class={labelClass}>{item.label}</div>
          </div>
        </Carousel.Item>
      {/each}
    {/if}
  </Carousel.Content>
  <Carousel.Previous class="-left-8 {NAV_BUTTON_CLASS}" />
  <Carousel.Next class="-right-8 {NAV_BUTTON_CLASS}" />
</Carousel.Root>
