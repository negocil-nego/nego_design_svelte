<script lang="ts">
  import type { NavMenuButtonProps } from "../../data/nav-menu";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Menu } from "@hugeicons/core-free-icons";
  import type { Snippet } from "svelte";
  import MenuTriggerMobile from "./MenuTriggerMobile.svelte";

  type Props = {
    navMenuButton?: NavMenuButtonProps;
    isThemeSwitch?: boolean;
    isLanguageSwitcher?: boolean;
    children: Snippet;
  };

  const { ...restProps }: Props = $props();
</script>

<MenuTriggerMobile {...restProps}>
  {#snippet trigger()}
    <HugeiconsIcon icon={Menu} />
  {/snippet}
</MenuTriggerMobile>
