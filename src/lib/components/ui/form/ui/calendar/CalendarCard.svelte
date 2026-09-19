<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";
        import type { Snippet } from "svelte";
  import { Popover, PopoverTrigger, PopoverContent } from "../../../popover";
  import Calendar from "./Calendar.svelte";
  import { cn } from "$lib/utils.js";

  type Props = {
    open?: boolean;
    value?: Date;
    rangeStart?: Date;
    rangeEnd?: Date;
    min?: Date;
    max?: Date;
    disabled?: boolean;
    isIcon?: boolean;
    icon?: HugeiconsIconName;
    inputClass?: string;
    onselect?: (date: Date) => void;
    children?: Snippet;
    content?: Snippet;
  };

  let {
    open = $bindable(false),
    value,
    rangeStart,
    rangeEnd,
    min,
    max,
    disabled = false,
    isIcon = true,
    icon = "calendar-03",
    inputClass,
    onselect,
    children,
    content,
  }: Props = $props();

  const triggerClass = $derived(
    cn(
      "h-9 w-full min-w-0 rounded-md border py-1 text-base shadow-xs bg-white",
      "transition-colors outline-none md:text-sm cursor-pointer",
      "border-input dark:bg-input/30 text-foreground",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      "flex items-center text-left",
      isIcon ? "pl-9" : "pl-2.5",
      "pr-9",
      inputClass,
    ),
  );
</script>

<Popover bind:open>
  {#if isIcon}
    <span
      class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
    >
      <ImageHugeicons {icon} width={16} height={16} />
    </span>
  {/if}

  <PopoverTrigger class={triggerClass} {disabled}>
    {@render children?.()}
  </PopoverTrigger>

  <span
    class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
  >
    <ImageHugeicons icon="calendar-03" width={16} height={16} />
  </span>

  <PopoverContent align="start" side="bottom" class="w-auto p-0">
    {#if content}
      {@render content()}
    {:else}
      <Calendar {value} {rangeStart} {rangeEnd} {min} {max} {onselect} />
    {/if}
  </PopoverContent>
</Popover>
