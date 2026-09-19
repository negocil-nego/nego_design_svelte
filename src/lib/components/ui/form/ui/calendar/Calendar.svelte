<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { locale } from "$lib/i18n";
      import { cn } from "$lib/utils.js";
  import MonthSelect from "./MonthSelect.svelte";
  import YearSelect from "./YearSelect.svelte";
  import DaysGrid from "./DaysGrid.svelte";
  import {
    currentToday,
    getMonthNames,
    getWeekdays,
    filterYears,
    buildWeeks,
    parseCommittedYear,
  } from "./utils.ts";

  type Props = {
    value?: Date;
    rangeStart?: Date;
    rangeEnd?: Date;
    min?: Date;
    max?: Date;
    month?: number;
    year?: number;
    locale?: string;
    onselect?: (date: Date) => void;
    class?: string;
  };

  let {
    value,
    rangeStart,
    rangeEnd,
    min,
    max,
    month: monthProp,
    year: yearProp,
    locale: propLocale,
    onselect,
    class: className,
  }: Props = $props();

  const localeValue = $derived(
    propLocale ?? ($locale === "pt" ? "pt-PT" : "en-US"),
  );

  const today = currentToday();

  // svelte-ignore state_referenced_locally
  let currentYear = $state(yearProp ?? today.year);
  // svelte-ignore state_referenced_locally
  let currentMonth = $state(monthProp ?? today.month);

  $effect(() => {
    if (monthProp !== undefined) currentMonth = monthProp;
  });

  $effect(() => {
    if (yearProp !== undefined) currentYear = yearProp;
  });

  let showMonthPicker = $state(false);
  let showYearPicker = $state(false);
  let yearQuery = $state(String(today.year));

  const monthNames = $derived(getMonthNames(localeValue));
  const weekdays = $derived(getWeekdays(localeValue));
  const weeks = $derived(buildWeeks(currentYear, currentMonth));
  const filteredYears = $derived(
    filterYears(yearQuery, currentYear, today.year),
  );

  function prevMonth() {
    if (currentMonth === 0) {
      currentYear -= 1;
      currentMonth = 11;
    } else {
      currentMonth -= 1;
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      currentYear += 1;
      currentMonth = 0;
    } else {
      currentMonth += 1;
    }
  }

  function selectMonth(m: number) {
    currentMonth = m;
    showMonthPicker = false;
  }

  function selectYear(y: number) {
    currentYear = y;
    showYearPicker = false;
    yearQuery = String(y);
  }

  function toggleMonthPicker() {
    showYearPicker = false;
    showMonthPicker = !showMonthPicker;
  }

  function toggleYearPicker() {
    showMonthPicker = false;
    const next = !showYearPicker;
    showYearPicker = next;
    if (next) {
      yearQuery = String(currentYear);
    }
  }

  function handleYearInput() {
    showMonthPicker = false;
    showYearPicker = true;
  }

  function commitYear() {
    const parsed = parseCommittedYear(yearQuery, today.year);
    if (parsed !== null) {
      selectYear(parsed);
    }
  }

  function cancelYear() {
    showYearPicker = false;
    yearQuery = String(currentYear);
  }
</script>

<div class={cn("flex w-72 flex-col gap-1 p-2 select-none", className)}>
  <div class="mb-1 flex items-center gap-1">
    <button
      type="button"
      aria-label="previous-month"
      class="rounded p-1.5 transition-colors hover:bg-muted"
      onclick={prevMonth}
    >
      <ImageHugeicons icon="chevron-left" width={16} height={16} />
    </button>

    <div class="relative flex-1">
      <MonthSelect
        months={monthNames}
        month={currentMonth}
        open={showMonthPicker}
        onToggle={toggleMonthPicker}
        onSelect={selectMonth}
      />
    </div>

    <div class="relative flex-1">
      <YearSelect
        years={filteredYears}
        year={currentYear}
        query={yearQuery}
        open={showYearPicker}
        onQueryChange={(q) => (yearQuery = q)}
        onFocus={handleYearInput}
        onToggle={toggleYearPicker}
        onCommit={commitYear}
        onCancel={cancelYear}
        onSelect={selectYear}
      />
    </div>

    <button
      type="button"
      aria-label="next-month"
      class="rounded p-1.5 transition-colors hover:bg-muted"
      onclick={nextMonth}
    >
      <ImageHugeicons icon="chevron-right" width={16} height={16} />
    </button>
  </div>

  <DaysGrid
    year={currentYear}
    month={currentMonth}
    weeks={weeks}
    weekdays={weekdays}
    today={today}
    {value}
    {rangeStart}
    {rangeEnd}
    {min}
    {max}
    {onselect}
  />
</div>