<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  import ImgPlaceholderCompany from "$lib/assets/placeholder-company.png";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardHighlightProps } from "../../types";
  import CardButton from "../../shared/CardButton.svelte";
  import CardLogo from "../../shared/CardLogo.svelte";

  let {
    id,
    logo,
    tags,
    title,
    content,
    imageUrl,
    isLoading = false,
    isFavorite = false,
    isDescriptionIcon,
    isDescriptionLabel,
    isExpandButton = false,
    buttonText,
    buttonClass,
    onClickBtn,
    onClickFavorite,
  }: CardHighlightProps = $props();
</script>

<article
  class="flex flex-col gap-1 bg-white dark:bg-background p-3 rounded-lg shadow border"
>
  <aside class="relative rounded-lg border h-36">
    <div class="absolute top-3 left-1 z-2 flex gap-1">
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
      <Skeleton class="rounded-lg w-full h-full object-cover object-center" />
    {:else if imageUrl}
      <img
        src={imageUrl}
        alt={imageUrl}
        class="rounded-lg w-full h-full object-cover object-center"
        onerror={(e) => ((e.target as HTMLImageElement).src = ImgPlaceholder)}
      />
    {/if}
    <div class="absolute inset-0 bg-black/5 rounded-sm h-full w-full"></div>
  </aside>
  <div class="px-2 w-55">
    <div class="rounded-md">
      {#if isLoading}
        <Skeleton class="h-4 w-30 rounded-lg" />
      {:else if title}
        <div class="font-semibold my-2">{title}</div>
      {/if}
    </div>

    <div class="my-2">
      <CardDescription
        {content}
        {isLoading}
        {isDescriptionIcon}
        {isDescriptionLabel}
      />
    </div>

    {#if tags && tags.length > 0}
      <div class="my-2">
        <CardTags {tags} {isLoading} />
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
