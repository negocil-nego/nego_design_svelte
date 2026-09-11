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
    />
  </div>
</div>
