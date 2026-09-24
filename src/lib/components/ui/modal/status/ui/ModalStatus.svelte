<script lang="ts" module>
  /**
   * @component ModalStatus
   * Modal de status que abre globalmente em qualquer parte da aplicação.
   * Controlado pelo `statusStore`: quando `$statusStore.open` é `true` o modal abre.
   * Suporta estados ERROR e SUCCESS.
   * @see ModalStatusProps
   */
</script>

<script lang="ts">
  import { cn } from "$lib/utils";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
  import { closeStatus, statusStore } from "$lib/stores";
  import type { ModalStatusProps } from "../types";
  import ImageSvgAnimate from "$lib/components/ui/image/ImageSvgAnimate.svelte";

  let {
    title,
    subtitle,
    status,
    data,
    onClose,
    class: className,
  }: ModalStatusProps = $props();

  const isOpen = $derived(statusStore.open);
  const finalStatus = $derived(status ?? statusStore.status ?? "ERROR");

  const detail = $derived(() => {
    const details = data ?? statusStore.data;
    if (!details) return undefined;
    if (details instanceof Error) return details.message;
    if (typeof details === "string") return details;
    return details.detail;
  });

  const modalTitle = $derived(() => {
    const details = data ?? statusStore.data;
    const storeTitle = title ?? statusStore.title;
    if (storeTitle) return storeTitle;
    if (details instanceof Error) return details.name;
    if (details && typeof details === "object" && details.title)
      return details.title;
    if (finalStatus === "SUCCESS") return $t("label.success") ?? "Sucesso";
    return $t("label.error") ?? "Erro";
  });

  const modalSubtitle = $derived(() => {
    const storeSubtitle = subtitle ?? statusStore.subtitle;
    if (storeSubtitle) return storeSubtitle;
    return undefined;
  });

  function handleClose() {
    const callback = onClose ?? statusStore.onClose;
    callback?.();
    closeStatus();
  }
</script>

<ModalCore
  {isOpen}
  title={modalTitle()}
  subtitle={modalSubtitle()}
  showProgress={false}
  showBack={false}
  onClose={handleClose}
  class={cn("max-w-lg", className)}
>
  {#snippet content()}
    <div class="flex flex-col items-center gap-6">
      {#if finalStatus === "SUCCESS"}
        <div
          class="flex size-16 items-center justify-center rounded-full bg-green-500/10"
        >
          <ImageSvgAnimate key="success" />
        </div>
      {:else}
        <div
          class="flex size-16 items-center justify-center rounded-full bg-destructive/10"
        >
          <ImageSvgAnimate key="rejected" />
        </div>
      {/if}

      {#if detail()}
        <p class="text-center text-sm text-muted-foreground">
          {detail()}
        </p>
      {/if}
    </div>
  {/snippet}

  {#snippet footer()}
    <div class="flex justify-end">
      <Button type="button" onclick={handleClose} class="w-full">
        {$t("label.close") ?? "Fechar"}
      </Button>
    </div>
  {/snippet}
</ModalCore>
