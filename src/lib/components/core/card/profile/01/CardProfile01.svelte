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
    import type { CardProfileProps } from "../../types";
    import CardStarRating from "../../shared/CardStarRating.svelte";
    import CardDescription from "../../shared/CardDescription.svelte";
    import CardTags from "../../shared/CardTags.svelte";
    import CardButton from "../../shared/CardButton.svelte";
    import CardFavorite from "../../shared/CardFavorite.svelte";

    let {
        id,
        tags,
        logo,
        title,
        content,
        startNumber,
        startMax = 5,
        isTagBorderBottom = true,
        isFavorite = false,
        buttonProfileClass,
        buttonDetailsClass,
        onFavoriteClick,
        onButtonProfile,
        onButtonDetails,
    }: CardProfileProps = $props();

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
                {#if logo}
                    <img src={logo} alt={logo} class="w-12 h-12 rounded-lg" />
                {/if}
            </div>
            <div class="flex-col">
                {#if title}
                    <div class="text-center font-bold text-lg">{title}</div>
                {/if}
                {#if startNumber}
                    <CardStarRating {startNumber} {startMax} />
                {/if}
            </div>
        </div>
        <div class="flex justify-end items-center">
            <CardFavorite
                {id}
                {isFavorite}
                onFavoriteClick={() => onFavoriteClick!(id)}
            />
        </div>
    </div>

    <div class="h-15 my-2">
        <CardDescription {content} />
    </div>

    <CardTags className="my-6" tags={tags ?? []} {isTagBorderBottom} />

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
