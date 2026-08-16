<script lang="ts" module>
  /**
   * Menu de navegação entre secções do perfil em formato de badges,
   * usado em mobile no lugar da `ProfileSidebar`. Clicar num badge
   * desloca a página até à secção correspondente.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileMenuBadge items={sections} active={activeSection} onSelect={scrollToSection} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProfileNavItem } from "../types";

  let {
    items,
    active,
    isLoading = false,
    onSelect,
    className,
  }: {
    items: ProfileNavItem[];
    active?: string;
    isLoading?: boolean;
    onSelect?: (id: string) => void;
    className?: string;
  } = $props();
</script>

<div
  class="sticky top-0 z-10 -mx-4 flex gap-2 overflow-x-auto border-b bg-background/95 px-4 py-3 no-scrollbar backdrop-blur {className ?? ''}"
>
  {#if isLoading}
    {#each Array.from({ length: 3 }) as _, i (i)}
      <Skeleton class="h-8 w-28 shrink-0 rounded-full" />
    {/each}
  {:else}
    {#each items as item (item.id)}
      <button
        type="button"
        onclick={() => onSelect?.(item.id)}
        aria-current={active === item.id ? "true" : undefined}
        class="shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors {active ===
        item.id
          ? 'border-transparent bg-gradient text-white'
          : 'border-border text-muted-foreground hover:text-foreground'}"
      >
        {item.label}
      </button>
    {/each}
  {/if}
</div>
