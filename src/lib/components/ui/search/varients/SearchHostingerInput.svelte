<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import PopoverCalenderCheckIn from "../../popover/varients/PopoverCalenderCheckIn.svelte";
  import PopoverGuestsAndRooms from "../../popover/varients/PopoverGuestsAndRooms.svelte";
  import InputCommand from "../../form/ui/input-command.svelte";
  import { t } from "$lib/i18n";
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
</script>

<div class="w-full md:flex md:flex-col justify-end items-end gap-2 relative">
  <div
    class="flex items-center gap-2 px-2 w-full py-3 rounded-2xl z-10 bg-gray-100 dark:bg-slate-900 relative"
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
        <PopoverCalenderCheckIn
          bind:open={openCalendar}
          bind:startValue={startDate}
          bind:endValue={endDate}
        />
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
        class="flex justify-center items-center cursor-pointer p-1.5 bg-gradient text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
        aria-label="Pesquisar"
      >
        <span class="mr-2">{$t("label.search")}</span>
        <i class="hgi hgi-stroke hgi-rounded hgi-search-01 leading-none"></i>
      </button>
    </div>
  </div>
</div>
