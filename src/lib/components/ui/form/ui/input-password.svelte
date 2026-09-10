<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  /** Password input field with icon and label. */
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
