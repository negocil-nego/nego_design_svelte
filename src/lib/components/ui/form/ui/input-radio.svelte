<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils";

  type RadioOption = { value: string; label: string };

  let {
    label,
    isLabel = false,
    value = $bindable(""),
    disabled = false,
    required = false,
    options = [],
    name = "",
    class: className,
  }: {
    label?: string;
    isLabel?: boolean;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    options?: RadioOption[];
    name?: string;
    class?: string;
  } = $props();

  function handleSelect(option: RadioOption) {
    if (disabled) return;
    value = option.value;
  }
</script>

{#if isLabel}
  <div class={cn("flex w-full flex-col gap-2", className)}>
    {#if label}
      <Label>{label}</Label>
    {/if}
    <div class="flex flex-wrap gap-4">
      {#each options as option (option.value)}
        <label
          class={cn(
            "flex cursor-pointer items-center gap-2 text-sm",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <input
            type="radio"
            {name}
            {disabled}
            {required}
            checked={value === option.value}
            onchange={() => handleSelect(option)}
            class="size-4 border-input text-primary accent-primary"
          />
          <span class="text-foreground">{option.label}</span>
        </label>
      {/each}
    </div>
  </div>
{:else}
  <div class={cn("flex flex-wrap gap-4", className)}>
    {#each options as option (option.value)}
      <label
        class={cn(
          "flex cursor-pointer items-center gap-2 text-sm",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <input
          type="radio"
          {name}
          {disabled}
          {required}
          checked={value === option.value}
          onchange={() => handleSelect(option)}
          class="size-4 border-input text-primary accent-primary"
        />
        <span class="text-foreground">{option.label}</span>
      </label>
    {/each}
  </div>
{/if}
