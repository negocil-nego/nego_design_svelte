<script lang="ts">
  /**
   * Card component with a title and content.
   * @component
   */
  import { InformationCircleIcon, UserIcon } from "@hugeicons/core-free-icons";
  import { t } from "$lib/i18n";
  import type { CardMediaProps } from "../../types";
  import CardStarRating from "../../shared/CardStarRating.svelte";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  import CardThumbnailVideo from "../../shared/CardThumbnailVideo.svelte";
  import CardButton from "../../shared/CardButton.svelte";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import CardLogo from "../../shared/CardLogo.svelte";

  let {
    id,
    tags,
    logo,
    title,
    content,
    imageUrl,
    videoUrl,
    //videoAction,
    startNumber,
    startMax = 5,
    isImageButtonMaximized = false,
    isVideoButtonMaximized = false,
    isTagBorderBottom = false,
    isFavorite = false,
    isLoading = false,
    buttonProfileClass,
    buttonDetailsClass,
    onFavoriteClick,
    onButtonProfile,
    onButtonDetails,
  }: CardMediaProps = $props();

  let isShowButtonProfileAndDetails = $derived(
    onButtonProfile != null && onButtonDetails != null,
  );
</script>

<article
  class="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-transparent rounded-lg p-5 space-y-1 md:space-y-3"
>
  <div class="flex justify-between items-center w-full mb-4">
    <div class="flex justify-start gap-2">
      <div class="flex justify-center items-center">
        <CardLogo {logo} {isLoading} />
      </div>
      <div class="flex-col">
        {#if title}
          <div class="text-center font-bold text-lg">{title}</div>
        {:else if isLoading}
          <Skeleton class="w-40 h-5 rounded-lg bg-gray-400 mb-0.5" />
        {/if}

        {#if startNumber}
          <CardStarRating {startNumber} {startMax} {isLoading} />
        {:else if isLoading}
          <Skeleton class="w-20 h-4 rounded-lg bg-gray-300 mt-0.5" />
        {/if}
      </div>
    </div>
    <div class="flex justify-end items-center">
      <CardFavorite
        {id}
        {isFavorite}
        {isLoading}
        onFavoriteClick={() => onFavoriteClick!(id)}
      />
    </div>
  </div>

  <div class="h-15 my-2">
    <CardDescription {content} {isLoading} />
  </div>

  <CardTags
    className="my-6"
    tags={tags ?? []}
    {isTagBorderBottom}
    {isLoading}
  />

  <CardThumbnailVideo
    {imageUrl}
    {videoUrl}
    {isImageButtonMaximized}
    {isVideoButtonMaximized}
    {isLoading}
  />

  {#if onButtonProfile || onButtonDetails}
    <div class="flex justify-center items-center gap-2 mt-4 w-full">
      {#if onButtonProfile}
        <CardButton
          {id}
          icon={UserIcon}
          className={buttonProfileClass}
          text={$t("label.view.profile")}
          onClick={onButtonProfile}
          isFlex={isShowButtonProfileAndDetails}
          {isLoading}
        />
      {:else if isLoading}
        <Skeleton class="w-20 h-4 rounded-lg bg-gray-400 mt-0.5" />
      {/if}
      {#if onButtonDetails}
        <CardButton
          {id}
          icon={InformationCircleIcon}
          className={buttonDetailsClass}
          text={$t("label.more.details")}
          onClick={onButtonDetails}
          isFlex={isShowButtonProfileAndDetails}
          {isLoading}
        />
      {:else if isLoading}
        <Skeleton class="w-20 h-4 rounded-lg bg-gray-400 mt-0.5" />
      {/if}
    </div>
  {/if}
</article>
