<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  /** Email or phone input field with icon and label. */
  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  type="text"
  label={label || $t("input.email-or-phone.label")}
  placeholder={placeholder || $t("input.email-or-phone.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
