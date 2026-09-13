<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { ChevronDownIcon } from "@hugeicons/core-free-icons";
  import { cn } from "$lib/utils.js";

  type Props = {
    months: string[];
    month: number;
    open: boolean;
    onToggle: () => void;
    onSelect: (month: number) => void;
  };

  let { months, month, open, onToggle, onSelect }: Props = $props();
</script>

<button
  type="button"
  data-month-picker
  class="flex h-8 w-full items-center justify-between gap-1 rounded px-2 text-sm font-medium capitalize transition-colors hover:bg-muted"
  onclick={onToggle}
>
  <span>{months[month]}</span>
  <HugeiconsIcon icon={ChevronDownIcon} size={14} strokeWidth={1.5} />
</button>

{#if open}
  <div
    role="listbox"
    aria-label="select-month"
    tabindex="-1"
    class="absolute left-0 right-0 top-full z-10 mt-1 grid max-h-48 grid-cols-1 gap-0.5 overflow-y-auto rounded-md border bg-popover p-1 shadow-md"
    onmousedown={(e) => e.preventDefault()}
  >
    {#each months as name, i (i)}
      <button
        type="button"
        class={cn(
          "rounded px-1 py-1 text-xs capitalize transition-colors hover:bg-muted",
          i === month
            ? "bg-primary font-medium text-primary-foreground"
            : "text-foreground",
        )}
        onclick={() => onSelect(i)}
      >
        {name}
      </button>
    {/each}
  </div>
{/if}