<script lang="ts">
  /**
   * Card component with a title and content.
   * @component
   */
  import { UserIcon } from "@hugeicons/core-free-icons";
  import { t } from "$lib/i18n";
  import type { CardProfileProps } from "../../types";
  import CardStarRating from "../../shared/CardStarRating.svelte";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  import CardButton from "../../shared/CardButton.svelte";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import CardPhoneOrWhatsapp from "../../shared/CardPhoneOrWhatsapp.svelte";
  import CardThumbnailVideo from "../../shared/CardThumbnailVideo.svelte";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";

  let {
    id,
    tags = [],
    title,
    content,
    startNumber,
    startMax = 5,
    isTagBorderBottom = true,
    isFavorite = false,
    buttonProfileClass,
    isLoading = false,
    imageUrl,
    videoUrl,
    isImageButtonMaximized = false,
    isVideoButtonMaximized = false,
    isDescriptionIcon = false,
    isDescriptionLabel = false,
    onEmailClick,
    onWhatsappClick,
    onFavoriteClick,
    onButtonProfile,
  }: CardProfileProps = $props();
</script>

<article
  class="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-transparent rounded-lg relative"
>
  <div class="p-5">
    <div class="flex justify-between items-center w-full border-b-2">
      <div class="w-full flex flex-col justify-center items-center relative">
        <div>
          {#if isLoading}
            <Skeleton
              class="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full bg-gray-300"
            />
          {:else if imageUrl}
            <img
              src={imageUrl}
              alt={imageUrl}
              class="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"
              onerror={(e) =>
                ((e.target as HTMLImageElement).src = ImgPlaceholder)}
            />
          {/if}
        </div>
        <div>
          {#if title}
            <div class="text-center font-bold">{title}</div>
          {:else if isLoading}
            <Skeleton class="w-40 h-5 rounded-lg bg-gray-400 mb-0.5" />
          {/if}
        </div>
        <div>
          {#if startNumber}
            <CardStarRating {startNumber} {startMax} {isLoading} />
          {:else if isLoading}
            <Skeleton class="w-20 h-4 rounded-lg bg-gray-300 mt-0.5" />
          {/if}
        </div>
      </div>

      <div class="flex justify-end items-center absolute top-1 right-1">
        <CardFavorite
          {id}
          {isFavorite}
          onFavoriteClick={() => onFavoriteClick!(id)}
          {isLoading}
        />
      </div>
    </div>

    <div class="my-2">
      <CardDescription
        {content}
        {isLoading}
        {isDescriptionIcon}
        {isDescriptionLabel}
      />
    </div>

    <CardTags
      className="mb-2"
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
      class="h-32.5 md:h-36 lg:h-44"
    />

    {#if onButtonProfile}
      <div class="flex justify-center items-center gap-2 w-full mt-3 -mb-1">
        {#if onButtonProfile}
          <CardButton
            {id}
            icon={UserIcon}
            className={buttonProfileClass}
            text={$t("label.view.profile")}
            onClick={onButtonProfile}
            {isLoading}
            isFlex
          />
        {:else if isLoading}
          <Skeleton class="w-20 h-4 rounded-lg bg-gray-400 mt-0.5" />
        {/if}
      </div>
    {/if}
  </div>
  <CardPhoneOrWhatsapp {id} {onEmailClick} {onWhatsappClick} />
</article>
