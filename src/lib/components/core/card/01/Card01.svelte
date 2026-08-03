<script lang="ts">
    /**
     * Card component with a title and content.
     * @component
     */
    import type { CardProps } from "../types";
    import * as StarRating from "$lib/components/ui/star-rating";
    import CardMedia from "../shared/CardMedia.svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import {
        HeartAddIcon,
        HeartRemoveIcon,
        InformationCircleIcon,
        UserIcon,
    } from "@hugeicons/core-free-icons";
    import { t } from "$lib/i18n";
    import CardTags from "../shared/CardTags.svelte";
    import CardDescription from "../shared/CardDescription.svelte";

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
        buttonProfileClass,
        buttonDetailsClass,
        onFavoriteClick,
        onButtonProfile,
        onButtonDetails,
    }: CardProps = $props();

    let isShowButtonProfileAndDetails = $derived(
        onButtonProfile && onButtonDetails,
    );
</script>

<article
    class="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-transparent rounded-lg p-5 space-y-1 md:space-y-3"
>
    <div class="flex justify-between items-center w-full mb-4">
        <div class="flex justify-start gap-2">
            <div class="flex justify-center items-center">
                {#if logo}
                    <img src={logo} alt={logo} class="w-12 h-12 rounded-lg" />
                {/if}
            </div>
            <div class="flex-col">
                {#if title}
                    <div class="text-center font-bold text-lg">{title}</div>
                {/if}
                {#if startNumber}
                    <StarRating.Root
                        max={startMax}
                        value={startNumber}
                        class="size-15 h-auto"
                    >
                        {#snippet children({ items })}
                            {#each items as item (item.index)}
                                <StarRating.Star
                                    {...item}
                                    class="py-0! my-0!"
                                />
                            {/each}
                        {/snippet}
                    </StarRating.Root>
                {/if}
            </div>
        </div>
        <div class="flex justify-end items-center">
            {#if isFavorite}
                <Button
                    class="w-8 h-8 rounded-full bg-[#ce2356]"
                    onclick={() => onFavoriteClick!(id)}
                >
                    <HugeiconsIcon icon={HeartRemoveIcon} />
                </Button>
            {:else}
                <Button
                    class="w-8 h-8 rounded-full bg-[#808080]"
                    onclick={() => onFavoriteClick!(id)}
                >
                    <HugeiconsIcon icon={HeartAddIcon} />
                </Button>
            {/if}
        </div>
    </div>

    <div class="h-15 my-2">
        <CardDescription content={content}/>
    </div>

    <CardTags
        className="my-6"
        tags={tags ?? []}
        isTagBorderBottom={isTagBorderBottom}
    />    
    
    <CardMedia
        {imageUrl}
        {videoUrl}
        {isImageButtonMaximized}
        {isVideoButtonMaximized}
    />

    {#if onButtonProfile || onButtonDetails}
        <div class="flex justify-center items-center gap-2 mt-4 w-full">
            {#if onButtonProfile}
                <Button
                    class="{isShowButtonProfileAndDetails
                        ? 'flex-1'
                        : ''} {buttonProfileClass}"
                    onclick={() => onButtonProfile(id)}
                >
                    <HugeiconsIcon icon={UserIcon} />
                    <span>{$t("label.view.profile")}</span>
                </Button>
            {/if}
            {#if onButtonDetails}
                <Button
                    class="{isShowButtonProfileAndDetails
                        ? 'flex-1'
                        : ''} {buttonDetailsClass}"
                    onclick={() => onButtonDetails(id)}
                >
                    <HugeiconsIcon icon={InformationCircleIcon} />
                    <span>{$t("label.more.details")}</span>
                </Button>
            {/if}
        </div>
    {/if}
</article>
