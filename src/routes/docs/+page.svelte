<script lang="ts">
  import {
    FrameIcon,
    LanguageCircleIcon,
    Moon01Icon,
    PaintBoardIcon,
    Rocket01Icon,
    SquareLock02Icon,
    ArrowRight02Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import DocsHeader from "$lib/docs/DocsHeader.svelte";
  import CodeBlock from "$lib/docs/CodeBlock.svelte";

  const installCode = `npm install negodesign`;

  const cssCode = `// app.css or +layout.svelte
import "negodesign/styles.css";
import "negodesign/styles/fonts.css"; // optional, if you ship the default fonts

// Tailwind v4 is not required, but heavily recommended
import "@tailwindcss/vite";`;

  const adminSectionCode = `<script lang="ts">
  import { AdminSection } from "negodesign";
  import {
    DashboardSquare01Icon,
    Money01Icon,
    Analytics01Icon,
  } from "@hugeicons/core-free-icons";

  let selectedKey = $state<string | number>("overview");</script>

<AdminSection
  title="Dashboard"
  description="Monitor the key metrics of your business."
  bind:selectedKey
  onSelect={(id) => console.log("menu", id)}
  onCardClick={(id) => console.log("card", id)}
  menuItems={[
    { id: "overview", title: "Overview", icon: DashboardSquare01Icon },
    { id: "revenue", title: "Revenue", icon: Money01Icon },
    { id: "analytics", title: "Analytics", icon: Analytics01Icon },
  ]}
  cards={[
    {
      id: 1,
      menuId: "overview",
      icon: Money01Icon,
      value: "$84k",
      title: "Gross revenue",
      description: "Last 30 days",
    },
    {
      id: 2,
      menuId: "analytics",
      icon: Analytics01Icon,
      value: "12.4k",
      title: "Total visits",
      description: "+8% vs last week",
    },
  ]}
/>`;

  const adminUserSectionCode = `import { AdminUserSection } from "negodesign"

<AdminUserSection
  name="Sedrac"
  email="slcsedrac@gmail.com"
  avatarUrl="https://github.com/octocat.png"
  onProfile={() => console.log("profile")}
  onSettings={() => console.log("settings")}
/>`;

  const features = [
    {
      icon: PaintBoardIcon,
      title: "Copy-paste components",
      description:
        "Reusable, dependency-free components under your control. Use them as a package or copy the source.",
    },
    {
      icon: FrameIcon,
      title: "Build on Svelte 5",
      description:
        "Runes-based components with snippets, bindable props and reactive state — no deprecated legacy APIs.",
    },
    {
      icon: Rocket01Icon,
      title: "Tailwind CSS ready",
      description:
        "Powered by Tailwind CSS v4 utilities and the shadcn design language, so it fits any brand instantly.",
    },
    {
      icon: LanguageCircleIcon,
      title: "i18n first",
      description:
        "Built-in language switcher and translation helpers for building truly multilingual products.",
    },
    {
      icon: Moon01Icon,
      title: "Dark mode",
      description:
        "Light switch and theme-aware classes out of the box, with CSS variables you can override.",
    },
    {
      icon: SquareLock02Icon,
      title: "Pages, not just widgets",
      description:
        "Complete, production-ready pages: login, admin panel, company profile, product details, and more.",
    },
  ];
</script>

<svelte:head>
  <title>Getting Started | NegoDesign</title>
  <meta
    name="description"
    content="Get started with NegoDesign — a Svelte 5 component library of accessible, copy-paste friendly UI components for building modern web applications."
  />
</svelte:head>

<DocsHeader title="Getting Started" />

<div class="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
  <section>
    <span
      class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
    >
      <HugeiconsIcon icon={PaintBoardIcon} class="size-4" />
      NegoDesign
    </span>
    <h1 class="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
      Build beautiful interfaces faster
    </h1>
    <p class="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
      NegoDesign is an open-source Svelte 5 component library with the familiar
      <a class="font-medium text-primary underline underline-offset-4" href="/docs/components">shadcn</a>
      workflow. Components are built with Tailwind CSS, use the
      <code class="rounded bg-muted px-1.5 py-0.5 text-sm">cn()</code>
      utility, and ship as plain <code class="rounded bg-muted px-1.5 py-0.5 text-sm">.svelte</code>
      files you own — no lock-in.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a
        href="/docs/installation"
        class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        <HugeiconsIcon icon={Rocket01Icon} class="size-4" />
        Get started
      </a>
      <a
        href="/docs/components"
        class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold transition hover:bg-muted"
      >
        Browse components
        <HugeiconsIcon icon={ArrowRight02Icon} class="size-4" />
      </a>
    </div>

    <div class="mt-16 grid gap-6 md:grid-cols-3">
      <div class="rounded-xl border border-border bg-card p-5">
        <h2 class="text-sm font-semibold">Install</h2>
        <CodeBlock code={installCode} title="npm" />
      </div>
      <div class="rounded-xl border border-border bg-card p-5 md:col-span-2">
        <h2 class="text-sm font-semibold">Import the styles</h2>
        <CodeBlock code={cssCode} title="global.css" />
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-5 md:col-span-3">
        <div class="flex items-center gap-2 text-sm font-medium">
          <HugeiconsIcon icon={PaintBoardIcon} class="size-4 text-primary" />
          Copy-paste friendly
        </div>
        <p class="mt-2 text-sm text-muted-foreground">
          Every component ships through the package exports (
          <code class="rounded bg-muted px-1 py-0.5">negodesign</code>,
          <code class="rounded bg-muted px-1 py-0.5">negodesign/types</code>,
          <code class="rounded bg-muted px-1 py-0.5">negodesign/i18n</code> and
          <code class="rounded bg-muted px-1 py-0.5">negodesign/styles.css</code>), so you can consume
          them exactly like any other library — or copy the source into your project and customize it.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16">
    <div class="flex items-end justify-between">
      <div>
        <h2 class="text-2xl font-bold">What ships with NegoDesign</h2>
        <p class="mt-2 text-sm text-muted-foreground">
          Low-level UI primitives and high-level, business-ready composite components.
        </p>
      </div>
      <a
        href="/docs/components"
        class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        View all
        <HugeiconsIcon icon={ArrowRight02Icon} class="size-4" />
      </a>
    </div>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as feature (feature.title)}
        <div class="rounded-xl border border-border bg-card p-5 transition hover:border-primary/40">
          <span class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={feature.icon} class="size-5" />
          </span>
          <h3 class="mt-4 text-sm font-semibold">{feature.title}</h3>
          <p class="mt-1 text-sm text-muted-foreground">{feature.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-16">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">New: AdminSection</h2>
      <a
        href="/docs/admin-section"
        class="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary hover:bg-primary/20"
      >
        Docs
        <HugeiconsIcon icon={ArrowRight02Icon} class="size-3" />
      </a>
      <a
        href="/admin/section"
        class="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
      >
        Live demo
        <HugeiconsIcon icon={ArrowRight02Icon} class="size-3" />
      </a>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      A section for admin areas with a background container, a top navigation bar
      (brand + menu tabs), a logged-in user avatar and a responsive grid of cards.
      Define the menu with
      <code class="rounded bg-muted px-1 py-0.5">menuItems</code> and the cards
      with <code class="rounded bg-muted px-1 py-0.5">cards</code>. Cards can be
      filtered per menu via <code class="rounded bg-muted px-1 py-0.5">menuId</code>.
      The avatar uses <a
        href="/docs/admin-user-section"
        class="font-medium text-primary underline underline-offset-4"
        >AdminUserSection</a
      >, which opens a profile dropdown on hover.
    </p>
    <div class="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminSection</h3>
      <CodeBlock code={adminSectionCode} title="AdminSection.svelte" />
    </div>
    <div class="mt-4 rounded-xl border border-border bg-card p-5">
      <h3 class="text-sm font-semibold">AdminUserSection</h3>
      <CodeBlock code={adminUserSectionCode} title="AdminUserSection.svelte" />
    </div>
  </section>

  <section class="mt-16">
    <h2 class="text-2xl font-bold">Next steps</h2>
    <ol class="mt-4 list-decimal space-y-3 pl-5 text-sm text-muted-foreground">
      <li><a class="font-medium text-primary hover:underline" href="/docs/installation">Install NegoDesign</a> and import the styles.</li>
      <li>Pick a component from the <a class="font-medium text-primary hover:underline" href="/docs/components">component index</a>.</li>
      <li>Copy its example and render it on the shared <a class="font-medium text-primary hover:underline" href="/">demo pages</a>.</li>
    </ol>
  </section>
</div>