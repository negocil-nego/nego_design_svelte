<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import {
        Logout01Icon,
        ProfileIcon,
        Setting06Icon,
    } from "@hugeicons/core-free-icons";
    import { t } from "$lib/i18n";
    import type { AdminUserSectionProps } from "./types";

    let {
        name,
        email,
        avatarUrl,
        onProfile,
        onSettings,
        onLogout,
        className,
        triggerClass,
        avatarClass,
    }: AdminUserSectionProps = $props();

    let open = $state(false);
    let leaveTimer: ReturnType<typeof setTimeout> | undefined;

    const initials = $derived(
        name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("") || "ND",
    );

    function openMenu() {
        clearTimeout(leaveTimer);
        open = true;
    }

    function closeMenu() {
        clearTimeout(leaveTimer);
        leaveTimer = setTimeout(() => (open = false), 180);
    }

    $effect(() => () => clearTimeout(leaveTimer));
</script>

<div
    class="relative {className}"
    role="group"
    onmouseenter={openMenu}
    onmouseleave={closeMenu}
>
    <DropdownMenu.Root bind:open>
        <DropdownMenu.Trigger
            class="rounded-full outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring {triggerClass}"
        >
            <Avatar.Root
                class="rounded-full w-9 h-9 ring-2 ring-background {avatarClass}"
            >
                {#if avatarUrl}
                    <Avatar.Image src={avatarUrl} alt={name} class="" />
                {/if}
                <Avatar.Fallback
                    class="rounded-full bg-primary font-medium text-primary-foreground"
                >
                    {initials}
                </Avatar.Fallback>
            </Avatar.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
            class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={10}
        >
            <DropdownMenu.Label class="p-0 font-normal">
                <div class="flex items-center gap-2 px-1 py-1.5 text-sm">
                    <Avatar.Root class="size-9 rounded-full">
                        {#if avatarUrl}
                            <Avatar.Image src={avatarUrl} alt={name} />
                        {/if}
                        <Avatar.Fallback
                            class="rounded-full bg-primary font-medium text-primary-foreground"
                        >
                            {initials}
                        </Avatar.Fallback>
                    </Avatar.Root>
                    <div class="grid flex-1 text-start">
                        <span class="truncate font-medium">{name}</span>
                        <span class="truncate text-xs">{email}</span>
                    </div>
                </div>
            </DropdownMenu.Label>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
                <DropdownMenu.Item onclick={onProfile}>
                    <HugeiconsIcon icon={ProfileIcon} size={16} />
                    {$t("label.profile")}
                </DropdownMenu.Item>
                <DropdownMenu.Item onclick={onSettings}>
                    <HugeiconsIcon icon={Setting06Icon} size={16} />
                    {$t("label.settings")}
                </DropdownMenu.Item>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />
            <DropdownMenu.Item onclick={onLogout}>
                <HugeiconsIcon icon={Logout01Icon} size={16} />
                {$t("label.logout")}
            </DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</div>
