<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { NavMenuButtonProps } from "../../data/nav-menu";
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
    <ImageHugeicons icon="menu-07" />
  {/snippet}
</MenuTriggerMobile>
