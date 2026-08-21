<script lang="ts">
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
  import type { Snippet } from "svelte";

  let { label, children }: { label: string; children: Snippet } = $props();
</script>

<Collapsible.Root>
  <Collapsible.Trigger
    class="group flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium outline-hidden select-none hover:bg-accent focus:bg-accent data-[state=open]:bg-accent"
  >
    {label}
    <HugeiconsIcon
      icon={ArrowDown01Icon}
      strokeWidth={2}
      class="ml-auto size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
    />
  </Collapsible.Trigger>
  <Collapsible.Content class="overflow-hidden">
    {@render children()}
  </Collapsible.Content>
</Collapsible.Root>
