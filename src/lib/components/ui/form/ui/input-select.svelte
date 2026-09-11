<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils";
  import type { InputLabelProps } from "../data/InputLabel.svelte";

  type SelectOption = { value: string; label: string };

  let {
    label,
    isLabel = false,
    value = $bindable(""),
    disabled = false,
    required = false,
    placeholder = "Select an option",
    options = [],
    multiple = false,
    class: className,
    ...restProps
  }: InputLabelProps & {
    value?: string | string[];
    options?: SelectOption[];
    multiple?: boolean;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    class?: string;
  } = $props();

  let isOpen = $state(false);
  let selectRef = $state<HTMLDivElement | null>(null);

  function handleSelect(option: SelectOption) {
    if (multiple) {
      const arr = Array.isArray(value) ? value : [];
      const idx = arr.indexOf(option.value);
      if (idx >= 0) {
        value = arr.filter((v) => v !== option.value);
      } else {
        value = [...arr, option.value];
      }
    } else {
      value = option.value;
      isOpen = false;
    }
  }

  function isSelected(option: SelectOption): boolean {
    if (multiple) {
      return Array.isArray(value) && value.includes(option.value);
    }
    return value === option.value;
  }

  function getDisplayText(): string {
    if (multiple) {
      const arr = Array.isArray(value) ? value : [];
      if (arr.length === 0) return placeholder;
      return arr
        .map((v) => options.find((o) => o.value === v)?.label ?? v)
        .join(", ");
    }
    return options.find((o) => o.value === value)?.label ?? placeholder;
  }

  function handleClickOutside(e: MouseEvent) {
    if (selectRef && !selectRef.contains(e.target as Node)) {
      isOpen = false;
    }
  }
</script>

<svelte:window onclick={handleClickOutside} />

{#if isLabel}
  <div class="flex w-full flex-col gap-3">
    {#if label}
      <Label>{label}</Label>
    {/if}
    <div bind:this={selectRef} class={cn("relative", className)}>
      <button
        type="button"
        {disabled}
        class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onclick={() => (isOpen = !isOpen)}
      >
        <span class={cn(!value && "text-muted-foreground")}>
          {getDisplayText()}
        </span>
        <svg
          class={cn("size-4 shrink-0 opacity-50 transition-transform", isOpen && "rotate-180")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {#if isOpen}
        <div class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-card shadow-md">
          {#each options as option (option.value)}
            <button
              type="button"
              class={cn(
                "flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-muted",
                isSelected(option) && "bg-muted font-medium"
              )}
              onclick={() => handleSelect(option)}
            >
              {#if multiple}
                <span
                  class={cn(
                    "mr-2 flex size-4 items-center justify-center rounded border",
                    isSelected(option)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input"
                  )}
                >
                  {#if isSelected(option)}
                    <svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  {/if}
                </span>
              {/if}
              {option.label}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div bind:this={selectRef} class={cn("relative", className)}>
    <button
      type="button"
      {disabled}
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      onclick={() => (isOpen = !isOpen)}
    >
      <span class={cn(!value && "text-muted-foreground")}>
        {getDisplayText()}
      </span>
      <svg
        class={cn("size-4 shrink-0 opacity-50 transition-transform", isOpen && "rotate-180")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    {#if isOpen}
      <div class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-card shadow-md">
        {#each options as option (option.value)}
          <button
            type="button"
            class={cn(
              "flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-muted",
              isSelected(option) && "bg-muted font-medium"
            )}
            onclick={() => handleSelect(option)}
          >
            {#if multiple}
              <span
                class={cn(
                  "mr-2 flex size-4 items-center justify-center rounded border",
                  isSelected(option)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input"
                )}
              >
                {#if isSelected(option)}
                  <svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                {/if}
              </span>
            {/if}
            {option.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
