<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n";
    import { PageLoading } from "$lib";
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";

    let progress = $state(0);

    onMount(() => {
        const id = setInterval(() => {
            progress = progress >= 100 ? 0 : Math.min(progress + 3, 100);
        }, 80);
        return () => clearInterval(id);
    });
</script>

<svelte:head>
    <title>{$t("status.loading.title")} | Status | NegoDesign</title>
    <meta
        name="description"
        content="Demo do PageLoading com spinner animado e barra de progresso."
    />
</svelte:head>

<a
    href="/status/documentation"
    class="fixed left-4 top-4 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
>
    <ImageHugeicons icon="arrow-left-01" class="size-3" />
    Documentação
</a>

<PageLoading progress={progress} />