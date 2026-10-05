<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import CarouselHeader from "./CarouselHeader.svelte";
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import CarouselHeaderSlotMobile from "./CarouselHeaderSlotMobile.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import type { CarouselHeaderSlotProps } from "../../types";
  import { t } from "$lib/i18n";

  const {
    headerProps,
    slotProps,
    isEmpty = false,
    isLoading = false,
    emptyTitle,
    emptyDescription,
    emptyIcon,
    plugins = [autoplay({ delay: 4000, stopOnInteraction: true })],
    isScrollbar = false,
    children,
    emptySnippet,
  }: CarouselHeaderSlotProps = $props();

  const responsive = useDevice();
</script>

{#if responsive.isMobile}
  <CarouselHeaderSlotMobile
    {headerProps}
    {slotProps}
    {isEmpty}
    {isLoading}
    {emptyTitle}
    {emptyDescription}
    {emptyIcon}
    {plugins}
    {isScrollbar}
    {emptySnippet}
  >
    {@render children?.()}
  </CarouselHeaderSlotMobile>
{:else}
  <CarouselHeader {...headerProps}>
    {#if isEmpty}
      {#if emptySnippet}
        {@render emptySnippet()}
      {:else}
        <NotFoundEmpty
          title={emptyTitle ?? $t("empty.title")}
          description={emptyDescription ?? $t("empty.description")}
          icon={emptyIcon}
        />
      {/if}
    {:else}
      <CarouselSlot
        containerClass="w-full"
        {plugins}
        {isScrollbar}
        {...slotProps}
      >
        {@render children?.()}
      </CarouselSlot>
    {/if}
  </CarouselHeader>
{/if}
