<script lang="ts">
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import type { IconSvgElement } from "@hugeicons/svelte";

    let {
        icon,
        isLoading,
    }: {
        icon: string | IconSvgElement;
        isLoading?: boolean;
    } = $props();
</script>

{#if isLoading}
    <Skeleton class="min-w-17.5 md:min-w-25 h-2.5 bg-gray-400" />
{:else if typeof icon === "string"}
    <i class="{icon} text-4xl md:text-6xl"></i>
{:else}
    <HugeiconsIcon {icon} class="size-8 md:size-10" />
{/if}
