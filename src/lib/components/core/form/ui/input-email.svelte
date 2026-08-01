<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  /** Email input field with icon and label. */
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
