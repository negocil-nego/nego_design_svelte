<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import PopoverCalenderCheckIn from "../../popover/varients/PopoverCalenderCheckIn.svelte";
  import PopoverGuestsAndRooms from "../../popover/varients/PopoverGuestsAndRooms.svelte";
  import InputCommand from "../../form/ui/input-command.svelte";
  import type { CommandGroup } from "../../form/ui/input-command.svelte";
  import { locale, t } from "$lib/i18n";
  import type { SearchHostingerInputProps } from "../types";

  let {
    value = $bindable(""),
    groups = [],
    onchange,
    onSubmit,
    onSelect,
  }: SearchHostingerInputProps = $props();
  const responsive = useDevice();

  let openCalendar = $state(false);
  let startDate = $state("");
  let endDate = $state("");
  let adults = $state(2);
  let childrenCount = $state(0);
  let rooms = $state(1);

  const i18nLocale = $derived($locale === "pt" ? "pt-PT" : "en-US");

  function parseISO(dateStr: string): Date | undefined {
    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return undefined;
    return new Date(+match[1], +match[2] - 1, +match[3]);
  }

  function formatShort(date: Date): string {
    return new Intl.DateTimeFormat(i18nLocale, {
      day: "numeric",
      month: "short",
    }).format(date);
  }

  let startParsed = $derived(startDate ? parseISO(startDate) : undefined);
  let endParsed = $derived(endDate ? parseISO(endDate) : undefined);

  const dateLabel = $derived.by(() => {
    if (startParsed && endParsed) {
      return `${formatShort(startParsed)} - ${formatShort(endParsed)}`;
    }
    if (startParsed) {
      return `${formatShort(startParsed)} - ...`;
    }
    return $t("search.checkin.default");
  });
</script>

<div
  class="flex items-center gap-2 px-2 w-full py-3 rounded-2xl z-10 bg-gray-100 dark:bg-slate-900"
>
  <div class="flex flex-1 items-center gap-1">
    <InputCommand
      bind:value
      {groups}
      placeholder={$t("search.input.placeholder")}
      onSelect={(item) => {
        onchange?.(item.label);
        onSelect?.(item);
      }}
    />
  </div>
  {#if !responsive.isMobile}
    <div class="border-l border-gray-200 pl-1">
      <button
        onclick={() => {
          openCalendar = !openCalendar;
        }}
        class="flex flex-col items-start gap-0.5 cursor-pointer px-3 py-2 rounded-xl transition text-left"
      >
        <span class="text-[11px] text-muted-foreground leading-tight">
          {$t("search.checkin.label")}
        </span>
        <span class="text-sm font-semibold text-foreground leading-tight">
          {dateLabel}
        </span>
      </button>
    </div>
    <div class="border-l border-gray-200 pl-1">
      <PopoverGuestsAndRooms
        bind:adults
        bind:children={childrenCount}
        bind:rooms
      />
    </div>
  {/if}
  <div class="flex gap-1 h-full pl-1">
    <button
      type="button"
      onclick={() => onSubmit?.(value)}
      class="flex justify-center items-center cursor-pointer p-1.5 bg-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
      aria-label="Pesquisar"
    >
      <span class="mr-2">{$t("label.search")}</span>
      <i class="hgi hgi-stroke hgi-rounded hgi-search-01 leading-none"></i>
    </button>
  </div>
</div>

<PopoverCalenderCheckIn
  bind:open={openCalendar}
  bind:startValue={startDate}
  bind:endValue={endDate}
/>
