<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { cn } from "$lib/utils";
      import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalMapProps } from "../types";

  let {
    title = "Location",
    searchPlaceholder = "Search address...",
    address = "",
    addressLabel = "Address",
    description = "",
    descriptionLabel = "Description",
    editButtonText = "Edit",
    useLocationText = "Use your business location",
    useLocationChecked = $bindable(false),
    cancelText = "Cancel",
    applyText = "Apply",
    isLoading = false,
    isOpen = $bindable(false),
    onSearch,
    onEdit,
    onApply,
    onCancel,
    onToggleLocation,
    onClose,
    mapSlot,
    class: className,
  }: ModalMapProps = $props();

  let searchQuery = $state("");
  let localDescription = $state("");

  $effect(() => {
    searchQuery = address;
    localDescription = description;
  });

  function handleSearch() {
    onSearch?.(searchQuery);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") handleSearch();
  }

  function handleApply() {
    onApply?.(searchQuery, localDescription);
  }

  function handleCancel() {
    isOpen = false;
    onCancel?.();
  }

  function handleToggle(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    useLocationChecked = checked;
    onToggleLocation?.(checked);
  }
</script>

<ModalCore
  bind:isOpen
  title=""
  showProgress={false}
  showBack={false}
  {onClose}
  class={cn("max-w-2xl overflow-hidden p-0!", className)}
>
  {#snippet content()}
    <div class="-mx-8 -mt-6 mb-0 flex flex-col">
      <!-- Map Area -->
      <div class="relative h-72 w-full bg-muted md:h-96">
        {#if mapSlot}
          {@render mapSlot()}
        {:else}
          <!-- Placeholder map with grid pattern -->
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-50"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex size-10 items-center justify-center rounded-full bg-primary shadow-lg">
              <div class="size-3 rounded-full bg-white"></div>
            </div>
          </div>
        {/if}

        <!-- Search Bar -->
        <div class="absolute left-4 right-4 top-4">
          <div class="flex items-center gap-2 rounded-xl border border-border bg-card shadow-lg">
            <ImageHugeicons icon="search-01" class="ml-3 size-4 text-muted-foreground" />
            <input
              type="text"
              bind:value={searchQuery}
              placeholder={searchPlaceholder}
              class="flex-1 bg-transparent py-3 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              onkeydown={handleKeydown}
            />
          </div>
        </div>

        <!-- Location Popup Card -->
        <div class="absolute bottom-4 left-4 right-4 rounded-xl border border-border bg-card p-5 shadow-lg md:left-auto md:right-4 md:w-80">
          <div class="mb-4 flex items-center justify-between">
            <h3 class="text-lg font-bold">{title}</h3>
            <button
              type="button"
              class="text-muted-foreground transition hover:text-foreground"
              onclick={() => (isOpen = false)}
            >
              <ImageHugeicons icon="cancel-01" class="size-4" />
            </button>
          </div>

          <!-- Address -->
          <div class="mb-4">
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="mb-1.5 block text-sm font-medium text-muted-foreground">
              {addressLabel}
            </label>
            <div class="flex items-center gap-2">
              <input
                type="text"
                bind:value={searchQuery}
                class="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
              />
              <button
                type="button"
                class="shrink-0 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted"
                onclick={onEdit}
              >
                {editButtonText}
              </button>
            </div>
          </div>

          <!-- Description -->
          <div>
            <!-- svelte-ignore a11y_label_has_associated_control -->
            <label class="mb-1.5 block text-sm font-medium text-muted-foreground">
              {descriptionLabel}
            </label>
            <textarea
              bind:value={localDescription}
              rows={3}
              class="w-full resize-none rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  {/snippet}

  {#snippet footer()}
    <div class="flex items-center justify-between">
      <!-- Use Location Checkbox -->
      <label class="flex cursor-pointer items-center gap-2.5">
        <input
          type="checkbox"
          checked={useLocationChecked}
          onchange={handleToggle}
          class="size-4 rounded border-border text-primary accent-primary"
        />
        <span class="text-sm font-medium text-muted-foreground">{useLocationText}</span>
      </label>

      <!-- Actions -->
      <div class="flex items-center gap-3">
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
          class="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          onclick={handleApply}
        >
          {applyText}
        </button>
      </div>
    </div>
  {/snippet}
</ModalCore>
