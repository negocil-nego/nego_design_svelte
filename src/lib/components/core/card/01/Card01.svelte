<script lang="ts">
    /**
     * Card component with a title and content.
     * @component
     */
    import type { CardProps } from "../types";
    import * as StarRating from "$lib/components/ui/star-rating";
    import CardMedia from "../shared/CardMedia.svelte";
    import TruncatableText from "../shared/TruncatableText.svelte";

    let {
        logo,
        title,
        content,
        imageUrl,
        videoUrl,
        videoAction,
        startNumber,
        startMax = 5,
        isImageButtonMaximized = false,
        isVideoButtonMaximized = false,
    }: CardProps = $props();
</script>

<article class="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-transparent rounded-lg p-5 space-y-1 md:space-y-3">
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
                            <StarRating.Star {...item} class="py-0! my-0!" />
                        {/each}
                    {/snippet}
                </StarRating.Root>
            {/if}
        </div>
    </div>

    <div class="h-15 my-5">
        {#if content}
            <div class="mb-1 text-[14px]">Descrição</div>
            <TruncatableText text={content} class="text-justify text-[12px] text-gray-500" />
        {/if}
    </div>

    <CardMedia
        {imageUrl}
        {videoUrl}
        {isImageButtonMaximized}
        {isVideoButtonMaximized}
    />
</article>
