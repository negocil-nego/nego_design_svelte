<script lang="ts">
  import Popover from "../popover.svelte";
  import PopoverTrigger from "../popover-trigger.svelte";
  import PopoverContent from "../popover-content.svelte";
  import { Calendar } from "../../form/ui/calendar";
  import { t, locale } from "$lib/i18n";

  type Props = {
    open?: boolean;
    startValue?: string;
    endValue?: string;
  };

  let {
    open = $bindable(false),
    startValue = $bindable(""),
    endValue = $bindable(""),
  }: Props = $props();

  const today = new Date();

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
    return a.getTime() < b.getTime();
  }

  let startDate = $derived(startValue ? parseISO(startValue) : undefined);
  let endDate = $derived(endValue ? parseISO(endValue) : undefined);

  const startYear = $derived(startDate?.getFullYear());
  const startMonth = $derived(startDate?.getMonth());
  const endYear = $derived(
    endDate?.getFullYear() ?? startYear ?? today.getFullYear(),
  );
  const endMonth = $derived(
    endDate?.getMonth() ?? startMonth ?? today.getMonth(),
  );

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

  const i18nLocale = $derived($locale === "pt" ? "pt-PT" : "en-US");

  function formatShort(date: Date): string {
    return new Intl.DateTimeFormat(i18nLocale, {
      day: "numeric",
      month: "short",
    }).format(date);
  }

  const dateLabel = $derived.by(() => {
    if (startDate && endDate) {
      return `${formatShort(startDate)} - ${formatShort(endDate)}`;
    }
    if (startDate) {
      return `${formatShort(startDate)} - ...`;
    }
    return $t("search.checkin.default");
  });

  const calendarLabelClass =
    "px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground";
</script>

<Popover {open}>
  <PopoverTrigger
    class="flex flex-col items-start gap-0.5 cursor-pointer px-3 py-2 rounded-xltransition text-left"
  >
    <span class="text-[11px] text-muted-foreground leading-tight">
      {$t("search.checkin.label")}
    </span>
    <span class="text-sm font-semibold text-foreground leading-tight">
      {dateLabel}
    </span>
  </PopoverTrigger>
  <PopoverContent
    align="start"
    side="bottom"
    class="w-full md:w-150 p-0 z-999!"
  >
    <div
      class="grid max-h-104 gap-2 overflow-y-auto p-2 md:max-h-none md:grid-cols-2 md:overflow-visible w-full"
    >
      <div class="flex flex-col gap-1">
        <span class={calendarLabelClass}>{$t("search.checkin.start")}</span>
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
        <span class={calendarLabelClass}>{$t("search.checkin.end")}</span>
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
  </PopoverContent>
</Popover>
