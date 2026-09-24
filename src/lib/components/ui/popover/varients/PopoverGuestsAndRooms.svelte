<script lang="ts">
  import Popover from "../popover.svelte";
  import PopoverTrigger from "../popover-trigger.svelte";
  import PopoverContent from "../popover-content.svelte";
  import InputCheckbox from "$lib/components/ui/form/ui/input-checkbox.svelte";
  import { t } from "$lib/i18n";

  type Props = {
    open?: boolean;
    adults?: number;
    children?: number;
    rooms?: number;
  };

  let {
    open = $bindable(false),
    adults = $bindable(2),
    children = $bindable(0),
    rooms = $bindable(1),
  }: Props = $props();

  let petValues = $state<string[]>([]);

  const totalGuests = $derived(adults + children);

  const guestText = $derived(
    totalGuests === 1
      ? $t("search.guests.guest", { count: totalGuests })
      : $t("search.guests.guests", { count: totalGuests }),
  );

  const roomText = $derived(
    rooms === 1
      ? $t("search.guests.room", { count: rooms })
      : $t("search.guests.rooms", { count: rooms }),
  );

  const guestsLabel = $derived(`${guestText}, ${roomText}`);
</script>

{#snippet counterRow(
  label: string,
  description: string,
  value: number,
  min: number,
  max: number,
  onchange: (v: number) => void,
)}
  <div class="flex items-center justify-between">
    <div>
      <div class="text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </div>
      <div class="text-xs text-gray-500 dark:text-gray-400">{description}</div>
    </div>
    <div class="flex items-center gap-2">
      <button
        type="button"
        onclick={() => onchange(Math.max(min, value - 1))}
        disabled={value <= min}
        class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-sm font-semibold transition"
      >
        -
      </button>
      <span
        class="w-6 text-center text-sm font-semibold text-gray-800 dark:text-white"
        >{value}</span
      >
      <button
        type="button"
        onclick={() => onchange(Math.min(max, value + 1))}
        class="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 dark:text-white cursor-pointer text-sm font-semibold transition"
      >
        +
      </button>
    </div>
  </div>
{/snippet}

<Popover bind:open>
  <PopoverTrigger
    class="flex flex-col items-start gap-0.5 cursor-pointer px-3 py-2 rounded-xltransition text-left"
  >
    <span class="text-[11px] text-muted-foreground leading-tight">
      {$t("search.guests.label")}
    </span>
    <span class="text-sm font-semibold text-foreground leading-tight">
      {guestsLabel}
    </span>
  </PopoverTrigger>

  <PopoverContent align="end" class="w-72 rounded-2xl p-4 z-100!">
    <div class="flex flex-col gap-3 border-b pb-4">
      {@render counterRow(
        $t("search.guests.adults"),
        $t("search.guests.adults.age"),
        adults,
        1,
        20,
        (v) => (adults = v),
      )}
      {@render counterRow(
        $t("search.guests.children"),
        $t("search.guests.children.age"),
        children,
        0,
        20,
        (v) => (children = v),
      )}
      {@render counterRow(
        $t("search.guests.rooms.label"),
        $t("search.guests.rooms.accommodation"),
        rooms,
        1,
        10,
        (v) => (rooms = v),
      )}
    </div>

    <div class="pt-3">
      <InputCheckbox
        bind:value={petValues}
        options={[{ value: "pets", label: $t("search.guests.pets") }]}
        label={$t("search.guests.pets.description")}
      />
    </div>
  </PopoverContent>
</Popover>
