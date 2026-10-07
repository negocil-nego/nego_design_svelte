<script lang="ts" module>
  import type { SelectOption } from "$lib/components/ui/form/ui/input-select.svelte";

  export type SelectCountryProps = {
    /** Valor selecionado (bindable) — modo seleção única */
    value?: string;
    /** Valores selecionados (bindable) — modo seleção múltipla */
    values?: string[];
    /** Permite selecionar vários países */
    multiple?: boolean;
    /** Rótulo do campo */
    label?: string;
    /** Classe CSS do rótulo */
    labelClass?: string;
    /** Classe CSS do input */
    inputClass?: string;
    /** Mostra o label do campo */
    isLabel?: boolean;
    /** Mostra o ícone de pesquisa à esquerda */
    isIcon?: boolean;
    /** Texto de exemplo do campo */
    placeholder?: string;
    /** Desabilita o campo */
    disabled?: boolean;
    /** Classe CSS de cada opção do dropdown */
    optionClass?: string;
    /** Texto exibido quando a busca não encontra resultados */
    emptyLabel?: string;
    /** Idioma das traduções (padrão: idioma global da app) */
    locale?: string;
  };
</script>

<script lang="ts">
  import InputSelect from "$lib/components/ui/form/ui/input-select.svelte";
  import { COUNTRIES } from "$lib/components/ui/image/flag-map";
  import { translateCountry } from "$lib/components/ui/image/country-translate";
  import { locale } from "$lib/i18n";

  let {
    value = $bindable(""),
    values = $bindable([] as string[]),
    multiple = false,
    label,
    labelClass,
    inputClass,
    isLabel = true,
    isIcon = false,
    placeholder = "Select a country...",
    disabled = false,
    optionClass = "",
    emptyLabel = "No countries found",
    locale: localeProp,
  }: SelectCountryProps = $props();

  const activeLocale = $derived(localeProp ?? $locale);

  const countryOptions = $derived(
    COUNTRIES.map((c) => ({
      value: c.iso2,
      label: translateCountry(c.iso2, activeLocale),
      country: c.iso2,
    })),
  );
</script>

<InputSelect
  bind:value
  bind:values
  {multiple}
  {label}
  {labelClass}
  {inputClass}
  {isLabel}
  {isIcon}
  {placeholder}
  {disabled}
  {optionClass}
  {emptyLabel}
  options={countryOptions}
/>