<script lang="ts">
  import { TabUnderline } from "$lib";
</script>

<svelte:head>
  <title>Tabs Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">Tabs</h1>
  <p class="mt-2 text-muted-foreground">Tab component with underline style.</p>

  <div class="mt-8 rounded-xl border border-border bg-card p-6">
    <TabUnderline
      items={[
        { item: { label: "Overview", value: "overview" } },
        { item: { label: "Features", value: "features" } },
        { item: { label: "Pricing", value: "pricing" } },
        { item: { label: "Reviews", value: "reviews" } },
      ]}
      contents={{
        overview: () => `<div class="py-4"><h3 class="text-lg font-bold">Overview</h3><p class="mt-2 text-sm text-muted-foreground">This is the overview tab content. You can put any content here.</p></div>`,
        features: () => `<div class="py-4"><h3 class="text-lg font-bold">Features</h3><ul class="mt-2 list-inside list-disc text-sm text-muted-foreground"><li>Feature 1</li><li>Feature 2</li><li>Feature 3</li></ul></div>`,
        pricing: () => `<div class="py-4"><h3 class="text-lg font-bold">Pricing</h3><p class="mt-2 text-sm text-muted-foreground">Starting at $9.99/month</p></div>`,
        reviews: () => `<div class="py-4"><h3 class="text-lg font-bold">Reviews</h3><p class="mt-2 text-sm text-muted-foreground">⭐⭐⭐⭐⭐ Great product!</p></div>`,
      }}
    />
  </div>
</div>
