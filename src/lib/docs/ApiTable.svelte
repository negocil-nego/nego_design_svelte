<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { DocProp } from "$lib/docs/components";
    
  let { props }: { props: DocProp[] } = $props();
</script>

<div class="overflow-x-auto">
  <table class="min-w-full text-sm">
    <thead>
      <tr class="border-b border-border text-left">
        <th class="px-3 py-2 font-semibold">Prop</th>
        <th class="px-3 py-2 font-semibold">Type</th>
        <th class="px-3 py-2 font-semibold">Default</th>
        <th class="px-3 py-2 font-semibold">Description</th>
      </tr>
    </thead>
    <tbody>
      {#each props as prop (prop.name)}
        <tr class="border-b border-border/60 align-top">
          <td class="px-3 py-2 font-mono text-xs font-medium text-primary">
            {prop.name}
            {#if prop.required}
              <ImageHugeicons icon="checkmark-circle-02" class="inline size-3 text-destructive" />
            {/if}
          </td>
          <td class="px-3 py-2 font-mono text-xs text-muted-foreground">{prop.type}</td>
          <td class="px-3 py-2 font-mono text-xs text-muted-foreground">
            {prop.default ?? "—"}
          </td>
          <td class="px-3 py-2 text-xs text-muted-foreground">
            {prop.description}
            {#if prop.required}
              <span class="font-medium text-destructive"> (required)</span>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
