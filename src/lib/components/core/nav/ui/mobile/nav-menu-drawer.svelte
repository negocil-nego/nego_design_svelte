<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import type { NavMenuLinksProps } from "../../data/nav-menu";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import { Login03Icon, Menu, User03Icon } from "@hugeicons/core-free-icons";
    import MenuLinks from "../shared/MenuLinks.svelte";
    import LightSwitch from "$lib/components/ui/light-switch/light-switch.svelte";
    import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
    import { t } from "$lib/i18n";

    type Props = {
        links: NavMenuLinksProps[];
        onclickButtonLogin?: () => void;
        onclickButtonRegister?: () => void;
    };

    const { links, onclickButtonLogin, onclickButtonRegister }: Props =
        $props();
</script>

<div class="flex flex-wrap gap-2">
    <Drawer.Root direction="right">
        <Drawer.Trigger
            class={cn(buttonVariants({ variant: "outline" }), "capitalize")}
        >
            <HugeiconsIcon icon={Menu} />
        </Drawer.Trigger>
        <Drawer.Content
            class="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]"
        >
            <Drawer.Header>
                <Drawer.Title>{$t("label.menu")}</Drawer.Title>
                <Drawer.Description>
                    {$t("label.navigation.text")}
                </Drawer.Description>
            </Drawer.Header>
            <div class="no-scrollbar overflow-y-auto px-4">
                <nav>
                    <div class="mt-5 mb-4 font-semibold">{$t("label.navigation")}</div>
                    <MenuLinks
                        {links}
                        groupClass="space-y-3"
                        orientation="vertical"
                    />
                </nav>

                <div class="mt-5">
                    <div class="mt-5 mb-4 font-semibold">{$t("label.action")}</div>
                    <section >
                        {#if onclickButtonRegister}
                            <Button
                                variant="outline"
                                onclick={onclickButtonRegister}
                            >
                                <HugeiconsIcon icon={User03Icon} />
                                {$t("label.register")}
                            </Button>
                        {/if}
                        {#if onclickButtonLogin}
                            <Button
                                variant="outline"
                                onclick={onclickButtonLogin}
                            >
                                <HugeiconsIcon icon={Login03Icon} />
                                {$t("label.login")}
                            </Button>
                        {/if}
                    </section>
                </div>
            </div>
            <Drawer.Footer>
                <div class="flex justify-center gap-5 py-5">
                    <LightSwitch />
                    <LanguageSwitcher />
                </div>
                <Drawer.Close class={buttonVariants({ variant: "outline" })}>
                    {$t("label.close")}
                </Drawer.Close>
            </Drawer.Footer>
        </Drawer.Content>
    </Drawer.Root>
</div>
