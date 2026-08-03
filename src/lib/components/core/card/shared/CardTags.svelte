<script lang="ts">
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import type { CardTagsProps } from "../types";

    type Props = {
        className?: string;
        tags: CardTagsProps[];
        isTagBorderBottom?: boolean;
    };

    const { tags, className, isTagBorderBottom = false }: Props = $props();
</script>

{#if tags && tags.length > 0}
    <div
        class="flex overflow-x-auto no-scrollbar w-full {className} {tags.length ==
            2 || tags.length == 3
            ? 'justify-between'
            : 'gap-4 md:gap-5 lg:gap-10'}"
    >
        {#each tags as tag, i (i)}
            <div
                class="flex items-center h-5 shrink-0 {isTagBorderBottom ? 'border' : ''}"
            >
                {#if tag.icon}
                    <HugeiconsIcon
                        icon={tag.icon}
                        class="mr-0.5 h-3.75 w-3.75 shrink-0"
                    />
                {/if}
                <div class="whitespace-nowrap">{tag.text}</div>
            </div>
        {/each}
    </div>
{:else}
    <div class="w-full h-5 {className}"></div>
{/if}
<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none; 
}
</style>