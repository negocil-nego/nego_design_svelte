<script lang="ts" module>
  /**
   * Barra lateral de navegação entre secções do perfil da empresa.
   * Visível apenas em ecrãs médios/grandes — em mobile usar `ProfileMenuBadge`.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileSidebar items={sections} active={activeSection} onSelect={scrollToSection} />
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

<nav aria-label="Navegação do perfil" class="w-40 shrink-0 {className ?? ''}">
  <div class="fixed top-6 flex flex-col gap-1 bg-card p-2">
    {#if isLoading}
      {#each Array.from({ length: 4 }) as _, i (i)}
        <Skeleton class="h-9 w-full rounded-md" />
      {/each}
    {:else}
      {#each items as item (item.id)}
        <button
          type="button"
          onclick={() => onSelect?.(item.id)}
          aria-current={active === item.id ? "true" : undefined}
          class="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors {active ===
          item.id
            ? 'bg-gradient text-white'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
        >
          {item.label}
        </button>
      {/each}
    {/if}
  </div>
</nav>
