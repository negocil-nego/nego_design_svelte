<script lang="ts">
  import * as UnderlineTabs from "../../../ui/underline-tabs";
  import type { TabProps } from "../data/TabModel";

  type Props = {
    items?: TabProps[];
    className?: string;
  };

  let { items = [], className }: Props = $props();

  let activeValue = $state<string>("");

  let currentActiveValue = $derived(
    activeValue || (items.length > 0 ? items[0].item.value : ""),
  );

  let selected = $derived(
    items.find((it) => it.item.value === currentActiveValue) || items[0],
  );
</script>

{#if items && items.length > 0 && selected}
  <UnderlineTabs.Root
    value={currentActiveValue}
    onValueChange={(val) => (activeValue = val)}
    class="mb-5 {className}"
  >
    <UnderlineTabs.List>
      {#each items as it (it.item.value)}
        <UnderlineTabs.Trigger
          value={it.item.value}
          class="text-lg md:text-base"
        >
          {it.item.label}
        </UnderlineTabs.Trigger>
      {/each}
    </UnderlineTabs.List>
  </UnderlineTabs.Root>
  {@render selected.children()}
{/if}
