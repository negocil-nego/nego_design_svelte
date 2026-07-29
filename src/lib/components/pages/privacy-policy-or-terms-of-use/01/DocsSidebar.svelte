<script lang="ts" module>
  /**
   * Sidebar de navegação lateral para páginas de documentação.
   * Gera os links automaticamente a partir das secções do documento.
   * Navega internamente usando âncoras (#section-id).
   *
   * @component
   * @example
   * ```svelte
   * <DocsSidebar sections={data.sections} activeId="introduction" />
   * ```
   */
</script>

<script lang="ts">
  import type { DocSection } from "../types";

  let {
    sections,
    activeId,
  }: {
    /** Secções do documento (títulos level 1 são exibidos como grupo). */
    sections: DocSection[];
    /** ID da secção atualmente visível (scroll-spy). */
    activeId?: string;
  } = $props();

  /** Achata as secções level 1 com as suas subsecções para a sidebar. */
  const flatSections = $derived(
    sections.flatMap((section) => {
      const items = [
        {
          id: section.id,
          label: section.number
            ? `${section.number}. ${section.title}`
            : section.title,
        },
      ];

      if (section.subsections) {
        for (const sub of section.subsections) {
          items.push({
            id: sub.id,
            label: sub.number
              ? `${sub.number}. ${sub.title}`
              : sub.title,
          });
        }
      }

      return items;
    }),
  );
</script>

<aside class="w-56 shrink-0 hidden lg:block">
  <nav class="sticky top-8 flex flex-col gap-1 text-sm">
    {#each flatSections as item (item.id)}
      <a
        href="#{item.id}"
        class="rounded-md px-2 py-1.5 transition-colors {activeId === item.id
          ? 'bg-muted text-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'}"
      >
        {item.label}
      </a>
    {/each}
  </nav>
</aside>
