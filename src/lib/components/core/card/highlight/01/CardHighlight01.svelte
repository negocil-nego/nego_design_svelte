<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import CardTags from "../../shared/CardTags.svelte";

  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardHighlightProps } from "../../types";
  import CardButton from "../../shared/CardButton.svelte";
  import CardLogo from "../../shared/CardLogo.svelte";
  import { t } from "$lib/i18n";

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
    buttonClass,
    isDescriptionIcon,
    isDescriptionLabel,
    isExpandButton = false,
    onClickBtn,
    onClickFavorite,
  }: CardHighlightProps = $props();
</script>

<article
  class="flex gap-1 bg-white dark:bg-background p-3 rounded-lg shadow border"
>
  <aside class="relative rounded-lg border h-50">
    <div class="absolute top-3 left-1 z-2 flex gap-1 w-50">
      <CardLogo {isLoading} {logo} />
    </div>

    <div class="absolute top-3 right-1 z-2">
      <CardFavorite
        {id}
        {isFavorite}
        {isLoading}
        onFavoriteClick={() => onClickFavorite?.(id)}
      />
    </div>

    {#if isLoading}
      <Skeleton class="rounded-lg w-50 h-full object-cover object-center" />
    {:else if imageUrl}
      <img
        src={imageUrl}
        alt={imageUrl}
        class="rounded-lg w-50 h-full object-cover object-center"
      />
    {:else}
      <img
        src={ImgPlaceholder}
        alt={imageUrl}
        class="rounded-lg w-50 h-full object-cover object-center"
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
      <CardDescription
        {content}
        {isLoading}
        {isDescriptionIcon}
        {isDescriptionLabel}
      />
    </div>

    {#if tags && tags.length > 0}
      <div class="w-full mb-2">
        <CardTags {tags} />
      </div>
    {/if}

    <CardButton
      {id}
      {isLoading}
      className={buttonClass}
      isFlex={isExpandButton}
      onClick={() => onClickBtn!(id)}
      text={buttonText || $t("label.buy")}
    />
  </div>
</article>
