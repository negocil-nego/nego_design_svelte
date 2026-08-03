<script lang="ts">
    /**
     * Card component with a title and content.
     * @component
     */
    import {
        InformationCircleIcon,
        UserIcon,
    } from "@hugeicons/core-free-icons";
    import { t } from "$lib/i18n";
    import type { CardMediaProps } from "../../types";
    import CardStarRating from "../../shared/CardStarRating.svelte";
    import CardTags from "../../shared/CardTags.svelte";
    import CardDescription from "../../shared/CardDescription.svelte";
    import CardThumbnailVideo from "../../shared/CardThumbnailVideo.svelte";
    import CardButton from "../../shared/CardButton.svelte";
    import CardFavorite from "../../shared/CardFavorite.svelte";
    let {
        id,
        tags,
        logo,
        title,
        content,
        className,
        imageUrl,
        videoUrl,
        //videoAction,
        startNumber,
        startMax = 5,
        isImageButtonMaximized = false,
        isVideoButtonMaximized = false,
        isTagBorderBottom = false,
        isFavorite = false,
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
    class="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-transparent rounded-lg p-5 space-y-1 md:space-y-3 {className}"
>
    <div class="flex flex-col justify-center items-center w-full relative">
        <div class="flex flex-col justify-start gap-2">
            <div class="flex justify-center items-center">
                {#if logo}
                    <img src={logo} alt={logo} class="w-12 h-12 rounded-lg" />
                {/if}
            </div>
            <div class="flex flex-col justify-center items-center">
                {#if title}
                    <div class="text-center font-bold text-lg">{title}</div>
                {/if}
                {#if startNumber}
                    <CardStarRating startNumber={startNumber} startMax={startMax} />
                {/if}
            </div>
        </div>
        <div class="flex justify-end items-center absolute top-0 right-0">
            <CardFavorite
                isFavorite={isFavorite}
                onFavoriteClick={() => onFavoriteClick!(id)}
            />
        </div>
        <CardTags
            className="my-4"
            tags={tags ?? []}
            {isTagBorderBottom}
        />
    </div>

    <div class="h-15 mb-8">
        <CardDescription {content} />
    </div>

    <CardThumbnailVideo
        {imageUrl}
        {videoUrl}
        {isImageButtonMaximized}
        {isVideoButtonMaximized}
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
                />
            {/if}
            {#if onButtonDetails}
                <CardButton
                    {id}
                    icon={InformationCircleIcon}
                    className={buttonDetailsClass}
                    text={$t("label.more.details")}
                    onClick={onButtonDetails}
                    isFlex={isShowButtonProfileAndDetails}
                />
            {/if}
        </div>
    {/if}
</article>
