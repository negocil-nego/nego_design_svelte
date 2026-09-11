<script lang="ts">
  /**
   * Card component with a title and content.
   * @component
   */
  import { InformationCircleIcon, UserIcon } from "@hugeicons/core-free-icons";
  import { t } from "$lib/i18n";
  import type { CardProfileProps } from "../../types";
  import CardStarRating from "../../shared/CardStarRating.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardButton from "../../shared/CardButton.svelte";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import CardThumbnailVideo from "../../shared/CardThumbnailVideo.svelte";
  import CardPhoneOrWhatsapp from "../../shared/CardPhoneOrWhatsapp.svelte";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";

  let {
    id,
    tags = [],
    title,
    content,
    className,
    startNumber,
    startMax = 5,
    isTagBorderBottom = true,
    isFavorite = false,
    buttonProfileClass,
    onEmailClick,
    onWhatsappClick,
    isLoading = false,
    onFavoriteClick,
    onButtonProfile,
    imageUrl,
    videoUrl,
    isImageButtonMaximized = false,
    isVideoButtonMaximized = false,
    isDescriptionLabel = false,
    isDescriptionIcon = false,
  }: CardProfileProps = $props();
</script>

<article
  class="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-transparent rounded-lg space-y-1 md:space-y-3 relative {className}"
>
  <div class="p-5">
    <div class="flex justify-start items-center w-full relative">
      <div class="flex justify-start gap-2">
        <div class="flex justify-center items-center">
          {#if isLoading}
            <Skeleton class="w-12 h-12 rounded-lg bg-gray-400 mt-0.5" />
          {:else if imageUrl}
            <img
              src={imageUrl}
              alt={imageUrl}
              class="w-12 h-12 rounded-lg"
              onerror={(e) =>
                ((e.target as HTMLImageElement).src = ImgPlaceholder)}
            />
          {/if}
        </div>
        <div class="flex flex-col justify-start items-start">
          {#if title}
            <div class="text-left font-bold">{title}</div>
          {:else if isLoading}
            <Skeleton class="w-20 h-4 rounded-lg bg-gray-400 mt-0.5" />
          {/if}

          {#if startNumber}
            <CardStarRating {startNumber} {startMax} {isLoading} />
          {:else if isLoading}
            <Skeleton class="w-20 h-4 rounded-lg bg-gray-300 mt-0.5" />
          {/if}
        </div>
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

    <div class="mb-4">
      <CardDescription
        {content}
        {isLoading}
        {isDescriptionLabel}
        {isDescriptionIcon}
        lines={tags.length == 0 ? 3 : 2}
      />
    </div>

    <CardTags
      className="my-2"
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
      <div class="flex justify-center items-center gap-2 mt-2 -mb-2 w-full">
        {#if onButtonProfile}
          <CardButton
            {id}
            icon={UserIcon}
            className={buttonProfileClass}
            text={$t("label.view.profile")}
            onClick={onButtonProfile}
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
