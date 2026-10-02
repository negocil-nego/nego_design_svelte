<script lang="ts">
  import CardProfile from "$lib/components/ui/card/core/profile/CardProfile.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridHeader from "../../shared/ui/GridHeader.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { GridProfileProps } from "../types";

  const {
    headerProps,
    gridClass,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onEmailClick,
    onWhatsappClick,
    onButtonProfile,
    onFavoriteClick,
  }: GridProfileProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<GridHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.profiles.title")}
      description={$t("empty.profiles.description")}
    />
  {:else}
    <GridSlot class={gridClass}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <CardProfile id={i} {variant} isLoading />
        {/each}
      {:else}
        {#each items as item, i (`profile-${item.id ?? i}`)}
          <CardProfile
            {...item}
            {variant}
            {isDescriptionIcon}
            {isDescriptionLabel}
            {onEmailClick}
            {onWhatsappClick}
            {onButtonProfile}
            {onFavoriteClick}
          />
        {/each}
      {/if}
    </GridSlot>
  {/if}
</GridHeader>
