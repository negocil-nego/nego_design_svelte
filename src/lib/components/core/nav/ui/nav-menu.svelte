<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { NavMenuProps } from "../data/nav-menu";
  import LightSwitch from "$lib/components/ui/light-switch/light-switch.svelte";
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import { t } from "$lib/i18n";
  import { Login03Icon, User03Icon } from "@hugeicons/core-free-icons";
  import { useIsMobile } from "$lib/hooks/responsive.svelte";
  import NavMenuDrawer from "./mobile/nav-menu-drawer.svelte";
  import MenuLinks from "./menu-links.svelte";

  let {
    logo,
    links,
    actions,
    navClass = "w-full",
    linkClass = "",
    groupClass = "",
    buttonClass = "",
    align = "LINK_SEPARATED_ACTIONS",
    isLightSwitch = false,
    isLanguageSwitcher = false,
    onclickButtonLogin,
    onclickButtonRegister,
  }: NavMenuProps = $props();

  const responsive = useIsMobile();
</script>

{#snippet actionButtons()}
  <div class="flex items-center gap-2">
    {#if isLightSwitch}
      <LightSwitch />
    {/if}
    {#if isLanguageSwitcher}
      <LanguageSwitcher />
    {/if}
    {#each actions as item (item.label)}
      <Button
        variant={item.type === "LINK" ? "ghost" : "outline"}
        class={item.className}
        onclick={item.onclick}
      >
        {#if item.icon}
          <HugeiconsIcon icon={item.icon} />
        {/if}
        {item.label}
      </Button>
    {/each}
    {#if onclickButtonRegister}
      <Button
        variant="outline"
        onclick={onclickButtonRegister}
        class={buttonClass}
      >
        <HugeiconsIcon icon={User03Icon} />
        {$t("label.register")}
      </Button>
    {/if}
    {#if onclickButtonLogin}
      <Button
        variant="outline"
        onclick={onclickButtonLogin}
        class={buttonClass}
      >
        <HugeiconsIcon icon={Login03Icon} />
        {$t("label.login")}
      </Button>
    {/if}
  </div>
{/snippet}

<nav
  class={`flex items-center justify-between container py-5 md:px-5 ${navClass}`}
>
  {#if logo}
    <div>
      {#if logo.img}
        <img
          src={logo.img}
          alt="logo of site"
          class={`max-h-50 ${logo.className}`}
        />
      {:else if logo.label}
        <span class={logo.className}>{logo.label}</span>
      {/if}
    </div>
  {:else}
    <div>
      <span class="hidden">Logo</span>
    </div>
  {/if}

  {#if responsive.isMobile}
    <NavMenuDrawer {links} {onclickButtonLogin} {onclickButtonRegister} />
  {:else if align === "LINK_SEPARATED_ACTIONS"}
    <MenuLinks {links} {linkClass} {groupClass} orientation="horizontal" />
    {@render actionButtons()}
  {:else if align === "LINK_INTO_ACTIONS"}
    <div class="flex items-center gap-2">
      <MenuLinks {links} {linkClass} {groupClass} orientation="vertical" />
      {@render actionButtons()}
    </div>
  {/if}
</nav>
