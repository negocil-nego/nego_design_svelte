<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "../../../../i18n";

  /** Campo de input para senha com ícone e label. */
  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  type="password"
  label={label || $t("input.password.label")}
  placeholder={placeholder || $t("input.password.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
