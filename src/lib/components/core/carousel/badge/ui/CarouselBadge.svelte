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
    activeClass = "bg-gradient text-white rounded-full px-3",
    orientation = "horizontal",
    itemStyle = "DEFAULT",
    isBorderInline = false,
    showButton = true,
    isLoading = false,
    btnNavClass,
    itemClass,
    onClick,
  }: CarouselBadgeProps = $props();

  const TOP_NAV = $derived(isBorderInline ? "top-5.5" : "top-7.5");
  const borderB = $derived(
    isBorderInline ? `border-b-2 ${itemStyle == "BORDER" ? "pb-2" : ""}` : "",
  );
  const isInlineBorder = $derived(isBorderInline && itemStyle == "INLINE");
  const DEFAULT_IMG_OR_ICON_CLASS = "size-3 md:size-6";

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

{#if items.length > 0}
  <Carousel.Root>
    <Carousel.Content class={borderB}>
      {#if isLoading}
        <div class="flex items-center justify-between w-full gap-1 md:gap-2">
          {#each Array.from( { length: skeletonCount }, ) as _, i (`skeleton-${i}`)}
            <Skeleton class="h-4 w-25 bg-gray-50/90" />
          {/each}
        </div>
      {:else}
        {#each items as item, i (`badge-${i}-${item.value ?? item.label ?? i}`)}
          <Carousel.Item
            class="basis-auto relative"
            onclick={() => selectItem(item)}
          >
            <div
              class="flex gap-1 mx-2 p-1 justify-center items-center cursor-pointer relative hover:text-lg hover:font-bold
            {isSelected(item)
                ? isInlineBorder
                  ? 'text-gradient font-bold'
                  : activeClass
                : ''} 
            {itemStyle == 'BORDER' ? 'border-2 rounded-full min-w-25 px-1' : ''}
            {orientation === 'horizontal' ? 'flex-row' : 'flex-col'}
            {isInlineBorder ? 'pb-3' : ''}
            {itemClass} 
          "
            >
              {@render itemVisual(item)}
              <div class={labelClass}>{item.label}</div>
            </div>
            {#if isSelected(item) && isInlineBorder}
              <div class="absolute pt-5 w-full h-2 bg-gradient"></div>
            {/if}
          </Carousel.Item>
        {/each}
      {/if}
    </Carousel.Content>
    {#if showButton}
      {@const navClass =
        "absolute -translate-y-1/2 z-50 bg-blue-700! text-white! cursor-pointer"}
      <Carousel.Previous class="-left-8 {navClass} {TOP_NAV} {btnNavClass}" />
      <Carousel.Next class="-right-8 {navClass} {TOP_NAV} {btnNavClass}" />
    {/if}
  </Carousel.Root>
{/if}
