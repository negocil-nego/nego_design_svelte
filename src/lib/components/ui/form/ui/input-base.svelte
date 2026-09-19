<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import { Label } from "$lib/components/ui/label";
    import { inputIconMap } from "../data/InputIconDefault.svelte.ts";
  import type { InputLabelProps } from "../data/InputLabel.svelte.ts";
  
  let {
    label,
    labelClass,
    inputClass,
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
        <ImageHugeicons icon={currentIcon} width={16} height={16} color="#94a3b8" />
      </span>
    {/if}

    <Input
      class="{isIcon && currentIcon ? 'pl-9' : ''} {isPassword
        ? 'pr-9'
        : ''} {inputClass ?? ''}"
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
        <ImageHugeicons icon={showPassword ? "eye-off" : "eye"} width={16} height={16} color="#94a3b8" />
      </button>
    {/if}
  </div>
{/snippet}

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    {#if label}
      <Label class={labelClass}>{label}</Label>
    {/if}
    {@render renderInput()}
  </div>
{:else}
  {@render renderInput()}
{/if}
