<script lang="ts" module>
  import type { SelectOption } from "$lib/components/ui/form/ui/input-select.svelte";

  export type SelectLanguageProps = {
    /** Valor selecionado (bindable) — modo seleção única */
    value?: string;
    /** Valores selecionados (bindable) — modo seleção múltipla */
    values?: string[];
    /** Idiomas selecionados a apresentar/ativos (bindable) — espelha `value`/`values` */
    selecteds?: string[];
    /** Permite selecionar vários idiomas */
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
  };
</script>

<script lang="ts">
  import InputSelect from "$lib/components/ui/form/ui/input-select.svelte";
  import { languageFlagMap } from "$lib/components/ui/image/flag-map";
  import { t } from "$lib/i18n";

  let {
    value = $bindable(""),
    values = $bindable([] as string[]),
    selecteds = $bindable([] as string[]),
    multiple = false,
    label,
    labelClass,
    inputClass,
    isLabel = true,
    isIcon = false,
    placeholder = "Select a language...",
    disabled = false,
    optionClass = "",
    emptyLabel = "No languages found",
  }: SelectLanguageProps = $props();

  const sameList = (a: string[], b: string[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  $effect(() => {
    if (multiple) {
      if (!sameList(selecteds, values)) values = selecteds;
    } else {
      const next = selecteds[0] ?? "";
      if (next !== value) value = next;
    }
  });

  $effect(() => {
    if (multiple) {
      if (!sameList(values, selecteds)) selecteds = values;
    } else {
      const mapped = value ? [value] : [];
      if (!sameList(mapped, selecteds)) selecteds = mapped;
    }
  });

  const languageOptions = $derived(
    Object.entries(languageFlagMap).map(([code, country]) => ({
      value: code,
      label: $t(`language.${code}`),
      country,
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
  options={languageOptions}
/>