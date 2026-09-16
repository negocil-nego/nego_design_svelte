<script lang="ts">
  import type { InputLabelProps } from "../data/InputLabel.svelte.ts";
  import InputBase from "./input-base.svelte";
  import { t } from "$lib/i18n";

  /** Username or email input field with icon and label. */
  let {
    label,
    placeholder,
    value = $bindable(""),
    ...restProps
  }: InputLabelProps = $props();
</script>

<InputBase
  type="text"
  label={label || $t("input.username-or-email.label")}
  placeholder={placeholder || $t("input.username-or-email.placeholder")}
  isLabel
  isIcon
  bind:value
  {...restProps}
/>
