<script lang="ts">
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselProfileProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
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

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.profiles.title")}
      description={$t("empty.profiles.description")}
    />
  {:else}
    <CarouselSlot
      {...slotProps}
      containerClass="w-full"
      plugins={[autoplay({ delay: 4000, stopOnInteraction: true })]}
    >
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 5 : 10 }, ) as _, i (`loading-${i}`)}
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
            <CardProfile {...item} {variant} {isDescriptionIcon} {isDescriptionLabel} />
          </Carousel.Item>
        {/each}
      {/if}
    </CarouselSlot>
  {/if}
</CarouselHeader>
