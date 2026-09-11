<script lang="ts">
  import { cn } from "$lib/utils";
  import { Label } from "$lib/components/ui/label";
  import type { HTMLTextareaAttributes } from "svelte/elements";
  import type { WithElementRef } from "$lib/utils";

  let {
    ref = $bindable(null),
    value = $bindable(""),
    label,
    isLabel = false,
    placeholder,
    disabled = false,
    required = false,
    rows = 4,
    class: className,
    ...restProps
  }: WithElementRef<HTMLTextareaAttributes> & {
    label?: string;
    isLabel?: boolean;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
  } = $props();
</script>

{#if isLabel}
  <div class="flex w-full flex-col gap-2">
    {#if label}
      <Label>{label}</Label>
    {/if}
    <textarea
      bind:this={ref}
      bind:value
      {placeholder}
      {disabled}
      {required}
      {rows}
      class={cn(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      )}
      {...restProps}
    ></textarea>
  </div>
{:else}
  <textarea
    bind:this={ref}
    bind:value
    {placeholder}
    {disabled}
    {required}
    {rows}
    class={cn(
      "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
      className
    )}
    {...restProps}
  ></textarea>
{/if}
