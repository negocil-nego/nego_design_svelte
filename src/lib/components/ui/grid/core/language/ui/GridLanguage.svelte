<script lang="ts" module>
  import type { ItemGridBadge } from "$lib/components/ui/grid/core/types";

  export type GridLanguageProps = {
    /** Itens personalizados (padrão: idiomas de `languageFlagMap`) */
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
    /** Idiomas selecionados a apresentar/ativos (bindable) */
    selecteds?: string[];
    /** Estilo do item: BORDER | INLINE | DEFAULT */
    itemStyle?: "BORDER" | "INLINE" | "DEFAULT";
    /** Callback ao clicar num item */
    onClick?: (value: string | number) => void;
  };
</script>

<script lang="ts">
  import GridBadge from "$lib/components/ui/grid/core/badge/ui/GridBadge.svelte";
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
    isBorderInline = false,
    gridClass,
    menuKey,
    selecteds = $bindable([] as string[]),
    itemStyle = "DEFAULT",
    onClick,
  }: GridLanguageProps = $props();

  const languageItems = $derived(
    items ??
      Object.entries(languageFlagMap).map(([code, country]) => ({
        value: code,
        label: $t(`language.${code}`),
        country,
      })),
  );
</script>

<GridBadge
  items={languageItems}
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