<script lang="ts" module>
  const DEFAULT_PROVINCES: { value: string; label: string }[] = [
    { value: "BENGO", label: "Bengo" },
    { value: "BENGUELA", label: "Benguela" },
    { value: "BIE", label: "Bié" },
    { value: "CABINDA", label: "Cabinda" },
    { value: "CUANDO", label: "Cuando" },
    { value: "CUBANGO", label: "Cubango" },
    { value: "CUANZA_NORTE", label: "Cuanza Norte" },
    { value: "CUANZA_SUL", label: "Cuanza Sul" },
    { value: "CUNENE", label: "Cunene" },
    { value: "HUAMBO", label: "Huambo" },
    { value: "HUILA", label: "Huíla" },
    { value: "ICOLO_E_BENGO", label: "Icolo e Bengo" },
    { value: "LUANDA", label: "Luanda" },
    { value: "LUNDA_NORTE", label: "Lunda Norte" },
    { value: "LUNDA_SUL", label: "Lunda Sul" },
    { value: "MALANJE", label: "Malanje" },
    { value: "MOXICO", label: "Moxico" },
    { value: "MOXICO_LESTE", label: "Moxico Leste" },
    { value: "NAMIBE", label: "Namibe" },
    { value: "UIGE", label: "Uíge" },
    { value: "ZAIRE", label: "Zaire" },
  ];
</script>

<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import InputCommand from "../../form/ui/input-command.svelte";
  import InputSelect from "../../form/ui/input-select.svelte";
  import { t } from "$lib/i18n";
  import type { SearchTourismAreaInputProps } from "../types";

  let {
    value = $bindable(""),
    provinces = DEFAULT_PROVINCES,
    provinceValues = $bindable([] as string[]),
    groups = [],
    onchange,
    onSubmit,
    onSelect,
    onLocationChange,
    onProvinceChange,
  }: SearchTourismAreaInputProps = $props();

  const responsive = useDevice();

  let prevValue = $state(value);
  let prevProvinceValues = $state(provinceValues);

  const sameList = (a: string[], b: string[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  $effect(() => {
    if (value !== prevValue) {
      prevValue = value;
      onLocationChange?.(value);
    }
    if (!sameList(provinceValues, prevProvinceValues)) {
      prevProvinceValues = provinceValues;
      onProvinceChange?.([...provinceValues]);
    }
  });

  const provinceOptions = $derived(
    provinces.map((province) => ({
      value: province.value,
      label: province.label,
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
      <div class="border-l border-gray-200 pl-1 w-44">
        <InputSelect
          bind:values={provinceValues}
          multiple
          isLabel={false}
          options={provinceOptions}
          placeholder={$t("search.filter.province")}
        />
      </div>
    {/if}
    <div class="flex gap-1 h-full pl-1">
      <button
        type="button"
        onclick={() => {
          onLocationChange?.(value);
          onProvinceChange?.([...provinceValues]);
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
