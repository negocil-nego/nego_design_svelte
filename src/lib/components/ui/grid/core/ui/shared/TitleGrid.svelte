<script lang="ts">
    import { Skeleton } from "$lib/components/ui/skeleton";

    let {
        isLoading,
        title,
        titleClass,
    }: {
        isLoading?: boolean;
        title?: string;
        titleClass?: string;
    } = $props();
</script>

{#if isLoading}
    <Skeleton class="w-full h-12.5 bg-gray-500/95" />
{:else}
    <p class={titleClass}>{title}</p>
{/if}
