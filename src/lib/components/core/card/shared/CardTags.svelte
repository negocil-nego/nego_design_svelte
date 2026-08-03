<script lang="ts">
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import type { CardTagsProps } from "../types";

    type Props = {
        className?: string;
        tags: CardTagsProps[];
        isTagBorderBottom?: boolean;
        isWrap?: boolean;
    };

    const {
        tags,
        className,
        isTagBorderBottom,
        isWrap = false,
    }: Props = $props();

    let isJustify = $derived(tags.length == 2 || tags.length == 3);
</script>

{#snippet createBadge(tag: CardTagsProps)}
    <div
        class="flex items-center h-5 shrink-0 {isTagBorderBottom
            ? 'border border-gray-200 rounded-full px-2 py-1'
            : ''}"
    >
        {#if tag.icon}
            <HugeiconsIcon
                icon={tag.icon}
                class="mr-0.5 h-3.75 w-3.75 shrink-0"
            />
        {/if}
        <div class="whitespace-nowrap">{tag.text}</div>
    </div>
{/snippet}

{#if tags && tags.length > 0}
    {#if isWrap}
        <div class="flex flex-wrap gap-2 md:gap-5 {className}">
            {#each tags as tag, i (i)}
                 {@render createBadge(tag)}
            {/each}
        </div>
    {:else}
        <div class="flex overflow-x-auto no-scrollbar w-full
        {isJustify ? 'justify-between' : 'gap-4 md:gap-5 lg:gap-10'}
        {className}">
            {#each tags as tag, i (i)}
                 {@render createBadge(tag)}
            {/each}
        </div>
    {/if}
{:else}
    <div class="w-full h-5 {className}"></div>
{/if}
