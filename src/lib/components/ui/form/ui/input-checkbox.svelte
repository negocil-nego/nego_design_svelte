<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { cn } from "$lib/utils";

  type CheckboxOption = { value: string; label: string };

  let {
    label,
    isLabel = false,
    value = $bindable([]),
    disabled = false,
    required = false,
    options = [],
    name = "",
    class: className,
  }: {
    label?: string;
    isLabel?: boolean;
    value?: string[];
    disabled?: boolean;
    required?: boolean;
    options?: CheckboxOption[];
    name?: string;
    class?: string;
  } = $props();

  function handleToggle(optionValue: string) {
    if (disabled) return;
    const idx = value.indexOf(optionValue);
    if (idx >= 0) {
      value = value.filter((v) => v !== optionValue);
    } else {
      value = [...value, optionValue];
    }
  }

  function isChecked(optionValue: string): boolean {
    return value.includes(optionValue);
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
          <Checkbox
            {disabled}
            {name}
            checked={isChecked(option.value)}
            onCheckedChange={() => handleToggle(option.value)}
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
        <Checkbox
          {disabled}
          {name}
          checked={isChecked(option.value)}
          onCheckedChange={() => handleToggle(option.value)}
        />
        <span class="text-foreground">{option.label}</span>
      </label>
    {/each}
  </div>
{/if}
