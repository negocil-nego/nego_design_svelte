<script lang="ts">
  import { cn } from "$lib/utils";
  import { Button } from "$lib/components/ui/button";
  import type { ButtonVariant } from "$lib/components/ui/button";

  let {
    label = "Submit",
    isLoading = false,
    loadingText,
    disabled = false,
    variant = "default" as ButtonVariant,
    class: className,
  }: {
    label?: string;
    isLoading?: boolean;
    loadingText?: string;
    disabled?: boolean;
    variant?: ButtonVariant;
    class?: string;
  } = $props();
</script>

<Button
  type="submit"
  {variant}
  {isLoading}
  disabled={disabled || isLoading}
  class={cn("w-full", className)}
>
  {isLoading && loadingText ? loadingText : label}
</Button>