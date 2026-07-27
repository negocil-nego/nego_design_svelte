<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  /** Campo de input para telefone com ícone e label. */
  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  type="text"
  label={label || $t("input.phone.label")}
  placeholder={placeholder || $t("input.phone.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
