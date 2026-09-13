<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte.ts";
  import { Label } from "$lib/components/ui/label";
  import { CalendarCard } from "./calendar";
  import { t, locale } from "$lib/i18n";
  import { cn } from "$lib/utils.js";

  type Props = InputLabelProps & {
    min?: string;
    max?: string;
    disabled?: boolean;
  };

  let {
    label,
    labelClass,
    inputClass,
    isLabel = true,
    isIcon = true,
    value = $bindable(""),
    min,
    max,
    disabled = false,
    placeholder,
    placeholderClass,
  }: Props = $props();

  let open = $state(false);

  const i18nLocale = $derived($locale === "pt" ? "pt-PT" : "en-US");

  function parseISO(dateStr: string): Date | undefined {
    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return undefined;
    return new Date(+match[1], +match[2] - 1, +match[3]);
  }

  function formatDateISO(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  const selectedDate = $derived(value ? parseISO(value) : undefined);

  const displayValue = $derived(
    selectedDate
      ? new Intl.DateTimeFormat(i18nLocale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(selectedDate)
      : "",
  );

  const minDate = $derived(min ? parseISO(min) : undefined);
  const maxDate = $derived(max ? parseISO(max) : undefined);

  function handleSelect(date: Date) {
    value = formatDateISO(date);
    open = false;
  }

  const placeholderClasses = $derived(
    cn(
      "truncate",
      !displayValue && "text-muted-foreground",
      `${placeholderClass}`,
    ),
  );
</script>

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    {#if label}
      <Label class={labelClass}>{label}</Label>
    {/if}

    <CalendarCard
      bind:open
      value={selectedDate}
      min={minDate}
      max={maxDate}
      {isIcon}
      {inputClass}
      {disabled}
      onselect={handleSelect}
    >
      <span class={placeholderClasses}>
        {displayValue || placeholder || $t("input.date.placeholder")}
      </span>
    </CalendarCard>
  </div>
{:else}
  <CalendarCard
    bind:open
    value={selectedDate}
    min={minDate}
    max={maxDate}
    {isIcon}
    {inputClass}
    {disabled}
    onselect={handleSelect}
  >
    <span class={placeholderClasses}>
      {displayValue || placeholder || $t("input.date.placeholder")}
    </span>
  </CalendarCard>
{/if}