<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardHighlightProps } from "../../types";

  let {
    id,
    logo,
    tags,
    title,
    content,
    imageUrl,
    isLoading = false,
    isFavorite = false,
    buttonText,
    onClickBtn,
    onClickFavorite,
  }: CardHighlightProps = $props();
</script>

<article
  class="flex gap-1 bg-white dark:bg-background p-3 rounded-lg shadow border"
>
  <aside class="relative rounded-lg border h-50">
    <div class="left-1 z-2 flex gap-1 w-50">
      {#if isLoading}
        <Skeleton class="w-hull h-full rounded-lg" />
      {:else if logo}
        <img src={logo} alt={title} class="rounded-lg" />
      {/if}
    </div>

    <div class="absolute top-3 right-1">
      <CardFavorite
        {id}
        {isFavorite}
        {isLoading}
        onFavoriteClick={() => onClickFavorite?.(id)}
      />
    </div>

    {#if isLoading}
      <Skeleton class="rounded-lg w-full h-full object-cover object-center" />
    {:else if imageUrl}
      <img
        src={imageUrl}
        alt={imageUrl}
        class="rounded-lg w-full h-full object-cover object-center"
      />
    {/if}
    <div class="absolute inset-0 bg-black/5 rounded-sm h-full w-full"></div>
  </aside>
  <div class="px-5">
    <div class="p-2 rounded-md">
      {#if isLoading}
        <Skeleton class="h-4 w-30 rounded-lg" />
      {:else if title}
        <div class="font-semibold">{title}</div>
      {/if}
    </div>

    <div class="w-75">
      <CardDescription {content} {isLoading} />
    </div>

    <CardTags {tags} {isLoading} />

    {#if isLoading}
      <Skeleton class="h-10 w-full rounded-md mt-2 md:mt-3" />
    {:else}
      <Button onclick={() => onClickBtn!(id)} class="mt-2 md:mt-3 md:min-w-32">
        {buttonText || $t("label.buy")}
      </Button>
    {/if}
  </div>
</article>
