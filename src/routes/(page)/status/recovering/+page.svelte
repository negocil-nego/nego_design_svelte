<script lang="ts">
    import { PageStatusRecovering } from "$lib";
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
</script>

<svelte:head>
    <title>Recovering | Status | NegoDesign</title>
    <meta
        name="description"
        content="Demo em página inteira do componente PageStatusRecovering."
    />
</svelte:head>

<a
    href="/status"
    class="fixed left-4 top-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
>
    <ImageHugeicons icon="arrow-left-01" class="size-3" />
    Status
</a>

<PageStatusRecovering onAction={() => console.log("back to login")} />