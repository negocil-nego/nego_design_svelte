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
    /** Lista de códigos visíveis (whitelist) — vazio: todos */
    visibles?: string[];
    /** Exibe a opção "Todos" como primeira célula do grid */
    isOptionAll?: boolean;
    /** Exibe o botão "Mais opções" como última célula, que abre o painel num modal */
    isExpand?: boolean;
    /** Callback disparado ao clicar no botão "Todos" — recebe a seleção resultante */
    onClickButtonAll?: (values: string[]) => void;
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
    visibles,
    isOptionAll = false,
    isExpand = false,
    onClickButtonAll,
  }: GridLanguageProps = $props();

  const languageItems = $derived(
    (items ??
      Object.entries(languageFlagMap).map(([code, country]) => ({
        value: code,
        label: $t(`language.${code}`),
        country,
      }))).filter(
      (item) => !visibles?.length || visibles.includes(String(item.value)),
    ),
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
  {isOptionAll}
  {isExpand}
  expandTitle={$t("label.languages")}
  {onClickButtonAll}
/>