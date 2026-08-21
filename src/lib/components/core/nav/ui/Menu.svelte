<script lang="ts">
  import { LanguageSwitcher } from "$lib/components/ui/language-switcher";
  import { LightSwitch } from "$lib/components/ui/light-switch";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { ComplexMenuProps, SimpleMenuProps } from "$lib/types";
  import ComplexMenu from "./ComplexMenu.svelte";
  import ComplexMenuMobile from "./mobile/ComplexMenuMobile.svelte";
  import SimpleMenuMobile from "./mobile/SimpleMenuMobile.svelte";
  import MenuButton from "./shared/MenuButton.svelte";
  import MenuLogo from "./shared/MenuLogo.svelte";
  import type { MenuProps, MenuVarientProps } from "../data/types";
  import SimpleMenu from "./SimpleMenu.svelte";

  let {
    logo,
    navMenu,
    isBorder,
    navMenuButton,
    isLightSwitch,
    isLanguageSwitcher,
  }: MenuProps = $props();

  function isLinks(item: MenuVarientProps): item is SimpleMenuProps {
    return "links" in item;
  }

  function isMenu(item: MenuVarientProps): item is ComplexMenuProps {
    return "menus" in item;
  }

  const responsive = useDevice();
</script>

{#snippet actionButtons()}
  <div class="flex items-center gap-2">
    {#if isLightSwitch}
      <LightSwitch />
    {/if}
    {#if isLanguageSwitcher}
      <LanguageSwitcher />
    {/if}
    {#if navMenuButton}
      <MenuButton {...navMenuButton} />
    {/if}
  </div>
{/snippet}

<nav
  class="flex items-center justify-between p-2 md:p-5 {isBorder
    ? 'border-b-2'
    : ''}"
>
  {#if logo}
    <MenuLogo {...logo} />
  {/if}

  {#if responsive.isMobile}
    {#if isLinks(navMenu)}
      <SimpleMenuMobile {...navMenu} />
    {:else if isMenu(navMenu)}
      <ComplexMenuMobile {...navMenu} />
    {/if}
  {:else if isLinks(navMenu)}
    <SimpleMenu {...navMenu} />
    {@render actionButtons()}
  {:else if isMenu(navMenu)}
    <ComplexMenu {...navMenu} />
    {@render actionButtons()}
  {/if}
</nav>
