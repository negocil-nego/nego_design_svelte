<script lang="ts" module>
  import type { ItemGridBadge } from "$lib/components/ui/grid/core/types";

  export type GridCountryProps = {
    /** Itens personalizados (padrão: todos os países de `COUNTRIES`) */
    items?: ItemGridBadge[];
    /** Orientação do conteúdo do item: horizontal (padrão) ou vertical */
    orientation?: "horizontal" | "vertical";
    /** Classe CSS personalizada para a bandeira/imagem */
    imageClass?: string;
    /** Classe CSS personalizada para o ícone */
    iconClass?: string;
    /** Classe CSS personalizada para o label */
    labelClass?: string;
    /** Classe CSS personalizada para o estado ativo */
    activeClass?: string;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Classe CSS adicional do item */
    itemClass?: string;
    /** Exibe borda inferior no grid */
    isBorderInline?: boolean;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Chave do item ativo/menu */
    menuKey?: string;
    /** Países selecionados a apresentar/ativos (bindable) */
    selecteds?: string[];
    /** Estilo do item: BORDER | INLINE | DEFAULT */
    itemStyle?: "BORDER" | "INLINE" | "DEFAULT";
    /** Callback ao clicar num item */
    onClick?: (value: string | number) => void;
    /** Idioma das traduções (padrão: idioma global da app) */
    locale?: string;
  };
</script>

<script lang="ts">
  import GridBadge from "$lib/components/ui/grid/core/badge/ui/GridBadge.svelte";
  import { COUNTRIES } from "$lib/components/ui/image/flag-map";
  import { translateCountry } from "$lib/components/ui/image/country-translate";
  import { locale } from "$lib/i18n";

  let {
    items,
    locale: localeProp,
    orientation = "horizontal",
    imageClass,
    iconClass,
    labelClass,
    activeClass,
    isLoading = false,
    itemClass,
    isBorderInline = false,
    gridClass,
    menuKey,
    selecteds = $bindable([] as string[]),
    itemStyle = "DEFAULT",
    onClick,
  }: GridCountryProps = $props();

  const activeLocale = $derived(localeProp ?? $locale);

  const countryItems = $derived(
    items ??
      COUNTRIES.map((c) => ({
        value: c.iso2,
        label: translateCountry(c.iso2, activeLocale),
        country: c.iso2,
      })),
  );
</script>

<GridBadge
  items={countryItems}
  {orientation}
  {imageClass}
  {iconClass}
  {labelClass}
  {activeClass}
  {isLoading}
  {itemClass}
  {isBorderInline}
  {gridClass}
  {menuKey}
  bind:selecteds
  {itemStyle}
  {onClick}
/>