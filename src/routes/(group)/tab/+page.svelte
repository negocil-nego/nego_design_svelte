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
        { item: { label: "Overview", value: "overview" }, children: overviewSnippet },
        { item: { label: "Features", value: "features" }, children: featuresSnippet },
        { item: { label: "Pricing", value: "pricing" }, children: pricingSnippet },
        { item: { label: "Reviews", value: "reviews" }, children: reviewsSnippet },
      ]}
    />
  </div>
</div>

{#snippet overviewSnippet()}
  <div class="py-4">
    <h3 class="text-lg font-bold">Overview</h3>
    <p class="mt-2 text-sm text-muted-foreground">
      This is the overview tab content. You can put any content here including
      forms, images, or other components.
    </p>
  </div>
{/snippet}

{#snippet featuresSnippet()}
  <div class="py-4">
    <h3 class="text-lg font-bold">Features</h3>
    <ul class="mt-2 list-inside list-disc text-sm text-muted-foreground">
      <li>Feature one — something great</li>
      <li>Feature two — even better</li>
      <li>Feature three — the best</li>
    </ul>
  </div>
{/snippet}

{#snippet pricingSnippet()}
  <div class="py-4">
    <h3 class="text-lg font-bold">Pricing</h3>
    <p class="mt-2 text-sm text-muted-foreground">Starting at $9.99/month</p>
  </div>
{/snippet}

{#snippet reviewsSnippet()}
  <div class="py-4">
    <h3 class="text-lg font-bold">Reviews</h3>
    <p class="mt-2 text-sm text-muted-foreground">⭐⭐⭐⭐⭐ Great product!</p>
  </div>
{/snippet}
