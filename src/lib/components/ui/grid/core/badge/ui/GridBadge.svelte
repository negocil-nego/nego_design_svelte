<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { GridBadgeProps } from "../types";

  const {
    items = [],
    imageClass,
    iconClass,
    labelClass,
    activeClass = "bg-gradient text-white rounded-full px-3",
    orientation = "horizontal",
    itemStyle = "DEFAULT",
    isBorderInline = false,
    gridClass,
    isLoading = false,
    itemClass,
    menuKey,
    onClick,
  }: GridBadgeProps = $props();

  const borderB = $derived(
    isBorderInline ? `border-b-2 ${itemStyle == "BORDER" ? "pb-2" : ""}` : "",
  );
  const isInlineBorder = $derived(isBorderInline && itemStyle == "INLINE");
  const DEFAULT_IMG_OR_ICON_CLASS = "size-3 md:size-6";

  const responsive = useDevice();
  const skeletonCount = $derived(responsive.isMobile ? 2 : 8);

  // svelte-ignore state_referenced_locally
  let selectedValue = $state<string | undefined>(menuKey ?? "");

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
  {#if item.country}
    <ImageFlag
      country={item.country}
      alt={item.label}
      class={imageClass || DEFAULT_IMG_OR_ICON_CLASS}
    />
  {:else if item.image}
    <img
      src={item.image}
      alt={item.label}
      class={imageClass || DEFAULT_IMG_OR_ICON_CLASS}
    />
  {:else if typeof item.icon === "string"}
    <i class={`${item.icon} ${iconClass || DEFAULT_IMG_OR_ICON_CLASS}`}></i>
  {:else if item.icon}
    <ImageHugeicons
      icon={item.icon}
      class={iconClass || DEFAULT_IMG_OR_ICON_CLASS}
    />
  {/if}
{/snippet}

{#if items.length > 0}
  <div class="relative {isBorderInline ? 'pb-2' : ''}">
    <GridSlot class="{borderB} {gridClass}">
      {#if isLoading}
        {#each Array.from( { length: skeletonCount }, ) as _, i (`skeleton-${i}`)}
          <Skeleton class="h-4 w-25 bg-gray-50/90" />
        {/each}
      {:else}
        {#each items as item, i (`badge-${i}-${item.value ?? item.label ?? i}`)}
          <div class="relative flex justify-center">
            <button
              type="button"
              onclick={() => selectItem(item)}
              class="flex gap-1 mx-2 p-1 justify-center w-min shrink-0 items-center cursor-pointer relative hover:text-lg hover:font-bold
              {isSelected(item)
                  ? isInlineBorder
                    ? 'text-gradient font-bold'
                    : activeClass
                  : ''}
              {itemStyle == 'BORDER'
                  ? 'border-2 rounded-full min-w-25 px-1'
                  : ''}
              {orientation === 'horizontal' ? 'flex-row' : 'flex-col'}
              {isInlineBorder ? 'pb-3' : ''}
              {itemClass}
            "
            >
              {@render itemVisual(item)}
              <div class="whitespace-nowrap {labelClass}">{item.label}</div>
            </button>
            {#if isSelected(item) && isInlineBorder}
              <div class="absolute pt-5 w-full h-2 bg-gradient"></div>
            {/if}
          </div>
        {/each}
      {/if}
    </GridSlot>
  </div>
{/if}
