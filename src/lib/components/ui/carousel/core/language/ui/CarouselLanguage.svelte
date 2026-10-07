
<script lang="ts" module>
  import type { ItemCarousel } from "$lib/components/ui/carousel/core/types";

  export type CarouselLanguageProps = {
    /** Itens personalizados (padrão: idiomas de `languageFlagMap`) */
    items?: ItemCarousel[];
    /** Orientação do layout: horizontal (padrão) ou vertical */
    orientation?: "horizontal" | "vertical";
    /** Classe CSS personalizada para a bandeira/imagem (padrão: `size-3 md:size-6 rounded-md`) */
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
    /** Idiomas selecionados a apresentar/ativos (bindable) */
    selecteds?: string[];
    /** Estilo do item: BORDER | INLINE | DEFAULT */
    itemStyle?: "BORDER" | "INLINE" | "DEFAULT";
    /** Callback ao clicar num item */
    onClick?: (value: string | number) => void;
    /** Lista de códigos visíveis (whitelist) — vazio: todos */
    visibles?: string[];
    /** Exibe a opção "Todos" fixa no início (fora do scroll) */
    isOptionAll?: boolean;
    /** Exibe o botão "Mais opções" fixo no fim, que abre o painel num modal */
    isExpand?: boolean;
    /** Callback disparado ao clicar no botão "Todos" — recebe a seleção resultante */
    onClickButtonAll?: (values: string[]) => void;
  };
</script>

<script lang="ts">
  import CarouselBadge from "$lib/components/ui/carousel/core/badge/ui/CarouselBadge.svelte";
  import { languageFlagMap } from "$lib/components/ui/image/flag-map";
  import { t } from "$lib/i18n";

  let {
    items,
    orientation = "horizontal",
    imageClass = "size-3 md:size-6 rounded-md",
    iconClass,
    labelClass,
    activeClass,
    isLoading = false,
    itemClass,
    btnNavClass,
    isBorderInline = false,
    showButton = true,
    menuKey,
    selecteds = $bindable([] as string[]),
    itemStyle = "DEFAULT",
    onClick,
    visibles,
    isOptionAll = false,
    isExpand = false,
    onClickButtonAll,
  }: CarouselLanguageProps = $props();

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
  bind:selecteds
  {itemStyle}
  {onClick}
  {isOptionAll}
  {isExpand}
  expandTitle={$t("label.languages")}
  {onClickButtonAll}
/>