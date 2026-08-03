<script lang="ts">
    import * as StarRating from "$lib/components/ui/star-rating";

    type Props = {
        startNumber: number;
        startMax: number;
    };

    let { startNumber, startMax }: Props = $props();
</script>

{#if startNumber}
    <StarRating.Root max={startMax} value={startNumber} class="size-15 h-auto">
        {#snippet children({ items })}
            {#each items as item (item.index)}
                <StarRating.Star {...item} class="py-0! my-0!" />
            {/each}
        {/snippet}
    </StarRating.Root>
{/if}
