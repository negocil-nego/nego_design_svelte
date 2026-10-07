<script lang="ts" module>
  import type {
    CommandGroup,
    CommandItem,
  } from "$lib/components/ui/form/ui/input-command.svelte";

  export type SearchLanguageCountryProps = {
    /** Valor do input de busca (bindable) */
    value?: string;
    /** Grupos de sugestões para o InputCommand (padrão: Idiomas + Países) */
    groups?: CommandGroup[];
    /** País selecionado no filtro (bindable) */
    country?: string;
    /** Países selecionados no filtro múltiplo (bindable) */
    countryValues?: string[];
    /** Idioma selecionado no filtro (bindable) */
    language?: string;
    /** Idiomas selecionados no filtro múltiplo (bindable) */
    languageValues?: string[];
    /** Permite seleção múltipla nos filtros */
    multiple?: boolean;
    /** Mostra os filtros de Idioma e País (desktop) */
    showFilters?: boolean;
    /** Callback ao alterar o valor do input */
    onchange?: (value: string) => void;
    /** Callback ao submeter a busca (Enter ou botão) */
    onSubmit?: (value: string) => void;
    /** Callback ao selecionar um item do InputCommand */
    onSelect?: (item: CommandItem) => void;
    /** Callback ao mudar o filtro de país */
    onCountryChange?: (value: string) => void;
    /** Callback ao mudar o filtro de idioma */
    onLanguageChange?: (value: string) => void;
  };
</script>

<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import InputCommand from "../../form/ui/input-command.svelte";
  import SelectCountry from "../../form/ui/SelectCountry.svelte";
  import SelectLanguage from "../../form/ui/SelectLanguage.svelte";
  import { COUNTRIES, languageFlagMap } from "../../image/flag-map";
  import { translateCountry } from "../../image/country-translate";
  import { t, locale } from "$lib/i18n";

  let {
    value = $bindable(""),
    groups,
    country = $bindable(""),
    countryValues = $bindable([] as string[]),
    language = $bindable(""),
    languageValues = $bindable([] as string[]),
    multiple = false,
    showFilters = true,
    onchange,
    onSubmit,
    onSelect,
    onCountryChange,
    onLanguageChange,
  }: SearchLanguageCountryProps = $props();
  const responsive = useDevice();

  let prevCountry = $state(country);
  let prevLanguage = $state(language);

  $effect(() => {
    if (country !== prevCountry) {
      prevCountry = country;
      onCountryChange?.(country);
    }
    if (language !== prevLanguage) {
      prevLanguage = language;
      onLanguageChange?.(language);
    }
  });

  const commandGroups = $derived(
    groups ??
      [
        {
          label: $t("label.languages"),
          items: Object.entries(languageFlagMap).map(([code]) => ({
            id: `language:${code}`,
            label: $t(`language.${code}`),
          })),
        },
        {
          label: $t("label.countries"),
          items: COUNTRIES.map((c) => ({
            id: `country:${c.iso2}`,
            label: translateCountry(c.iso2, $locale),
            description: c.name,
          })),
        },
      ] as CommandGroup[],
  );
</script>

<div class="w-full md:flex md:flex-col justify-end items-end gap-2 relative">
  <div
    class="flex items-center gap-2 px-2 w-full py-3 rounded-2xl bg-gray-100 dark:bg-slate-900 relative"
  >
    <div class="flex flex-1 items-center gap-1">
      <InputCommand
        bind:value
        groups={commandGroups}
        placeholder={$t("search.input.placeholder")}
        onSelect={(item) => {
          onchange?.(item.label);
          onSelect?.(item);
        }}
      />
    </div>
    {#if showFilters && !responsive.isMobile}
      <div class="border-l border-gray-200 pl-1 w-36">
        <SelectLanguage
          bind:value={language}
          bind:values={languageValues}
          {multiple}
          isLabel={false}
          placeholder={$t("search.filter.language")}
        />
      </div>
      <div class="border-l border-gray-200 pl-1 w-40">
        <SelectCountry
          bind:value={country}
          bind:values={countryValues}
          {multiple}
          isLabel={false}
          placeholder={$t("search.filter.country")}
        />
      </div>
    {/if}
    <div class="flex gap-1 h-full pl-1">
      <button
        type="button"
        onclick={() => {
          onCountryChange?.(country);
          onLanguageChange?.(language);
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