<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { useSidebar } from "$lib/components/ui/sidebar/index.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    UnfoldMoreIcon,
    Logout01Icon,
    SparklesIcon,
  } from "@hugeicons/core-free-icons";
  import { t } from "$lib/i18n";
  import type { NavUserSidebarProps } from "$lib/types";

  let { user: userLogged }: { user: NavUserSidebarProps } = $props();

  const sidebar = useSidebar();
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            {...props}
          >
            <Avatar.Root class="size-8 rounded-lg">
              <Avatar.Image
                src={userLogged.user.avatar}
                alt={userLogged.user.name}
              />
              <Avatar.Fallback class="rounded-lg">ND</Avatar.Fallback>
            </Avatar.Root>
            <div class="grid flex-1 text-start text-sm leading-tight">
              <span class="truncate font-medium">{userLogged.user.name}</span>
              <span class="truncate text-xs">{userLogged.user.email}</span>
            </div>
            <HugeiconsIcon icon={UnfoldMoreIcon} size={16} class="ms-auto" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
        side={sidebar.isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenu.Label class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
            <Avatar.Root class="size-8 rounded-lg">
              <Avatar.Image
                src={userLogged.user.avatar}
                alt={userLogged.user.name}
              />
              <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
            </Avatar.Root>
            <div class="grid flex-1 text-start text-sm leading-tight">
              <span class="truncate font-medium">{userLogged.user.name}</span>
              <span class="truncate text-xs">{userLogged.user.email}</span>
            </div>
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <HugeiconsIcon icon={SparklesIcon} size={16} />
            Upgrade to Pro
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        {#if userLogged.actions && userLogged.actions.length > 0}
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            {#each userLogged.actions as action (action.label)}
              <DropdownMenu.Item onclick={action.onclick}>
                <HugeiconsIcon icon={action.icon} size={16} />
                {action.label}
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Group>
        {/if}

        <DropdownMenu.Separator />
        <DropdownMenu.Item onclick={userLogged?.onLogout}>
          <HugeiconsIcon icon={Logout01Icon} size={16} />
          {$t("label.logout")}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
