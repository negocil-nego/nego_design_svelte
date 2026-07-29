<script lang="ts">
  import * as InputOTP from "$lib/components/ui/input-otp/index.js";
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import { Label } from "$lib/components/ui/label";
  import { t } from "$lib/i18n";

  /** Campo de input para código OTP com caixas configuráveis. */
  let {
    label,
    isLabel,
    placeholder,
    length = 6,
    separator = true,
    value = $bindable(""),
  }: InputLabelProps & {
    /** Quantidade de caixas do código OTP. Padrão: 6 */
    length?: number;
    /** Exibir separador entre os grupos. Padrão: true */
    separator?: boolean;
  } = $props();

  const half = $derived(Math.ceil(length / 2));
</script>

{#snippet otpInput()}
  <InputOTP.Root maxlength={length} bind:value placeholder={placeholder || $t("input.otp.placeholder")}>
    {#snippet children({ cells })}
      {#if separator}
        <InputOTP.Group>
          {#each cells.slice(0, half) as cell, i (i)}
            <InputOTP.Slot {cell} />
          {/each}
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          {#each cells.slice(half, length) as cell, i (i)}
            <InputOTP.Slot {cell} />
          {/each}
        </InputOTP.Group>
      {:else}
        <InputOTP.Group>
          {#each cells as cell, i (i)}
            <InputOTP.Slot {cell} />
          {/each}
        </InputOTP.Group>
      {/if}
    {/snippet}
  </InputOTP.Root>
{/snippet}

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    <Label>{label ?? $t("input.otp.label")}</Label>
    {@render otpInput()}
  </div>
{:else}
  {@render otpInput()}
{/if}
