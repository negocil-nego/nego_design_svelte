<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
      import DocsHeader from "$lib/docs/DocsHeader.svelte";
  import { categories, components, getComponentsByCategory } from "$lib/docs/components";

  function componentCount(category: string): number {
    return getComponentsByCategory(category).length;
  }
</script>

<svelte:head>
  <title>Components | NegoDesign</title>
  <meta
    name="description"
    content="Index of all NegoDesign components, organized by category: navigation, heroes, banners, cards, carousels, grids, footers, admin panels, login and full pages."
  />
</svelte:head>

<DocsHeader title="Components" />

<div class="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">Components</h1>
  <p class="mt-3 max-w-2xl text-muted-foreground">
    Reusable building blocks and ready-to-use pages, organized by category. Every entry
    documents its props, shows a copy-paste example, and links to a live demo.
  </p>

  <div class="mt-10 space-y-10">
    {#each categories as category (category)}
      {@const list = getComponentsByCategory(category)}
      {#if list.length > 0}
        <section>
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-bold">{category}</h2>
            <span class="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground">
              {list.length}
            </span>
          </div>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            {#each list as comp (comp.slug)}
              <a
                href={`/docs/${comp.slug}`}
                class="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:bg-muted/40"
              >
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-semibold text-foreground">{comp.name}</h3>
                  <ImageHugeicons icon="arrow-right-01" class="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p class="mt-2 line-clamp-3 text-sm text-muted-foreground">{comp.description}</p>
                <code class="mt-4 block truncate rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
                  {comp.importPath}
                </code>
              </a>
            {/each}
          </div>
        </section>
      {/if}
    {/each}
  </div>
</div>