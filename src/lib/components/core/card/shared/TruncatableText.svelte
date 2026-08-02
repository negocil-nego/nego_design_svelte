<!-- shared/TruncatableText.svelte -->
<script lang="ts">
    /**
     * Clamps text to N lines; if it overflows, shows an indicator
     * that opens the full text in a Tooltip (desktop) or Popover (mobile).
     * @component
     */
    import * as Tooltip from "$lib/components/ui/tooltip";
    import * as Popover from "$lib/components/ui/popover";

    type Props = { text: string; class?: string; lines?: 2 | 3 | 4 };
    let { text, class: className = "", lines = 2 }: Props = $props();

    // Tailwind precisa de classes literais no código-fonte para as gerar —
    // "line-clamp-{lines}" interpolado nunca é detectado pelo scanner.
    const clampClasses = { 2: "line-clamp-2", 3: "line-clamp-3", 4: "line-clamp-4" } as const;

    let textEl: HTMLParagraphElement | undefined = $state();
    let isTruncated = $state(false);
    let isDesktop = $state(true);

    $effect(() => {
        if (!textEl) return;
        const check = () => (isTruncated = textEl!.scrollHeight > textEl!.clientHeight + 1);
        // requestAnimationFrame garante que o layout com o clamp já foi aplicado
        // antes de medirmos — medir no mesmo tick pode dar valores desatualizados.
        requestAnimationFrame(check);
        const ro = new ResizeObserver(check);
        ro.observe(textEl);
        return () => ro.disconnect();
    });

    $effect(() => {
        const mql = window.matchMedia("(min-width: 768px)");
        isDesktop = mql.matches;
        const handler = (e: MediaQueryListEvent) => (isDesktop = e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    });
</script>

{#snippet trigger()}
    <span class="text-[11px] font-medium text-primary underline underline-offset-2 cursor-pointer">
        Ler texto completo
    </span>
{/snippet}

{#snippet fullText()}
    <p class="max-w-xs text-justify text-[12px]">{text}</p>
{/snippet}

{#if isTruncated}
    <div class="mb-1">
        {#if isDesktop}
            <Tooltip.Root>
                <Tooltip.Trigger>{@render trigger()}</Tooltip.Trigger>
                <Tooltip.Content>{@render fullText()}</Tooltip.Content>
            </Tooltip.Root>
        {:else}
            <Popover.Root>
                <Popover.Trigger>{@render trigger()}</Popover.Trigger>
                <Popover.Content>{@render fullText()}</Popover.Content>
            </Popover.Root>
        {/if}
    </div>
{/if}

<p bind:this={textEl} class="{clampClasses[lines]} {className}">{text}</p>