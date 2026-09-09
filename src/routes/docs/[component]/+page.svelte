<script lang="ts">
  import { page } from "$app/state";
  import { ArrowRight02Icon, FileCodeIcon, Link01Icon, FileEmpty01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import DocsHeader from "$lib/docs/DocsHeader.svelte";
  import CodeBlock from "$lib/docs/CodeBlock.svelte";
  import ApiTable from "$lib/docs/ApiTable.svelte";
  import { getComponent, type DocComponent } from "$lib/docs/components";

  const slug = $derived(page.params.component);

  const component: DocComponent | undefined = $derived(getComponent(slug ?? ""));

  const importStatement = $derived.by(() => {
    if (!component) return "";
    const names = component.importPath
      .split("|")
      .map((n) => n.trim())
      .filter(Boolean);
    return `import { ${names.join(", ")} } from "negodesign";`;
  });
</script>

<svelte:head>
  {#if component}
    <title>{component.name} | NegoDesign</title>
    <meta name="description" content={component.description} />
  {:else}
    <title>Component not found | NegoDesign</title>
  {/if}
</svelte:head>

<DocsHeader title={component?.name ?? "Not found"} />

<div class="mx-auto w-full max-w-3xl px-4 py-10 md:px-8">
  {#if !component}
    <div class="rounded-xl border border-border bg-card p-10 text-center">
      <HugeiconsIcon icon={FileEmpty01Icon} class="mx-auto size-10 text-muted-foreground" />
      <h1 class="mt-4 text-xl font-bold">Component not found</h1>
      <p class="mt-2 text-sm text-muted-foreground">
        <code class="rounded bg-muted px-1 py-0.5">{slug}</code> is not documented yet.
      </p>
      <a
        href="/docs/components"
        class="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
      >
        Browse components
        <HugeiconsIcon icon={ArrowRight02Icon} class="size-4" />
      </a>
    </div>
  {:else}
    <div class="flex flex-wrap items-center gap-2">
      <span class="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        <HugeiconsIcon icon={FileCodeIcon} class="size-4" />
        {component.category}
      </span>
      <code class="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">{component.path}</code>
    </div>

    <h1 class="mt-4 text-3xl font-extrabold tracking-tight">{component.name}</h1>
    <p class="mt-3 text-muted-foreground">{component.description}</p>

    {#if component.examples.length > 0}
      <section class="mt-12">
        <h2 class="text-xl font-bold">Usage</h2>
        <p class="mt-1 text-sm text-muted-foreground">
          Import and render the component. Each example below is a complete, working snippet.
        </p>
        <div class="mt-4 space-y-6">
          <CodeBlock code={importStatement} title="Import" />
          {#each component.examples as example, i (i)}
            <CodeBlock code={example.code} title={example.title} />
          {/each}
        </div>
        {#if component.examples[0]?.href}
          <a
            href={component.examples[0].href}
            class="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold transition hover:border-primary/50 hover:bg-muted"
          >
            <HugeiconsIcon icon={Link01Icon} class="size-4" />
            Open live demo
          </a>
        {/if}
      </section>
    {/if}

    <section class="mt-12">
      <h2 class="text-xl font-bold">API Reference</h2>
      <p class="mt-1 text-sm text-muted-foreground">
        All props accepted by <code class="rounded bg-muted px-1 py-0.5 text-sm">{component.name}</code>.
      </p>
      <div class="mt-4 rounded-lg border border-border bg-card">
        <ApiTable props={component.props} />
      </div>
    </section>
  {/if}
</div>