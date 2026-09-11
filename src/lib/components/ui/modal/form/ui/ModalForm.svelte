<script lang="ts">
  import { cn } from "$lib/utils";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import Form from "$lib/components/ui/form/Form.svelte";
  import type { ModalFormProps } from "../types";

  let {
    title,
    subtitle,
    inputs = [],
    isOpen = $bindable(false),
    submitText = "Submit",
    submitLoadingText = "Submitting...",
    cancelText = "Cancel",
    isLoading = false,
    showCancel = true,
    columns = 2,
    onSubmit,
    onCancel,
    onClose,
    class: className,
  }: ModalFormProps = $props();

  function handleSubmit(data: Record<string, string | string[] | boolean>) {
    onSubmit?.(data);
  }

  function handleCancel() {
    isOpen = false;
    onCancel?.();
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  showProgress={false}
  showBack={false}
  {onClose}
  class={cn("max-w-2xl", className)}
>
  {#snippet content()}
    <Form
      {inputs}
      {columns}
      {submitText}
      {submitLoadingText}
      {isLoading}
      onSubmit={handleSubmit}
    />
  {/snippet}

  {#snippet footer()}
    {#if showCancel}
      <div class="flex items-center justify-end gap-3">
        <button
          type="button"
          class="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
          onclick={handleCancel}
        >
          {cancelText}
        </button>
      </div>
    {/if}
  {/snippet}
</ModalCore>
