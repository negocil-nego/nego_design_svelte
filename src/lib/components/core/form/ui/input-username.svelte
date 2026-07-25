<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  label={label || $t("input.usename.label")}
  placeholder={placeholder || $t("input.username.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
