<script lang="ts">
  import { cn } from "$lib/utils";
  import {
    Cancel01Icon,
    Delete02Icon,
    ArrowDown01Icon,
    RefreshIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalUploadProps, UploadFile } from "../types";

  let {
    title = "Upload File",
    accept = "",
    acceptedFormats = "csv, xlsx, xls",
    downloadText = "Download",
    downloadLabel = "sample data for file upload",
    dragText = "Drag and Drop or",
    browseText = "Browse",
    cancelText = "Cancel",
    uploadText = "Upload",
    uploadLoadingText = "Uploading...",
    files = $bindable([]),
    isOpen = $bindable(false),
    multiple = true,
    maxSize = 0,
    isLoading = false,
    onFilesSelected,
    onUpload,
    onCancel,
    onRemoveFile,
    onRetryFile,
    onDownload,
    onClose,
    class: className,
  }: ModalUploadProps = $props();

  let isDragOver = $state(false);
  let fileInputRef = $state<HTMLInputElement | null>(null);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    isDragOver = true;
  }

  function handleDragLeave() {
    isDragOver = false;
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    isDragOver = false;
    const droppedFiles = Array.from(e.dataTransfer?.files ?? []);
    processFiles(droppedFiles);
  }

  function handleFileInput(e: Event) {
    const inputFiles = Array.from((e.target as HTMLInputElement).files ?? []);
    processFiles(inputFiles);
  }

  function processFiles(rawFiles: File[]) {
    let filtered = rawFiles;
    if (maxSize > 0) {
      filtered = rawFiles.filter((f) => f.size <= maxSize);
    }
    if (filtered.length > 0) {
      onFilesSelected?.(filtered);
    }
  }

  function openFilePicker() {
    fileInputRef?.click();
  }

  function formatSize(bytes: number): string {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(0)) + " " + sizes[i];
  }

  function getStatusColor(status?: string): string {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "failed":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  }

  function handleCancel() {
    isOpen = false;
    onCancel?.();
  }

  function handleUpload() {
    onUpload?.(files);
  }
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
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class={cn(
        "flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors",
        isDragOver
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/30"
      )}
      ondragover={handleDragOver}
      ondragleave={handleDragLeave}
      ondrop={handleDrop}
    >
      <input
        bind:this={fileInputRef}
        type="file"
        {accept}
        multiple={multiple}
        class="hidden"
        onchange={handleFileInput}
      />

      <div class="mb-3 flex size-12 items-center justify-center rounded-full bg-muted">
        <HugeiconsIcon icon={ArrowDown01Icon} class="size-6 text-muted-foreground" />
      </div>

      <p class="text-sm text-foreground">
        {dragText}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span
          class="cursor-pointer font-semibold text-primary underline"
          onclick={openFilePicker}
          onkeydown={(e) => { if (e.key === "Enter") openFilePicker(); }}
        >
          {browseText}
        </span>
        to Upload
      </p>

      {#if acceptedFormats}
        <p class="mt-1 text-xs text-muted-foreground">
          Supported formats: {acceptedFormats}
        </p>
      {/if}
    </div>

    <!-- Download Link -->
    {#if onDownload}
      <div class="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <span class="text-green-600">⬇</span>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span>
          <span
            class="cursor-pointer font-medium text-primary underline"
            onclick={onDownload}
            onkeydown={(e) => { if (e.key === "Enter") onDownload(); }}
          >
            {downloadText}
          </span>
          {downloadLabel}
        </span>
      </div>
    {/if}

    <!-- File List -->
    {#if files.length > 0}
      <div class="mt-4 space-y-3">
        {#each files as file (file.id)}
          <div class="rounded-lg border border-border bg-card p-3">
            <div class="flex items-center gap-3">
              <!-- File Icon -->
              <div class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <span class="text-xs font-bold text-primary">
                  {file.name.split(".").pop()?.toUpperCase() ?? "FILE"}
                </span>
              </div>

              <!-- File Info -->
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium">{file.name}</p>
                <p class="text-xs text-muted-foreground">
                  {#if file.date}Date: {file.date} · {/if}Size: {formatSize(file.size)}
                </p>
                {#if file.status}
                  <p class={cn("text-xs font-medium", getStatusColor(file.status))}>
                    {file.status === "completed"
                      ? "Completed"
                      : file.status === "failed"
                        ? "Upload Failed"
                        : ""}
                  </p>
                {/if}
              </div>

              <!-- Actions -->
              <div class="flex items-center gap-1">
                {#if file.status === "failed" && onRetryFile}
                  <button
                    type="button"
                    class="rounded p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    onclick={() => onRetryFile(file.id)}
                    title="Retry"
                  >
                    <HugeiconsIcon icon={RefreshIcon} class="size-4" />
                  </button>
                {/if}
                {#if onRemoveFile}
                  <button
                    type="button"
                    class="rounded p-1 text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                    onclick={() => onRemoveFile(file.id)}
                    title="Remove"
                  >
                    <HugeiconsIcon icon={Delete02Icon} class="size-4" />
                  </button>
                {/if}
              </div>
            </div>

            <!-- Progress Bar -->
            {#if file.status === "uploading" && file.progress !== undefined}
              <div class="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  class="h-full rounded-full bg-primary transition-all duration-300"
                  style="width: {file.progress}%"
                ></div>
              </div>
              <p class="mt-1 text-right text-xs text-muted-foreground">{file.progress}%</p>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
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
        disabled={isLoading || files.length === 0}
        class="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        onclick={handleUpload}
      >
        {isLoading ? uploadLoadingText : uploadText}
      </button>
    </div>
  {/snippet}
</ModalCore>
