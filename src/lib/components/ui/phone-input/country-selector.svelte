<script lang="ts" module>
  import { COUNTRIES, type Country } from "$lib/components/ui/image/flag-map";
</script>

<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import { cn } from "$lib/utils.js";
  import type { CountryCode } from "./types";

  interface Props {
    selected?: CountryCode | null;
    dialCode?: string;
    disabled?: boolean;
    onselect?: (val: CountryCode | null) => void;
    order?: (a: Country, b: Country) => number;
  }

  let {
    selected = $bindable(null),
    // eslint-disable-next-line no-useless-assignment
    dialCode = $bindable(""),
    disabled = false,
    onselect = undefined,
    order = (a, b) => {
      return a.name.localeCompare(b.name);
    },
  }: Props = $props();

  let ordered = $derived(COUNTRIES.slice().sort(order));

  function handleChange(e: Event) {
    selected = (e.currentTarget as HTMLSelectElement).value;
    onselect?.(selected);
  }

  $effect(() => {
    const country = COUNTRIES.find((c) => c.iso2 === selected);
    dialCode = country?.dialCode ?? "";
  });
</script>

<div class="relative flex shrink-0 items-center">
  <ImageFlag
    country={selected ?? "us"}
    dimension="1x1"
    class="pointer-events-none absolute left-2.5 size-4 rounded-sm"
  />
  <select
    value={selected ?? ""}
    onchange={handleChange}
    aria-label="Country code"
    {disabled}
    class={cn(
      "border-input bg-input/30 focus-visible:ring-ring/50 dark:bg-input/30 focus-visible:border-ring h-9 w-fit appearance-none rounded-l-md rounded-r-none border py-1 pr-8 pl-8 text-sm transition-[color,box-shadow] focus-visible:ring-[3px] outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-background",
      disabled ? "cursor-not-allowed opacity-50" : "",
    )}
  >
    {#each ordered as country (country.id)}
      <option value={country.iso2}>
        (+{country.dialCode})
      </option>
    {/each}
  </select>
</div>
