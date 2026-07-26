<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "../../../../i18n";

  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  type="email"
  label={label || $t("input.email.label")}
  placeholder={placeholder || $t("input.email.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
