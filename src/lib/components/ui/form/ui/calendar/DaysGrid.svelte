<script lang="ts">
  import { cn } from "$lib/utils.js";
  import {
    isToday,
    isSelected,
    isInRange,
    isOutsideMonth,
    isDisabled,
    type CalendarToday,
  } from "./utils.ts";

  type Props = {
    year: number;
    month: number;
    weeks: Date[][];
    weekdays: string[];
    today: CalendarToday;
    value?: Date;
    rangeStart?: Date;
    rangeEnd?: Date;
    min?: Date;
    max?: Date;
    onselect?: (date: Date) => void;
  };

  let {
    year,
    month,
    weeks,
    weekdays,
    today,
    value,
    rangeStart,
    rangeEnd,
    min,
    max,
    onselect,
  }: Props = $props();
</script>

<div class="grid grid-cols-7">
  {#each weekdays as day, i (i)}
    <div class="py-1 text-center text-xs font-medium text-muted-foreground">
      {day}
    </div>
  {/each}
</div>

<div class="grid grid-cols-7 gap-y-0.5">
  {#each weeks as week, wi (wi)}
    {#each week as day, di (`${wi}-${di}`)}
      {@const outside = isOutsideMonth(day, year, month)}
      {@const disabled = isDisabled(day, min, max)}
      {@const today_ = isToday(day, today)}
      {@const selected = isSelected(day, { value, rangeStart, rangeEnd })}
      {@const inRange = isInRange(day, rangeStart, rangeEnd)}
      <button
        type="button"
        {disabled}
        class={cn(
          "flex h-8 w-full items-center justify-center rounded-md text-sm transition-colors",
          "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          outside && "text-muted-foreground/40",
          !outside && !disabled && !selected && !inRange && "text-foreground",
          disabled && "cursor-not-allowed opacity-30",
          today_ && !selected && "ring-1 ring-ring",
          inRange && !selected && "bg-primary/20 text-primary font-medium",
          selected && "bg-primary text-primary-foreground",
        )}
        onclick={() => onselect?.(day)}
      >
        {day.getDate()}
      </button>
    {/each}
  {/each}
</div>