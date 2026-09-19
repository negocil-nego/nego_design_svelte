<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
      import DocsHeader from "$lib/docs/DocsHeader.svelte";
  import CodeBlock from "$lib/docs/CodeBlock.svelte";

  const installCode = `npm install negodesign`;

  const viteSetup = `// vite.config.ts
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()]
});`;

  const cssSetup = `/* src/app.css */
@import "tailwindcss";
@import "negodesign/styles.css";`;

  const layoutSetup = `<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import "../app.css";
  let { children } = $props();
${"</" + "script>"}

{@render children()}`;

  const usageCode = `<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { Menu } from "negodesign";
  import { Home01Icon } from "@hugeicons/core-free-icons";

  const links = [
    { label: "Home", url: "/", icon: Home01Icon },
    { label: "Accommodation", url: "/accommodation", icon: Hotel01Icon },
  ];
${"</" + "script>"}

<Menu isBorder navMenu={{ links }} />`;

  const exports = [
    { path: "negodesign", description: "All components and utilities" },
    { path: "negodesign/styles.css", description: "Compiled global styles (tokens, base, theme)" },
    { path: "negodesign/types", description: "Shared TypeScript types" },
    { path: "negodesign/i18n", description: "Translation helpers and dictionaries" },
    { path: "negodesign/<component>.svelte", description: "Single component file import" },
  ];
</script>

<svelte:head>
  <title>Installation | NegoDesign</title>
  <meta
    name="description"
    content="Install NegoDesign into a Svelte 5 or SvelteKit project. Package exports, Tailwind CSS v4 setup and first usage guide."
  />
</svelte:head>

<DocsHeader title="Installation" />

<div class="mx-auto w-full max-w-3xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">Installation</h1>
  <p class="mt-3 text-muted-foreground">
    NegoDesign works with any Svelte 5 application and is optimized for SvelteKit. It
    requires no runtime JavaScript framework — just <code class="rounded bg-muted px-1 py-0.5 text-sm">svelte</code>
    as a peer dependency.
  </p>

  <section class="mt-10">
    <h2 class="flex items-center gap-2 text-xl font-bold">
      <ImageHugeicons icon="package" class="size-5 text-primary" />
      Install the package
    </h2>
    <p class="mt-2 text-sm text-muted-foreground">
      Unless you are developing NegoDesign itself, install it as a regular dependency:
    </p>
    <div class="mt-4">
      <CodeBlock code={installCode} title="terminal" />
    </div>
  </section>

  <section class="mt-10">
    <h2 class="flex items-center gap-2 text-xl font-bold">
      <ImageHugeicons icon="sparkles" class="size-5 text-primary" />
      Set up Tailwind CSS v4
    </h2>
    <p class="mt-2 text-sm text-muted-foreground">
      The components rely on the shadcn design tokens and Tailwind utilities. Add the
      Vite plugin and import the compiled stylesheet:
    </p>
    <div class="mt-4 space-y-4">
      <CodeBlock code={viteSetup} title="vite.config.ts" />
      <CodeBlock code={cssSetup} title="src/app.css" />
      <CodeBlock code={layoutSetup} title="src/routes/+layout.svelte" />
    </div>
  </section>

  <section class="mt-10">
    <h2 class="flex items-center gap-2 text-xl font-bold">
      <ImageHugeicons icon="app-window" class="size-5 text-primary" />
      Use a component
    </h2>
    <div class="mt-4">
      <CodeBlock code={usageCode} title="+page.svelte" />
    </div>
  </section>

  <section class="mt-10">
    <h2 class="text-xl font-bold">Package exports</h2>
    <div class="mt-4 overflow-hidden rounded-lg border border-border">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="border-b border-border bg-muted/40 text-left">
            <th class="px-4 py-2 text-xs font-semibold uppercase tracking-wider">Export</th>
            <th class="px-4 py-2 text-xs font-semibold uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody>
          {#each exports as item (item.path)}
            <tr class="border-b border-border/60 align-top last:border-0">
              <td class="px-4 py-2 font-mono text-xs font-medium text-primary">{item.path}</td>
              <td class="px-4 py-2 text-xs text-muted-foreground">{item.description}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <div class="mt-12 flex items-center justify-between border-t border-border pt-6">
    <a href="/docs" class="text-sm font-medium text-muted-foreground hover:text-foreground">← Getting Started</a>
    <a
      href="/docs/components"
      class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
    >
      Browse components
      <ImageHugeicons icon="arrow-right-01" class="size-4" />
    </a>
  </div>
</div>