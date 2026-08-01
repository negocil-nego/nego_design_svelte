<script lang="ts" module>
  /**
   * Renders the breadcrumb navigation (e.g., Blog / Current).
   * @component
   * @example
   * ```svelte
   * <PrivacyPolicyOrTermsOfUseBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Current" }]} />
   * ```
   */
</script>

<script lang="ts">
  import type { BreadcrumbItem } from "../types";

  let { items }: { items: BreadcrumbItem[] } = $props();
</script>

<nav
  aria-label="Breadcrumb"
  class="flex items-center gap-1.5 text-sm text-muted-foreground"
>
  {#each items as item, i (item.label)}
    {#if item.href}
      <a href={item.href} class="hover:text-foreground transition-colors"
        >{item.label}</a
      >
    {:else}
      <span class="text-foreground font-medium">{item.label}</span>
    {/if}
    {#if i < items.length - 1}
      <span class="select-none">/</span>
    {/if}
  {/each}
</nav>
