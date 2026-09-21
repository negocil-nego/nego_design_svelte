<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { cn } from "$lib/utils.js";

  type Props = {
    years: number[];
    year: number;
    query: string;
    open: boolean;
    onQueryChange: (query: string) => void;
    onFocus: () => void;
    onToggle: () => void;
    onCommit: () => void;
    onCancel: () => void;
    onSelect: (year: number) => void;
  };

  let {
    years,
    year,
    query,
    open,
    onQueryChange,
    onFocus,
    onToggle,
    onCommit,
    onCancel,
    onSelect,
  }: Props = $props();

  let yearListRef = $state<HTMLDivElement | null>(null);
  let yearInputRef = $state<HTMLInputElement | null>(null);

  function commitYear() {
    onCommit();
    yearInputRef?.blur();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      commitYear();
    } else if (e.key === "Escape") {
      e.preventDefault();
      onCancel();
    }
  }

  $effect(() => {
    if (!open) return;
    const el = yearListRef;
    const selected = el?.querySelector<HTMLElement>(`[data-year="${year}"]`);
    selected?.scrollIntoView({ block: "nearest" });
  });
</script>

<div class="flex h-8 items-center rounded px-1 border">
  <input
    bind:this={yearInputRef}
    type="text"
    inputmode="numeric"
    pattern="[0-9]*"
    bind:value={query}
    onfocus={onFocus}
    oninput={onFocus}
    onkeydown={handleKeydown}
    onblur={() => {
      if (!open) {
        onCancel();
      }
    }}
    class="w-full min-w-0 rounded-md border border-transparent bg-transparent px-1 py-1 text-center text-sm font-medium outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/50"
  />
</div>

{#if open}
  <div
    bind:this={yearListRef}
    role="listbox"
    aria-label="select-year"
    tabindex="-1"
    class="absolute left-0 right-0 top-full z-10 mt-1 max-h-56 overflow-y-auto rounded-md border bg-popover p-1 shadow-md"
    onmousedown={(e) => e.preventDefault()}
  >
    {#if years.length === 0}
      <div class="px-2 py-1 text-center text-xs text-muted-foreground">
        {query}
      </div>
    {:else}
      {#each years as yearItem, i (yearItem)}
        <button
          type="button"
          data-year={yearItem}
          class={cn(
            "block w-full rounded px-2 py-1 text-left text-sm transition-colors hover:bg-muted",
            yearItem === year
              ? "bg-primary font-medium text-primary-foreground hover:bg-primary"
              : "text-foreground",
          )}
          onclick={() => onSelect(yearItem)}
        >
          {yearItem}
        </button>
      {/each}
    {/if}
  </div>
{/if}
