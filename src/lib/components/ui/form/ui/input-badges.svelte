<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils";
    
  let {
    label,
    isLabel = false,
    value = $bindable([]),
    disabled = false,
    required = false,
    placeholder = "Add a tag...",
    suggestions = [],
    maxTags = 0,
    class: className,
  }: {
    label?: string;
    isLabel?: boolean;
    value?: string[];
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    suggestions?: string[];
    maxTags?: number;
    class?: string;
  } = $props();

  let inputValue = $state("");
  let isInputFocused = $state(false);
  let showSuggestions = $state(false);

  const filteredSuggestions = $derived(
    suggestions.filter(
      (s) =>
        !value.includes(s) &&
        s.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  function addTag(tag: string) {
    const trimmed = tag.trim();
    if (!trimmed || disabled) return;
    if (value.includes(trimmed)) return;
    if (maxTags > 0 && value.length >= maxTags) return;
    value = [...value, trimmed];
    inputValue = "";
    showSuggestions = false;
  }

  function removeTag(tag: string) {
    if (disabled) return;
    value = value.filter((t) => t !== tag);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      value = value.slice(0, -1);
    }
  }

  function handleInput(e: Event) {
    inputValue = (e.target as HTMLInputElement).value;
    showSuggestions = inputValue.length > 0 && filteredSuggestions.length > 0;
  }

  function handleFocus() {
    isInputFocused = true;
    if (inputValue.length > 0 && filteredSuggestions.length > 0) {
      showSuggestions = true;
    }
  }

  function handleBlur() {
    isInputFocused = false;
    setTimeout(() => (showSuggestions = false), 150);
  }

  function selectSuggestion(suggestion: string) {
    addTag(suggestion);
    inputValue = "";
  }
</script>

{#if isLabel}
  <div class={cn("flex w-full flex-col gap-2", className)}>
    {#if label}
      <Label>{label}</Label>
    {/if}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class={cn(
        "flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-md border border-input bg-card px-3 py-1.5 transition-colors",
        isInputFocused && "ring-2 ring-ring ring-offset-2 ring-offset-background",
        disabled && "cursor-not-allowed opacity-50"
      )}
      onclick={() => !disabled && document.getElementById(`badges-input-${label}`)?.focus()}
    >
      {#each value as tag (tag)}
        <span class="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
          {tag}
          <button
            type="button"
            {disabled}
            class="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-destructive/10 hover:text-destructive"
            onclick={(e) => { e.stopPropagation(); removeTag(tag); }}
          >
            <ImageHugeicons icon="cancel-01" class="size-3" />
          </button>
        </span>
      {/each}

      {#if maxTags === 0 || value.length < maxTags}
        <input
          id="badges-input-{label}"
          type="text"
          bind:value={inputValue}
          {placeholder}
          {disabled}
          {required}
          class="min-w-[120px] flex-1 bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
          onkeydown={handleKeydown}
          oninput={handleInput}
          onfocus={handleFocus}
          onblur={handleBlur}
        />
      {/if}
    </div>

    {#if showSuggestions && filteredSuggestions.length > 0}
      <div class="max-h-40 overflow-auto rounded-md border border-border bg-card shadow-md">
        {#each filteredSuggestions as suggestion (suggestion)}
          <button
            type="button"
            class="flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-muted"
            onmousedown={(e) => { e.preventDefault(); selectSuggestion(suggestion); }}
          >
            {suggestion}
          </button>
        {/each}
      </div>
    {/if}

    {#if maxTags > 0}
      <p class="text-xs text-muted-foreground">
        {value.length}/{maxTags} tags
      </p>
    {/if}
  </div>
{:else}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class={cn(
      "flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-md border border-input bg-card px-3 py-1.5 transition-colors",
      isInputFocused && "ring-2 ring-ring ring-offset-2 ring-offset-background",
      disabled && "cursor-not-allowed opacity-50",
      className
    )}
    onclick={() => !disabled && document.getElementById(`badges-input-${label}`)?.focus()}
  >
    {#each value as tag (tag)}
      <span class="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground">
        {tag}
        <button
          type="button"
          {disabled}
          class="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-destructive/10 hover:text-destructive"
          onclick={(e) => { e.stopPropagation(); removeTag(tag); }}
        >
          <ImageHugeicons icon="cancel-01" class="size-3" />
        </button>
      </span>
    {/each}

    {#if maxTags === 0 || value.length < maxTags}
      <input
        id="badges-input-{label}"
        type="text"
        bind:value={inputValue}
        {placeholder}
        {disabled}
        {required}
        class="min-w-[120px] flex-1 bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
        onkeydown={handleKeydown}
        oninput={handleInput}
        onfocus={handleFocus}
        onblur={handleBlur}
      />
    {/if}
  </div>

  {#if showSuggestions && filteredSuggestions.length > 0}
    <div class="max-h-40 overflow-auto rounded-md border border-border bg-card shadow-md">
      {#each filteredSuggestions as suggestion (suggestion)}
        <button
          type="button"
          class="flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-muted"
          onmousedown={(e) => { e.preventDefault(); selectSuggestion(suggestion); }}
        >
          {suggestion}
        </button>
      {/each}
    </div>
  {/if}

  {#if maxTags > 0}
    <p class="text-xs text-muted-foreground">
      {value.length}/{maxTags} tags
    </p>
  {/if}
{/if}
