<script lang="ts" module>
  import type { ItemCarousel } from "$lib/components/ui/carousel/core/types";

  export type CarouselLanguageProps = {
    /** Itens personalizados (padrão: idiomas de `languageFlagMap`) */
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
  };
</script>

<script lang="ts">
  import CarouselBadge from "$lib/components/ui/carousel/core/badge/ui/CarouselBadge.svelte";
  import { languageFlagMap } from "$lib/components/ui/image/flag-map";
  import { t } from "$lib/i18n";

  let {
    items,
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
  }: CarouselLanguageProps = $props();

  const languageItems = $derived(
    items ??
      Object.entries(languageFlagMap).map(([code, country]) => ({
        value: code,
        label: $t(`language.${code}`),
        country,
      })),
  );
</script>

<CarouselBadge
  items={languageItems}
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