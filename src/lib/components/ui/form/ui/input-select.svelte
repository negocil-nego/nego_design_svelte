<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import type { InputLabelProps } from "../data/InputLabel.svelte.ts";
  import { Label } from "$lib/components/ui/label";
      import { cn } from "$lib/utils.js";

  export type SelectOption = {
    value: string;
    label: string;
    country?: string;
  };
  type SelectOptions = SelectOption[] | Record<string, string>;

  type Props = InputLabelProps & {
    options?: SelectOptions;
    disabled?: boolean;
    /** Seleção múltipla (usa o array `values` em vez de `value`) */
    multiple?: boolean;
    /** Valores selecionados (bindable) quando `multiple` é `true` */
    values?: string[];
    /** Classe CSS personalizada para cada opção do dropdown */
    optionClass?: string;
    /** Texto exibido quando a busca não encontra resultados */
    emptyLabel?: string;
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
    values = $bindable([] as string[]),
    disabled = false,
    multiple = false,
    optionClass = "",
    emptyLabel = "",
  }: Props = $props();

  const optionList = $derived<SelectOption[]>(
    Array.isArray(options)
      ? options.map((o) =>
          typeof o === "string"
            ? { value: o, label: o }
            : { value: o.value, label: o.label, country: o.country },
        )
      : Object.entries(options).map(([value, label]) => ({ value, label })),
  );

  let query = $state("");
  let open = $state(false);

  const selectedLabel = $derived(
    multiple
      ? optionList
          .filter((o) => values.includes(o.value))
          .map((o) => o.label)
          .join(", ")
      : optionList.find((o) => o.value === value)?.label ?? "",
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

  function hasSelection() {
    return multiple ? values.length > 0 : !!value;
  }

  function handleFocus() {
    if (disabled) return;
    open = true;
    query = multiple ? "" : selectedLabel;
  }

  function handleBlur(e: FocusEvent) {
    query = multiple ? selectedLabel : query || selectedLabel;
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (values.includes(option.value)) {
        values = values.filter((v) => v !== option.value);
      } else {
        values = [...values, option.value];
      }
      query = "";
    } else {
      value = option.value;
      query = option.label;
      open = false;
    }
  }

  function clearSelection() {
    if (multiple) {
      values = [];
    } else {
      value = "";
    }
    query = "";
    open = false;
  }

  function isSelected(option: SelectOption) {
    return multiple ? values.includes(option.value) : option.value === value;
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
          <ImageHugeicons icon="Search01Icon" class="size-4" />
        </span>
      {/if}

      {#if !disabled && hasSelection()}
        <button
          type="button"
          aria-label="clear"
          class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10 text-slate-400 hover:text-slate-600"
          onmousedown={(e) => e.preventDefault()}
          onclick={clearSelection}
        >
          <ImageHugeicons icon="Cancel01Icon" class="size-4" />
        </button>
      {:else}
        <span
          class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
        >
          <ImageHugeicons icon="ChevronDownIcon" class="size-4" />
        </span>
      {/if}

      <input
        type="text"
        class={inputClasses}
        placeholder={placeholder}
        {disabled}
        value={query}
        oninput={(e) => {
          query = e.currentTarget.value;
          open = true;
        }}
        onfocus={handleFocus}
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
              {emptyLabel || placeholder}
            </div>
          {:else}
            {#each filteredOptions as option, i (option.value)}
              <button
                type="button"
                role="option"
                aria-selected={isSelected(option)}
                class={cn(
                  "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                  isSelected(option)
                    ? "bg-primary font-medium text-primary-foreground hover:bg-primary"
                    : "text-foreground",
                  optionClass,
                )}
                onclick={() => selectOption(option)}
              >
                {#if option.country}
                  <ImageFlag country={option.country} class="size-4 shrink-0 rounded-sm" />
                {/if}
                <span class="flex-1 min-w-0 truncate">{option.label}</span>
                {#if multiple}
                  <span
                    class="flex items-center justify-center"
                    class:opacity-0={!isSelected(option)}
                  >
                    <ImageHugeicons icon="CheckmarkCircle02Icon" class="size-4" />
                  </span>
                {/if}
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
        <ImageHugeicons icon="Search01Icon" class="size-4" />
      </span>
    {/if}

    {#if !disabled && hasSelection()}
      <button
        type="button"
        aria-label="clear"
        class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10 text-slate-400 hover:text-slate-600"
        onmousedown={(e) => e.preventDefault()}
        onclick={clearSelection}
      >
        <ImageHugeicons icon="Cancel01Icon" class="size-4" />
      </button>
    {:else}
      <span
        class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
      >
        <ImageHugeicons icon="ChevronDownIcon" class="size-4" />
      </span>
    {/if}

    <input
      type="text"
      class={inputClasses}
      placeholder={placeholder}
      {disabled}
      value={query}
      oninput={(e) => {
        query = e.currentTarget.value;
        open = true;
      }}
      onfocus={handleFocus}
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
            {emptyLabel || placeholder}
          </div>
        {:else}
          {#each filteredOptions as option, i (option.value)}
            <button
              type="button"
              role="option"
              aria-selected={isSelected(option)}
              class={cn(
                "flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                isSelected(option)
                  ? "bg-primary font-medium text-primary-foreground hover:bg-primary"
                  : "text-foreground",
                optionClass,
              )}
              onclick={() => selectOption(option)}
            >
              {#if option.country}
                <ImageFlag country={option.country} class="size-4 shrink-0 rounded-sm" />
              {/if}
              <span class="flex-1 min-w-0 truncate">{option.label}</span>
              {#if multiple}
                <span
                  class="flex items-center justify-center"
                  class:opacity-0={!isSelected(option)}
                >
                  <ImageHugeicons icon="CheckmarkCircle02Icon" class="size-4" />
                </span>
              {/if}
            </button>
          {/each}
        {/if}
      </div>
    {/if}
  </div>
{/if}