<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { Calendar, CalendarCard } from "./calendar";
  import { t, locale } from "$lib/i18n";
  import { cn } from "$lib/utils.js";

  type Props = {
    label?: string;
    isLabel?: boolean;
    isIcon?: boolean;
    labelClass?: string;
    inputClass?: string;
    disabled?: boolean;
    placeholder?: string;
    startValue?: string;
    endValue?: string;
    contentClass?: string;
  };

  let {
    label,
    isLabel = true,
    isIcon = true,
    labelClass,
    inputClass,
    disabled = false,
    placeholder,
    contentClass,
    startValue = $bindable(""),
    endValue = $bindable(""),
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

  function isBeforeDay(a: Date, b: Date): boolean {
    return (
      a.getFullYear() < b.getFullYear() ||
      (a.getFullYear() === b.getFullYear() && a.getMonth() < b.getMonth()) ||
      (a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() < b.getDate())
    );
  }

  let startDate = $derived(startValue ? parseISO(startValue) : undefined);
  let endDate = $derived(endValue ? parseISO(endValue) : undefined);

  const today = new Date();

  function selectStart(date: Date) {
    if (endDate && isBeforeDay(endDate, date)) {
      endValue = "";
    }
    startValue = formatDateISO(date);
  }

  function selectEnd(date: Date) {
    if (!startDate || isBeforeDay(date, startDate)) {
      startValue = formatDateISO(date);
    } else {
      endValue = formatDateISO(date);
      open = false;
    }
  }

  $effect(() => {
    if (startDate && endDate && isBeforeDay(endDate, startDate)) {
      startValue = formatDateISO(endDate);
      endValue = formatDateISO(startDate);
    }
  });

  const displayStart = $derived(
    startDate
      ? new Intl.DateTimeFormat(i18nLocale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(startDate)
      : "",
  );

  const displayEnd = $derived(
    endDate
      ? new Intl.DateTimeFormat(i18nLocale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(endDate)
      : "",
  );

  const startYear = $derived(startDate?.getFullYear());
  const startMonth = $derived(startDate?.getMonth());
  const endYear = $derived(
    endDate?.getFullYear() ?? startYear ?? today.getFullYear(),
  );
  const endMonth = $derived(
    endDate?.getMonth() ?? startMonth ?? today.getMonth(),
  );

  const placeholderClasses = $derived(
    cn("truncate", !startDate && !endDate && "text-muted-foreground"),
  );

  const calendarLabelClass = $derived(
    cn(
      "px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
    ),
  );
</script>

<div class="flex w-full flex-col gap-3">
  {#if isLabel}
    {#if label}
      <Label class={labelClass}>{label}</Label>
    {:else}
      <Label class={labelClass}>{$t("input.date.interval.label")}</Label>
    {/if}
  {/if}

  <CalendarCard
    bind:open
    rangeStart={startDate}
    rangeEnd={endDate}
    {isIcon}
    {inputClass}
    {disabled}
  >
    {#snippet content()}
      <div
        class="grid max-h-104 gap-2 overflow-y-auto p-2 md:max-h-none md:grid-cols-2 md:overflow-visible w-full"
      >
        <div class="flex flex-col gap-1">
          <span class={calendarLabelClass}>
            {$t("input.date.start.label")}
          </span>
          <Calendar
            value={startDate}
            rangeStart={startDate}
            rangeEnd={endDate}
            month={startMonth}
            year={startYear}
            onselect={selectStart}
          />
        </div>

        <div class="flex flex-col gap-1">
          <span class={calendarLabelClass}>
            {$t("input.date.end.label")}
          </span>
          <Calendar
            value={endDate}
            rangeStart={startDate}
            rangeEnd={endDate}
            month={endMonth}
            year={endYear}
            onselect={selectEnd}
          />
        </div>
      </div>
    {/snippet}
    <span class={placeholderClasses}>
      {#if displayStart}
        {displayStart}
        {#if displayEnd}– {displayEnd}{/if}
      {:else}
        {placeholder || $t("input.date.interval.label")}
      {/if}
    </span>
  </CalendarCard>
</div>
