<!-- CardMedia.svelte -->
<script lang="ts">
    /**
     * Image thumbnail with hover-to-play video, lazy loading,
     * duration badge, video indicator, and optional maximize overlay.
     * @component
     */
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import { Maximize01Icon, Cancel01Icon, VideoReplayIcon } from "@hugeicons/core-free-icons";

    type Props = {
        imageUrl?: string;
        videoUrl?: string;
        class?: string;
        isImageButtonMaximized?: boolean;
        isVideoButtonMaximized?: boolean;
    };

    let {
        imageUrl,
        videoUrl,
        class: className = "w-64 h-64",
        isImageButtonMaximized = false,
        isVideoButtonMaximized = false,
    }: Props = $props();

    let containerEl: HTMLDivElement | undefined = $state();
    let videoEl: HTMLVideoElement | undefined = $state();

    let isHovering = $state(false);
    let isVisible = $state(false);
    let isMaximized = $state(false);
    let duration = $state("");

    let showVideo = $derived(!imageUrl || isHovering);
    let showMaximize = $derived((imageUrl && isImageButtonMaximized) || (videoUrl && isVideoButtonMaximized));
    let showVideoBadge = $derived(!!imageUrl && !!videoUrl && !isHovering);

    function onLoadedMetadata() {
        if (!videoEl) return;
        const m = Math.floor(videoEl.duration / 60);
        const s = Math.floor(videoEl.duration % 60);
        duration = `${m}:${s.toString().padStart(2, "0")}`;
    }

    function toggleHover(state: boolean) {
        if (!videoUrl) return;
        isHovering = state;
        if (state) videoEl?.play();
        else {
            videoEl?.pause();
            if (imageUrl && videoEl) videoEl.currentTime = 0;
        }
    }

    $effect(() => {
        if (!containerEl) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.disconnect();
                }
            },
            { rootMargin: "100px" }
        );
        observer.observe(containerEl);
        return () => observer.disconnect();
    });
</script>

<svelte:window onkeydown={isMaximized ? (e) => e.key === "Escape" && (isMaximized = false) : undefined} />

{#snippet maximizeButton()}
    <button
        type="button"
        class="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70"
        onclick={(e) => { e.stopPropagation(); isMaximized = true; videoEl?.pause(); }}
        aria-label="Maximizar"
    >
        <HugeiconsIcon icon={Maximize01Icon} size={16} color="currentColor" strokeWidth={1.5} />
    </button>
{/snippet}

{#if imageUrl || videoUrl}
    <div
        bind:this={containerEl}
        class="relative w-full {className}"
        role="button"
        tabindex="0"
        onmouseenter={() => toggleHover(true)}
        onmouseleave={() => toggleHover(false)}
        onfocus={() => toggleHover(true)}
        onblur={() => toggleHover(false)}
        onkeydown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggleHover(!isHovering))}
    >
        {#if imageUrl}
            <img
                src={isVisible ? imageUrl : undefined}
                loading="lazy"
                decoding="async"
                alt={imageUrl}
                class="absolute inset-0 w-full {className} rounded-md object-cover transition-opacity duration-500"
                class:opacity-0={videoUrl && showVideo}
            />
        {/if}

        {#if videoUrl && isVisible}
            <video
                bind:this={videoEl}
                src={videoUrl}
                preload="metadata"
                onloadedmetadata={onLoadedMetadata}
                class="absolute inset-0 w-full {className} rounded-md object-cover transition-opacity duration-500"
                class:opacity-0={imageUrl && !showVideo}
                muted
                loop
                playsinline
            ></video>
        {/if}

        {#if showVideoBadge}
            <div class="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                <div class="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                    <HugeiconsIcon icon={VideoReplayIcon} size={22} color="white" strokeWidth={1.5} />
                </div>
            </div>
            {#if duration}
                <span class="absolute bottom-2 right-2 z-10 rounded bg-black/60 px-1.5 py-0.5 text-xs font-medium text-white">
                    {duration}
                </span>
            {/if}
        {/if}

        {#if showMaximize}
            {@render maximizeButton()}
        {/if}
    </div>
{/if}

{#if isMaximized}
    <div class="fixed inset-0 z-50">
        <button
            type="button"
            class="absolute inset-0 h-full w-full cursor-default bg-black/80"
            onclick={() => (isMaximized = false)}
            aria-label="Fechar modal"
        ></button>

        <div class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="pointer-events-auto relative max-h-[90vh] max-w-4xl">
                <button
                    type="button"
                    class="absolute top-3 right-3 rounded-full bg-red-900/50 p-2 text-white hover:bg-black/70"
                    onclick={() => (isMaximized = false)}
                    aria-label="Fechar"
                >
                    <HugeiconsIcon icon={Cancel01Icon} size={20} color="currentColor" strokeWidth={1.5} />
                </button>

                {#if videoUrl && showVideo}
                    <!-- svelte-ignore a11y_media_has_caption -->
                    <video src={videoUrl} class="max-h-[90vh] max-w-full rounded-md" controls autoplay playsinline></video>
                {:else if imageUrl}
                    <img src={imageUrl} alt={imageUrl} class="max-h-[90vh] max-w-full rounded-md object-contain" />
                {/if}
            </div>
        </div>
    </div>
{/if}