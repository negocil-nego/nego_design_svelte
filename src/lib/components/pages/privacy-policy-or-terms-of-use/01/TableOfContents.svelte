<script lang="ts" module>
  /**
   * Painel de tabela de conteúdos (TOC) com scroll-spy.
   * Exibe links para as secções do documento com destaque na secção ativa.
   * @component
   * @example
   * ```svelte
   * <TableOfContents items={tocItems} activeId="introduction" />
   * ```
   */
</script>

<script lang="ts">
  import type { TocItem } from "../types";

  let { items, activeId }: { items: TocItem[]; activeId?: string } = $props();
</script>

<aside class="w-56 shrink-0 hidden xl:block">
  <nav
    aria-label="Table of contents"
    class="sticky top-8 flex flex-col gap-1 text-sm"
  >
    {#each items as item (item.id)}
      <a
        href="#{item.id}"
        class="border-l-2 py-1 transition-colors {item.level === 2
          ? 'pl-6 text-muted-foreground/80'
          : 'pl-3'} {activeId === item.id
          ? 'border-foreground text-foreground font-medium'
          : 'border-border text-muted-foreground hover:text-foreground'}"
      >
        {item.label}
      </a>
    {/each}
  </nav>
</aside>
