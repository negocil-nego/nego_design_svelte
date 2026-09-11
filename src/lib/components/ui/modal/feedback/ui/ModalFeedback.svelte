<script lang="ts">
  import { cn } from "$lib/utils";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalFeedbackProps } from "../types";

  let {
    title = "Your Feedback",
    icon = "🔥",
    placeholder = "Write your feedback here...",
    buttonText = "Send",
    buttonLoadingText = "Sending...",
    cancelText = "Cancel",
    addImageText = "Add an Image",
    isLoading = false,
    isOpen = $bindable(false),
    onSubmit,
    onAddImage,
    onClose,
    class: className,
  }: ModalFeedbackProps = $props();

  let editorRef = $state<HTMLDivElement | null>(null);
  let images = $state<File[]>([]);

  function execCmd(command: string, value?: string) {
    document.execCommand(command, false, value);
    editorRef?.focus();
  }

  function handleAddImage() {
    onAddImage?.();
  }

  function handleSubmit() {
    const content = editorRef?.innerHTML ?? "";
    if (!content.trim() || isLoading) return;
    onSubmit?.(content, images);
  }

  function handleCancel() {
    isOpen = false;
    onClose?.();
  }

  const toolbarButtons = [
    { command: "bold", label: "B", class: "font-bold" },
    { command: "italic", label: "I", class: "italic" },
    { command: "underline", label: "U", class: "underline" },
    { command: "insertUnorderedList", label: "•", class: "" },
    { command: "insertOrderedList", label: "1.", class: "" },
    { command: "undo", label: "↶", class: "" },
    { command: "redo", label: "↷", class: "" },
    { command: "justifyLeft", label: "⫷", class: "" },
    { command: "justifyCenter", label: "⫿", class: "" },
    { command: "justifyRight", label: "⫸", class: "" },
  ] as const;
</script>

<ModalCore
  bind:isOpen
  {title}
  showProgress={false}
  showBack={false}
  {onClose}
  class={cn("max-w-lg", className)}
>
  {#snippet content()}
    <!-- Toolbar -->
    <div class="mb-3 flex flex-wrap items-center gap-1 rounded-t-lg border border-border bg-muted/50 px-3 py-2">
      {#each toolbarButtons as btn (btn.command)}
        <button
          type="button"
          class={cn(
            "flex size-8 items-center justify-center rounded text-sm text-muted-foreground transition hover:bg-border hover:text-foreground",
            btn.class
          )}
          onclick={() => execCmd(btn.command)}
          title={btn.command}
        >
          {btn.label}
        </button>
      {/each}
    </div>

    <!-- Editor -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      bind:this={editorRef}
      contenteditable="true"
      class="min-h-[160px] rounded-b-lg border border-t-0 border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20"
      data-placeholder={placeholder}
      onkeydown={(e) => {
        if (e.key === "Enter" && e.ctrlKey) handleSubmit();
      }}
    ></div>

    <!-- Add Image Button -->
    <button
      type="button"
      class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-orange-300 bg-orange-50/50 py-3 text-sm font-medium text-orange-600 transition hover:bg-orange-50 dark:bg-orange-950/20 dark:text-orange-400 dark:hover:bg-orange-950/30"
      onclick={handleAddImage}
    >
      <span class="text-lg">🖼️</span>
      {addImageText}
    </button>
  {/snippet}

  {#snippet footer()}
    <div class="flex items-center justify-end gap-3">
      <button
        type="button"
        class="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
        onclick={handleCancel}
      >
        {cancelText}
      </button>
      <button
        type="button"
        disabled={isLoading}
        class="rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        onclick={handleSubmit}
      >
        {isLoading ? buttonLoadingText : buttonText}
      </button>
    </div>
  {/snippet}
</ModalCore>

<style>
  [contenteditable]:empty:before {
    content: attr(data-placeholder);
    color: oklch(0.56 0.021 213.5);
    pointer-events: none;
  }
</style>
