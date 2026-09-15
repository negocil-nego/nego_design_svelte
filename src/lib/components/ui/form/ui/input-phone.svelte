<script lang="ts">
  import { PhoneInput } from "$lib/components/ui/phone-input";
  import type { InputLabelProps } from "../data/InputLabel.svelte.ts";
  import { Label } from "$lib/components/ui/label";
  import { t } from "$lib/i18n";

  /** Phone input field with icon and label. */
  let {
    label,
    labelClass,
    inputClass,
    isLabel,
    placeholder,
    value = $bindable(""),
    disabled = false,
    ...restProps
  }: InputLabelProps = $props();
</script>

{#if isLabel}
  <div class="flex flex-col gap-3 w-full">
    {#if label}
      <Label class={labelClass}>{label}</Label>
    {:else}
      <Label class={labelClass}>{$t("input.phone.label")}</Label>
    {/if}
    <PhoneInput
      class={inputClass}
      placeholder={placeholder || $t("input.phone.placeholder")}
      bind:value
      {disabled}
      {...restProps}
    />
  </div>
{:else}
  <PhoneInput
    class={inputClass}
    placeholder={placeholder || $t("input.phone.placeholder")}
    bind:value
    {disabled}
    {...restProps}
  />
{/if}
