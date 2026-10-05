<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselProfileProps } from "../types";
  import CarouselHeaderSlot from "../../shared/ui/CarouselHeaderSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import CardProfile from "$lib/components/ui/card/core/profile/CardProfile.svelte";

  const {
    headerProps,
    slotProps,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
  }: CarouselProfileProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeaderSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  emptyTitle={$t("empty.profiles.title")}
  emptyDescription={$t("empty.profiles.description")}
>
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 5 : 10 }) as _, i (`loading-${i}`)}
      <Carousel.Item class="pl-5 w-75 basis-auto">
        <CardProfile
          id={i}
          {variant}
          {isLoading}
          {isDescriptionIcon}
          {isDescriptionLabel}
        />
      </Carousel.Item>
    {/each}
  {:else}
    {#each items as item, i (`profile-${item.id ?? i}`)}
      <Carousel.Item class="pl-2 w-75 basis-auto">
        <CardProfile
          {...item}
          {variant}
          {isDescriptionIcon}
          {isDescriptionLabel}
        />
      </Carousel.Item>
    {/each}
  {/if}
</CarouselHeaderSlot>

