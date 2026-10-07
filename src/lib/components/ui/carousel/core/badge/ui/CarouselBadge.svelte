<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import ModalOptionsPanel from "$lib/components/ui/modal/core/ui/ModalOptionsPanel.svelte";
  import type { CarouselBadgeProps } from "$lib/components/ui/carousel/core/types.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";

  let {
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
    menuKey,
    selecteds = $bindable([] as string[]),
    onClick,
    isOptionAll = false,
    isExpand = false,
    expandTitle,
    onClickButtonAll,
  }: CarouselBadgeProps = $props();

  const borderB = $derived(
    isBorderInline ? `border-b-2 ${itemStyle == "BORDER" ? "pb-2" : ""}` : "",
  );
  const isInlineBorder = $derived(isBorderInline && itemStyle == "INLINE");
  const DEFAULT_IMG_OR_ICON_CLASS = "size-3 md:size-6";

  const responsive = useDevice();
  const skeletonCount = $derived(responsive.isMobile ? 2 : 8);

  // svelte-ignore state_referenced_locally
  let selectedValues = $state<string[]>(
    selecteds.length ? [...selecteds] : menuKey ? [menuKey] : [],
  );

  const sameValues = (a: string[], b: string[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  $effect(() => {
    if (!sameValues(selecteds, selectedValues)) {
      selectedValues = [...selecteds];
    }
  });

  function isSelected(item: (typeof items)[number]) {
    return item.value !== undefined && selectedValues.includes(String(item.value));
  }

  function toggleValue(key: string) {
    selectedValues = selectedValues.includes(key)
      ? selectedValues.filter((v) => v !== key)
      : [...selectedValues, key];
    selecteds = selectedValues;
  }

  function toggleItem(item: (typeof items)[number]) {
    const key = String(item.value);
    toggleValue(key);
    item.onClick?.(item.value);
    onClick?.(item.value);
  }

  const visibleValues = $derived(items.map((item) => String(item.value)));
  const isAllSelected = $derived(
    visibleValues.length > 0 &&
      visibleValues.every((v) => selectedValues.includes(v)),
  );

  function toggleAll() {
    selectedValues = isAllSelected ? [] : [...visibleValues];
    selecteds = selectedValues;
    onClickButtonAll?.([...selectedValues]);
  }

  let expandOpen = $state(false);
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
  <div
    class="relative flex items-center gap-2 {isBorderInline ? 'pb-2' : ''}"
  >
    {#if isOptionAll}
      <button
        type="button"
        class="shrink-0 cursor-pointer whitespace-nowrap rounded-full border-2 px-3 py-1 text-sm font-medium transition-all {isAllSelected
          ? activeClass
          : 'border-border bg-card hover:border-foreground/40'}"
        onclick={toggleAll}
      >
        {$t("label.all")}
      </button>
    {/if}

    <div class="relative min-w-0 flex-1 px-12">
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
            <Carousel.Item onclick={() => toggleItem(item)}>
              <div
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
              </div>
              {#if isSelected(item) && isInlineBorder}
                <div class="absolute pt-5 w-full h-2 bg-gradient"></div>
              {/if}
            </Carousel.Item>
          {/each}
        {/if}
      </Carousel.Content>
      {#if showButton}
        <Carousel.Previous
          class="bg-gradient text-white! cursor-pointer! {btnNavClass}"
          disabled={false}
        />
        <Carousel.Next
          class="bg-gradient text-white! cursor-pointer! {btnNavClass}"
          disabled={false}
        />
      {/if}
      </Carousel.Root>
    </div>

    {#if isExpand}
      <button
        type="button"
        class="shrink-0 cursor-pointer whitespace-nowrap rounded-full border-2 border-border bg-card px-3 py-1 text-sm font-medium transition-all hover:border-foreground/40"
        onclick={() => (expandOpen = true)}
      >
        {$t("label.more.options")}
      </button>
    {/if}
  </div>

  <ModalOptionsPanel
    bind:isOpen={expandOpen}
    title={expandTitle ?? $t("label.more.options")}
    options={items}
    selecteds={selectedValues}
    onToggle={toggleValue}
  />
{/if}
