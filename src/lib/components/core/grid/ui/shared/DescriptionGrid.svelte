<script lang="ts">
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

    let {
        isLoading,
        description,
        descriptionClass,
    }: {
        isLoading?: boolean;
        description?: string;
        descriptionClass?: string;
    } = $props();
</script>

{#if isLoading}
    <Skeleton class="w-full h-2.5 bg-gray-500/95" />
{:else if description}
    <p
        class="{descriptionClass} text-center min-w-48 md:w-52 lg:w-56 text-muted-foreground line-clamp-2 md:line-clamp-3"
    >
        {description}
    </p>
{/if}
