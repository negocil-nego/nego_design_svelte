<script lang="ts">
    import { t } from "$lib/i18n";
    import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
    import PageStatus from "../PageStatus.svelte";
    import type { PageLoadingProps } from "../types";

    interface Props {
        isVisibleProgress?: boolean;
    }

    let {
        progress,
        onAction,
        actionHref,
        className = "",
        titleColor = "text-primary",
        buttonBg = "bg-primary",
        buttonTextColor = "text-primary-foreground",
        isVisibleProgress = true,
        ...restProps
    }: PageLoadingProps & Props = $props();
</script>

<PageStatus
    title={$t("status.loading.title")}
    subtitle={$t("status.loading.subtitle")}
    description={$t("status.loading.description")}
    buttonText={$t("status.loading.button")}
    {onAction}
    {actionHref}
    {className}
    {titleColor}
    {buttonBg}
    {buttonTextColor}
    {...restProps}
>
    {#snippet imgSlot()}
        <span
            class="flex size-32 items-center justify-center rounded-full bg-primary/10 sm:size-40"
        >
            <ImageHugeicons
                icon="loader-pinwheel"
                class="size-16 animate-spin text-primary sm:size-20"
            />
        </span>
        {#if progress !== undefined}
            <div class="mx-auto mt-6 w-full max-w-60">
                <div class="h-1.5 w-full rounded-full bg-muted">
                    <div
                        class="h-1.5 rounded-full bg-primary transition-all duration-300"
                        style={`width: ${Math.min(Math.max(progress, 0), 100)}%`}
                    ></div>
                </div>
                {#if isVisibleProgress}
                    <p
                        class="mt-2 text-center text-xs font-medium text-muted-foreground"
                    >
                        {Math.min(Math.max(progress, 0), 100)}%
                    </p>
                {/if}
            </div>
        {/if}
    {/snippet}
</PageStatus>
