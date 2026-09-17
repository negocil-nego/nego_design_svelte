<script lang="ts">
  import { LanguageSwitcher } from "$lib/components/ui/language-switcher";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
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
    isThemeSwitch,
    isLanguageSwitcher,
  }: MenuProps & {
    navMenu: MenuVarientProps;
  } = $props();

  function isLinks(
    item: MenuVarientProps | undefined,
  ): item is SimpleMenuProps {
    return item !== undefined && "links" in item;
  }

  function isMenu(
    item: MenuVarientProps | undefined,
  ): item is ComplexMenuProps {
    return item !== undefined && "menus" in item;
  }

  const responsive = useDevice();
</script>

{#snippet actionButtons()}
  <div class="flex items-center gap-2">
    {#if isThemeSwitch}
      <ThemeSwitch />
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
  class="flex items-center justify-between p-2 md:p-5 w-full {isBorder
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
