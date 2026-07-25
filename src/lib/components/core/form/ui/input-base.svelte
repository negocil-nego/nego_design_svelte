<script lang="ts">
  import Input from "$lib/components/ui/input/input.svelte";
  import { Label } from "$lib/components/ui/label";
  import { EyeIcon, EyeOffIcon } from "@hugeicons/core-free-icons";
  import { inputIconMap } from "../data/InputIconDefault.svelte";
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  let {
    label,
    isIcon,
    isLabel,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();

  let showPassword = $state(false);

  const isPassword = $derived(restProps.type == "password");

  const inputType = $derived(
    isPassword && showPassword ? "text" : restProps.type,
  );

  const currentIcon = $derived(
    restProps.type ? inputIconMap[restProps.type] : undefined,
  );

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

{#snippet renderInput()}
  <div class="flex items-center relative w-full">
    {#if isIcon && currentIcon}
      <span class="absolute left-3 flex items-center pointer-events-none">
        <HugeiconsIcon
          icon={currentIcon}
          size={16}
          color="#94a3b8"
          strokeWidth={1.5}
        />
      </span>
    {/if}

    <Input
      class="{isIcon && currentIcon ? 'pl-9' : ''} {isPassword ? 'pr-9' : ''}"
      bind:value
      {...restProps}
      type={inputType}
    />

    {#if isPassword}
      <button
        type="button"
        onclick={togglePasswordVisibility}
        class="absolute right-3 flex items-center cursor-pointer z-10 text-slate-400 hover:text-slate-600 focus:outline-none"
        aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
      >
        <HugeiconsIcon
          icon={showPassword ? EyeOffIcon : EyeIcon}
          size={16}
          color="#94a3b8"
          strokeWidth={1.5}
        />
      </button>
    {/if}
  </div>
{/snippet}

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    {#if label}
      <Label>{label}</Label>
    {/if}
    {@render renderInput()}
  </div>
{:else}
  {@render renderInput()}
{/if}
