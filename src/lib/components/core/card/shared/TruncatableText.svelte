<!-- shared/TruncatableText.svelte -->
<script lang="ts">
  /**
   * Clamps text to N lines; if it overflows, shows an indicator
   * ("Ler texto completo") positioned absolutely at the end of the
   * text, that opens the full text in a Popover.
   * @component
   */
  import * as Popover from "$lib/components/ui/popover";
  import { t } from "$lib/i18n";

  type Props = { text: string; class?: string; lines?: number };
  let { text, class: className = "", lines = 2 }: Props = $props();

  let textEl: HTMLParagraphElement | undefined = $state();
  let isTruncated = $state(false);

  $effect(() => {
    if (!textEl) return;
    const check = () =>
      (isTruncated =
        (textEl?.scrollHeight ?? 0) > (textEl?.clientHeight ?? 0) + 1);
    // requestAnimationFrame garante que o layout com o clamp já foi aplicado
    // antes de medirmos — medir no mesmo tick pode dar valores desatualizados.
    requestAnimationFrame(check);
    const ro = new ResizeObserver(check);
    ro.observe(textEl);
    return () => ro.disconnect();
  });
</script>

<div class="relative">
  <p bind:this={textEl} class="line-clamp-3 {className}">
    {text}
  </p>

  {#if isTruncated}
    <Popover.Root>
      <Popover.Trigger
        class="absolute bottom-0 right-0 bg-background pl-1 text-[11px] font-medium text-primary underline underline-offset-2 cursor-pointer"
      >
        {$t("label.view.full")}
      </Popover.Trigger>
      <Popover.Content>
        <p class="max-w-xs text-justify text-[12px]">{text}</p>
      </Popover.Content>
    </Popover.Root>
  {/if}
</div>
