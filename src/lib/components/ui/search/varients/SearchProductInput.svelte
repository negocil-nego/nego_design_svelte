<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import InputCommand from "../../form/ui/input-command.svelte";
  import InputSelect from "../../form/ui/input-select.svelte";
  import { t } from "$lib/i18n";
  import type { SearchProductInputProps } from "../types";

  let {
    value = $bindable(""),
    priceMin = $bindable(null),
    priceMax = $bindable(null),
    organizations = [],
    organizationValues = $bindable([] as string[]),
    groups = [],
    onchange,
    onSubmit,
    onSelect,
    onLocationChange,
    onPriceChange,
    onOrganizationChange,
  }: SearchProductInputProps = $props();

  const responsive = useDevice();

  let prevValue = $state(value);
  let prevPriceMin = $state(priceMin);
  let prevPriceMax = $state(priceMax);
  let prevOrganizationValues = $state(organizationValues);

  const sameList = (a: string[], b: string[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  $effect(() => {
    if (value !== prevValue) {
      prevValue = value;
      onLocationChange?.(value);
    }
    if (priceMin !== prevPriceMin || priceMax !== prevPriceMax) {
      prevPriceMin = priceMin;
      prevPriceMax = priceMax;
      onPriceChange?.(priceMin, priceMax);
    }
    if (!sameList(organizationValues, prevOrganizationValues)) {
      prevOrganizationValues = organizationValues;
      onOrganizationChange?.([...organizationValues]);
    }
  });

  const organizationOptions = $derived(
    organizations.map((organization) => ({
      value: organization.name,
      label: organization.name,
    })),
  );
</script>

<div class="w-full md:flex md:flex-col justify-end items-end gap-2 relative">
  <div
    class="flex items-center gap-2 px-2 w-full py-3 rounded-2xl bg-gray-100 dark:bg-slate-900 relative"
  >
    <div class="flex flex-1 items-center gap-1">
      <InputCommand
        bind:value
        {groups}
        placeholder={$t("search.filter.location")}
        onSelect={(item) => {
          onchange?.(item.label);
          onSelect?.(item);
        }}
      />
    </div>
    {#if !responsive.isMobile}
      <div class="border-l border-gray-200 pl-1 w-24">
        <input
          type="number"
          inputmode="decimal"
          class="w-full min-w-0 bg-transparent text-sm py-3 px-0 border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent text-foreground placeholder:text-muted-foreground"
          placeholder={$t("search.filter.price.min")}
          bind:value={priceMin}
        />
      </div>
      <div class="border-l border-gray-200 pl-1 w-24">
        <input
          type="number"
          inputmode="decimal"
          class="w-full min-w-0 bg-transparent text-sm py-3 px-0 border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent text-foreground placeholder:text-muted-foreground"
          placeholder={$t("search.filter.price.max")}
          bind:value={priceMax}
        />
      </div>
      <div class="border-l border-gray-200 pl-1 w-44">
        <InputSelect
          bind:values={organizationValues}
          multiple
          isLabel={false}
          options={organizationOptions}
          placeholder={$t("search.filter.organization")}
        />
      </div>
    {/if}
    <div class="flex gap-1 h-full pl-1">
      <button
        type="button"
        onclick={() => {
          onLocationChange?.(value);
          onPriceChange?.(priceMin, priceMax);
          onOrganizationChange?.([...organizationValues]);
          onSubmit?.(value);
        }}
        class="flex justify-center items-center cursor-pointer p-1.5 bg-gradient text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
        aria-label="Pesquisar"
      >
        <span class="mr-2">{$t("label.search")}</span>
        <i class="hgi hgi-stroke hgi-rounded hgi-search-01 leading-none"></i>
      </button>
    </div>
  </div>
</div>
