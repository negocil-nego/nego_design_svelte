<script lang="ts">
  import { PhoneInput } from "$lib/components/ui/phone-input";
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import { Label } from "$lib/components/ui/label";
  import { t } from "$lib/i18n";

  /** Campo de input para telefone com ícone e label. */
  let {
    label,
    isLabel,
    placeholder,
    value = $bindable(""),
  }: InputLabelProps = $props();
</script>

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    {#if label}
      <Label>{label}</Label>
    {:else}
      <Label>{$t("input.email-or-phone.label")}</Label>
    {/if}
    <PhoneInput
      placeholder={placeholder || $t("input.email-or-phone.placeholder")}
      bind:value
    />
  </div>
{:else}
  <PhoneInput
    placeholder={placeholder || $t("input.email-or-phone.placeholder")}
    bind:value
  />
{/if}
