<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils";

  let {
    label,
    isLabel = false,
    value = $bindable(false),
    disabled = false,
    description,
    class: className,
  }: {
    label?: string;
    isLabel?: boolean;
    value?: boolean;
    disabled?: boolean;
    description?: string;
    class?: string;
  } = $props();

  function toggle() {
    if (disabled) return;
    value = !value;
  }
</script>

{#if isLabel}
  <div class={cn("flex w-full flex-col gap-2", className)}>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-0.5">
        {#if label}
          <Label>{label}</Label>
        {/if}
        {#if description}
          <p class="text-xs text-muted-foreground">{description}</p>
        {/if}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        aria-label={label ?? "Toggle"}
        {disabled}
        class={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          value ? "bg-primary" : "bg-input"
        )}
        onclick={toggle}
      >
        <span
          class={cn(
            "pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
            value ? "translate-x-5" : "translate-x-0"
          )}
        ></span>
      </button>
    </div>
  </div>
{:else}
  <div class={cn("flex items-center justify-between", className)}>
    <div class="flex flex-col gap-0.5">
      {#if label}
        <Label>{label}</Label>
      {/if}
      {#if description}
        <p class="text-xs text-muted-foreground">{description}</p>
      {/if}
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-label={label ?? "Toggle"}
      {disabled}
      class={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        value ? "bg-primary" : "bg-input"
      )}
      onclick={toggle}
    >
      <span
        class={cn(
          "pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          value ? "translate-x-5" : "translate-x-0"
        )}
      ></span>
    </button>
  </div>
{/if}
