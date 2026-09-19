<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { InputLabelProps } from "../data/InputLabel.svelte.ts";
  import { Label } from "$lib/components/ui/label";
      import { cn } from "$lib/utils.js";

  type SelectOption = { value: string; label: string };
  type SelectOptions = SelectOption[] | Record<string, string>;

  type Props = InputLabelProps & {
    options?: SelectOptions;
    disabled?: boolean;
  };

  let {
    label,
    labelClass,
    inputClass,
    isLabel = true,
    isIcon = false,
    placeholder,
    options = {},
    value = $bindable(""),
    disabled = false,
  }: Props = $props();

  const optionList = $derived(
    Array.isArray(options)
      ? options.map((o) => (typeof o === "string" ? { value: o, label: o } : o))
      : Object.entries(options).map(([value, label]) => ({ value, label })),
  );

  let query = $state("");
  let open = $state(false);

  const selectedLabel = $derived(
    optionList.find((o) => o.value === value)?.label ?? "",
  );

  const filteredOptions = $derived.by(() => {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return optionList;
    return optionList.filter(
      (o) =>
        o.label.toLocaleLowerCase().includes(q) ||
        o.value.toLocaleLowerCase().includes(q),
    );
  });

  function handleFocus() {
    if (disabled) return;
    open = true;
    query = selectedLabel;
  }

  function handleInput() {
    open = true;
  }

  function selectOption(option: SelectOption) {
    value = option.value;
    query = option.label;
    open = false;
  }

  function clearSelection() {
    value = "";
    query = "";
    open = false;
  }

  function handleBlur(e: FocusEvent) {
    query = selectedLabel;
  }

  const inputClasses = $derived(
    cn(
      "h-9 w-full min-w-0 rounded-md border bg-transparent py-1 text-base shadow-xs",
      "transition-colors outline-none md:text-sm cursor-text",
      "border-input dark:bg-input/30 text-foreground placeholder:text-muted-foreground",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      "pr-9",
      isIcon ? "pl-9" : "pl-2.5",
      inputClass,
    ),
  );
</script>

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    {#if label}
      <Label class={labelClass}>{label}</Label>
    {/if}

    <div class="relative">
      {#if isIcon && !disabled}
        <span
          class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
        >
          <ImageHugeicons icon="search-01" width={16} height={16} />
        </span>
      {/if}

      {#if !disabled && value}
        <button
          type="button"
          aria-label="clear"
          class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10 text-slate-400 hover:text-slate-600"
          onmousedown={(e) => e.preventDefault()}
          onclick={clearSelection}
        >
          <ImageHugeicons icon="cancel-01" width={16} height={16} />
        </button>
      {:else}
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
        >
          <ImageHugeicons icon="chevron-down" width={16} height={16} />
        </span>
      {/if}

      <input
        type="text"
        class={inputClasses}
        placeholder={placeholder}
        {disabled}
        bind:value={query}
        onfocus={handleFocus}
        oninput={handleInput}
        onblur={handleBlur}
        onkeydown={(e) => {
          if (e.key === "Escape") open = false;
          if (e.key === "Enter") open = false;
        }}
      />

      {#if open && !disabled}
        <div
          role="listbox"
          tabindex="-1"
          class="absolute left-0 right-0 top-full z-10 mt-1 max-h-56 overflow-y-auto rounded-md border bg-popover p-1 shadow-md"
          onmousedown={(e) => e.preventDefault()}
        >
          {#if filteredOptions.length === 0}
            <div class="px-2 py-1.5 text-center text-xs text-muted-foreground">
              {placeholder}
            </div>
          {:else}
            {#each filteredOptions as option, i (option.value)}
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                class={cn(
                  "block w-full rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                  option.value === value
                    ? "bg-primary font-medium text-primary-foreground hover:bg-primary"
                    : "text-foreground",
                )}
                onclick={() => selectOption(option)}
              >
                {option.label}
              </button>
            {/each}
          {/if}
        </div>
      {/if}
    </div>
  </div>
{:else}
  <div class="relative">
    {#if isIcon && !disabled}
      <span
        class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
      >
        <ImageHugeicons icon="search-01" width={16} height={16} />
      </span>
    {/if}

    {#if !disabled && value}
      <button
        type="button"
        aria-label="clear"
        class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10 text-slate-400 hover:text-slate-600"
        onmousedown={(e) => e.preventDefault()}
        onclick={clearSelection}
      >
        <ImageHugeicons icon="cancel-01" width={16} height={16} />
      </button>
    {:else}
      <span
        class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
      >
        <ImageHugeicons icon="chevron-down" width={16} height={16} />
      </span>
    {/if}

    <input
      type="text"
      class={inputClasses}
      placeholder={placeholder}
      {disabled}
      bind:value={query}
      onfocus={handleFocus}
      oninput={handleInput}
      onblur={handleBlur}
      onkeydown={(e) => {
        if (e.key === "Escape") open = false;
        if (e.key === "Enter") open = false;
      }}
    />

    {#if open && !disabled}
      <div
        role="listbox"
        tabindex="-1"
        class="absolute left-0 right-0 top-full z-10 mt-1 max-h-56 overflow-y-auto rounded-md border bg-popover p-1 shadow-md"
        onmousedown={(e) => e.preventDefault()}
      >
        {#if filteredOptions.length === 0}
          <div class="px-2 py-1.5 text-center text-xs text-muted-foreground">
            {placeholder}
          </div>
        {:else}
          {#each filteredOptions as option, i (option.value)}
            <button
              type="button"
              role="option"
              aria-selected={option.value === value}
              class={cn(
                "block w-full rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                option.value === value
                  ? "bg-primary font-medium text-primary-foreground hover:bg-primary"
                  : "text-foreground",
              )}
              onclick={() => selectOption(option)}
            >
              {option.label}
            </button>
          {/each}
        {/if}
      </div>
    {/if}
  </div>
{/if}