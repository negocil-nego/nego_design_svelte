<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import type { NavMenuProps } from "../data/nav-menu";
    import LightSwitch from "$lib/components/ui/light-switch/light-switch.svelte";
    import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
    import { t } from "$lib/i18n";
    import { Login03Icon, User03Icon } from "@hugeicons/core-free-icons";

    let {
        logo,
        links,
        linkClass = "",
        actions,
        align = "LINK_SEPARATED_ACTIONS",
        onclickButtonLogin,
        onclickButtonRegister ,
    }: NavMenuProps = $props();
</script>

{#snippet menuLinks()}
    <ul class="flex items-center gap-2 md:gap-5 lg:gap-15">
        {#each links as item (item.label)}
            <li>
                <a class={`flex items-center gap-1 ${linkClass}`} href={item.url || "#"}>
                    {#if item.icon}
                        <HugeiconsIcon icon={item.icon} size={15}/>
                    {/if}
                    {item.label}
                </a>
            </li>
        {/each}
    </ul>
{/snippet}

{#snippet actionButtons()}
    <div class="flex items-center gap-2">
        <LightSwitch/>
        <LanguageSwitcher/>
        {#each actions as item (item.label)}
            <Button
                variant={item.type === "LINK" ? "ghost" : "default"}
                class={item.className}
                onclick={item.onclick}
            >
                {#if item.icon}
                    <HugeiconsIcon icon={item.icon} />
                {/if}
                {item.label}
            </Button>
        {/each}
        {#if onclickButtonLogin}
            <Button
                variant="outline"
                onclick={onclickButtonLogin}
            >
                <HugeiconsIcon icon={Login03Icon} />
                {$t("label.login")}
            </Button>
        {/if}
        {#if onclickButtonRegister}
            <Button
                variant="outline"
                onclick={onclickButtonRegister}
            >
                <HugeiconsIcon icon={User03Icon} />
                {$t("label.register")}
            </Button>
        {/if}
    </div>
{/snippet}

<nav class="flex items-center justify-between container py-5 px-5">
    {#if logo}
        <div>
            {#if logo.img}
                <img src={logo.img} alt="logo of site" class={`max-h-50 ${logo.className}`}  />
            {:else if logo.label}
                <span class={logo.className}>{logo.label}</span>
            {/if}
        </div>
    {:else}
        <div>
            <span class="hidden">Logo</span>
        </div>
    {/if}

    {#if align === "LINK_SEPARATED_ACTIONS"}
        {@render menuLinks()}
        {@render actionButtons()}
    {:else if align === "LINK_INTO_ACTIONS"}
        <div class="flex items-center gap-2">
            {@render menuLinks()}
            {@render actionButtons()}
        </div>
    {/if}
</nav>
