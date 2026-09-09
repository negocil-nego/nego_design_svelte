<script lang="ts">
  import { Copy01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { DocProp } from "$lib/docs/components";

  let { code, title = "Example" }: { code: string; title?: string } = $props();

  function copy() {
    navigator.clipboard?.writeText(code);
  }
</script>

<div class="overflow-hidden rounded-lg border border-border">
  <div class="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2">
    <span class="text-xs font-medium text-muted-foreground">{title}</span>
    <button
      type="button"
      onclick={copy}
      class="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
    >
      <HugeiconsIcon icon={Copy01Icon} class="size-3.5" />
      Copy
    </button>
  </div>
  <pre class="overflow-x-auto p-4 text-xs leading-relaxed"><code>{code}</code></pre>
</div>
