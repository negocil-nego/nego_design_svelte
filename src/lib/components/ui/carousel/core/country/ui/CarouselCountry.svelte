<script lang="ts" module>
  import type { ItemCarousel } from "$lib/components/ui/carousel/core/types";

  export type CarouselCountryProps = {
    /** Itens personalizados (padrão: todos os países de `COUNTRIES`) */
    items?: ItemCarousel[];
    /** Orientação do layout: horizontal (padrão) ou vertical */
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
    /** Classe CSS dos botões de navegação anterior/próximo */
    btnNavClass?: string;
    /** Exibe borda inferior no carousel */
    isBorderInline?: boolean;
    /** Mostra os botões de navegação */
    showButton?: boolean;
    /** Chave do item ativo/menu */
    menuKey?: string;
    /** Estilo do item: BORDER | INLINE | DEFAULT */
    itemStyle?: "BORDER" | "INLINE" | "DEFAULT";
    /** Callback ao clicar num item */
    onClick?: (value: string | number) => void;
    /** Idioma das traduções (padrão: idioma global da app) */
    locale?: string;
  };
</script>

<script lang="ts">
  import CarouselBadge from "$lib/components/ui/carousel/core/badge/ui/CarouselBadge.svelte";
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
    btnNavClass,
    isBorderInline = false,
    showButton = true,
    menuKey,
    itemStyle = "DEFAULT",
    onClick,
  }: CarouselCountryProps = $props();

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

<CarouselBadge
  items={countryItems}
  {orientation}
  {imageClass}
  {iconClass}
  {labelClass}
  {activeClass}
  {isLoading}
  {itemClass}
  {btnNavClass}
  {isBorderInline}
  {showButton}
  {menuKey}
  {itemStyle}
  {onClick}
/>