<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  /** Campo de input para confirmação de senha com ícone e label. */
  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  type="password"
  label={label || $t("input.password-confirm.label")}
  placeholder={placeholder || $t("input.password-confirm.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
