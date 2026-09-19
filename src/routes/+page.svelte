<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
    
  const categories = [
    {
      id: "navigation",
      title: "Navigation",
      icon: "menu-07",
      description: "Menus, navigation bars, headers and search.",
      routes: [
        { href: "/menu", label: "Menu — Complex (mega menu)" },
        { href: "/menu/link", label: "Menu — Simple links" },
        { href: "/navbar/01", label: "Navigation Bar 01" },
      ],
    },
    {
      id: "hero",
      title: "Hero",
      icon: "presentation-02",
      description: "Page heroes, static or fullscreen carousel.",
      routes: [
        { href: "/hero", label: "Simple Hero" },
        { href: "/hero/carousel", label: "Hero with Carousel" },
        { href: "/carousel/hero", label: "CarouselHero — simple menu" },
        { href: "/carousel/hero/menu", label: "CarouselHero — complex menu" },
      ],
    },
    {
      id: "sections",
      title: "Sections",
      icon: "album-01",
      description: "Reusable section layouts with titles, descriptions, grids and images.",
      routes: [
        { href: "/section/01", label: "Section01 — Cards with navigation" },
        { href: "/section/02", label: "Section02 — Image + features grid" },
        { href: "/section/03", label: "Section03 — Value propositions" },
      ],
    },
    {
      id: "banners",
      title: "Banners",
      icon: "album-01",
      description: "Campaign, ad and call-to-action banners.",
      routes: [
        { href: "/banner", label: "CTA & Notification Banners" },
        { href: "/banner/cad-add", label: "Ad Banner" },
        { href: "/banner/card-contact-cta", label: "CTA Contact Banner" },
      ],
    },
    {
      id: "cards",
      title: "Cards",
      icon: "link-01",
      description: "Media, profile, product and promotion cards.",
      routes: [
        { href: "/card/media", label: "Card Media — variant 2" },
        { href: "/card/profile", label: "Card Profile — variant 1" },
      ],
    },
    {
      id: "carousels",
      title: "Carousels",
      icon: "dashboard-circle-add",
      description: "Badges, highlights, promotions and responsive grids.",
      routes: [
        { href: "/carousel/badge", label: "Badge Carousel" },
        { href: "/carousel/highlights", label: "Highlights Carousel" },
        { href: "/carousel/promotion", label: "Promotion Carousel" },
        { href: "/carousel/grid/media", label: "Grid — Media" },
        { href: "/carousel/grid/product", label: "Grid — Product" },
        { href: "/carousel/grid/profile", label: "Grid — Profile" },
        { href: "/carousel/grid/promotion", label: "Grid — Promotion" },
      ],
    },
    {
      id: "grid",
      title: "Item Grid",
      icon: "grid-table",
      description: "Simple and panel item grids.",
      routes: [
        { href: "/grid/simple", label: "Simple Grid" },
        { href: "/grid/panel", label: "Panel Grid" },
      ],
    },
    {
      id: "modals",
      title: "Modals",
      icon: "app-window",
      description: "Overlay dialogs for selection, share, notification and more.",
      routes: [{ href: "/modal", label: "Modals — all variants" }],
    },
    {
      id: "forms",
      title: "Forms",
      icon: "form",
      description: "Responsive forms supporting every input type.",
      routes: [{ href: "/form", label: "Form — 2-column grid" }],
    },
    {
      id: "footer",
      title: "Footer",
      icon: "logout-01",
      description: "Footers with columns, newsletter and social links.",
      routes: [
        { href: "/footer", label: "Footer — default" },
        { href: "/footer/with-logo", label: "Footer — with logo" },
        { href: "/footer/inline", label: "Footer — inline" },
      ],
    },
    {
      id: "admin",
      title: "Admin Panel & Table",
      icon: "setting-07",
      description: "Admin shell, sidebar and data table.",
      routes: [
        { href: "/admin/01", label: "Admin Panel 01" },
      ],
    },
    {
      id: "login",
      title: "Login / Security",
      icon: "user",
      description: "Authentication pages with hero carousel.",
      routes: [
        { href: "/login/admin/01", label: "Login — Variant 01 (grid pattern)" },
        { href: "/login/admin/01", label: "Login — Variant 02 (hero image)" },
        { href: "/login/admin/01", label: "Login — Variant 03 (glass morphism)" },
        { href: "/register/admin/01", label: "Register — Variant 01 (grid pattern)" },
        { href: "/register/admin/01", label: "Register — Variant 02 (hero image)" },
        { href: "/register/admin/01", label: "Register — Variant 03 (glass morphism)" },
      ],
    },
    {
      id: "pages",
      title: "Full Pages",
      icon: "file-code",
      description: "Ready-to-use, production-style pages.",
      routes: [
        { href: "/company-profile", label: "Company Profile" },
        { href: "/privacy-policy-or-terms-of-use", label: "Privacy / Terms" },
        { href: "/product-details/01", label: "Product Details 01" },
        { href: "/product-details/02", label: "Product Details 02" },
        { href: "/product-details/03", label: "Product Details 03" },
        { href: "/profile-user/01", label: "Profile User 01" },
        { href: "/profile-user/02", label: "Profile User 02" },
        { href: "/profile-user/03", label: "Profile User 03" },
      ],
    },
  ];

  const totalDemos = categories.reduce((sum, c) => sum + c.routes.length, 0);
</script>

<svelte:head>
  <title>NegoDesign — Svelte 5 Component Library</title>
  <meta
    name="description"
    content="NegoDesign is an open-source Svelte 5 component library. Explore live demos of navigation, heroes, banners, cards, carousels, admin panels, login pages and more."
  />
</svelte:head>

<main class="min-h-screen bg-background text-foreground">
  <!-- Hero -->
  <section
    class="relative overflow-hidden border-b border-border bg-linear-to-br from-primary/10 via-background to-background px-6 py-16 md:py-24"
  >
    <div class="mx-auto max-w-4xl">
      <span
        class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
      >
        <ImageHugeicons icon="rocket-01" class="size-4" />
        Svelte 5 • Tailwind CSS • shadcn style
      </span>
      <h1 class="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
        Beautiful components for <span class="text-primary">Svelte</span>
      </h1>
      <p class="mt-5 max-w-2xl text-lg text-muted-foreground">
        NegoDesign is an open-source component library — reusable UI primitives
        and complete, production-ready pages. Copy them, customize them, ship
        them fast.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="/docs"
          class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          <ImageHugeicons icon="document-code" class="size-4" />
          Read the docs
        </a>
        <a
          href="/docs/components"
          class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold transition hover:bg-muted"
        >
          <ImageHugeicons icon="component" class="size-4" />
          Browse components
        </a>
        <a
          href="#demos"
          class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold transition hover:bg-muted"
        >
          <ImageHugeicons icon="link-01" class="size-4" />
          {totalDemos} live demos
        </a>
      </div>
    </div>
  </section>

  <!-- Demos -->
  <section id="demos" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-12">
    <h2 class="text-2xl font-bold md:text-3xl">Live demos</h2>
    <p class="mt-2 text-muted-foreground">
      Every category maps to a running example. Open the documentation for
      props, API reference and copy-paste snippets.
    </p>

    <div class="mt-8 space-y-8">
      {#each categories as category (category.id)}
        <article class="rounded-2xl border border-border bg-card">
          <header class="flex items-center gap-4 border-b border-border p-6">
            <span
              class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
            >
              <ImageHugeicons icon={category.icon} class="size-6" />
            </span>
            <div>
              <h3 class="text-xl font-bold">{category.title}</h3>
              <p class="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
            <a
              href="/docs/components"
              class="ms-auto hidden items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition hover:bg-muted sm:inline-flex"
            >
              Docs
              <ImageHugeicons icon="arrow-right-01" class="size-4" />
            </a>
          </header>
          <div class="flex flex-wrap gap-2 p-6">
            {#each category.routes as route (route.href)}
              <a
                href={route.href}
                class="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <ImageHugeicons icon="link-01" class="size-3.5" />
                {route.label}
              </a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-border px-6 py-8">
    <p class="text-center text-sm text-muted-foreground">
      NegoDesign — Svelte 5 component library. Browse the
      <a href="/docs" class="font-medium text-primary hover:underline"
        >documentation</a
      >
      or jump to a
      <a
        href="/docs/installation"
        class="font-medium text-primary hover:underline">clean install</a
      >.
    </p>
  </footer>
</main>
