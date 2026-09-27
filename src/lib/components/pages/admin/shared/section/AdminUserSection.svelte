<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { t } from "$lib/i18n";
  import { clearUser, userStore } from "$lib/stores";
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

  const user = $derived(userStore.user);

  const userName = $derived(name ?? user?.name ?? "");
  const userEmail = $derived(email ?? user?.email ?? "");
  const userAvatarUrl = $derived(avatarUrl ?? user?.avatarUrl);
  const handleProfile = $derived(onProfile ?? user?.onProfile);
  const handleSettings = $derived(onSettings ?? user?.onSettings);
  const handleLogout = $derived(onLogout ?? user?.onLogout ?? clearUser);

  const initials = $derived(
    userName
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
        {#if userAvatarUrl}
          <Avatar.Image src={userAvatarUrl} alt={userName} class="" />
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
            {#if userAvatarUrl}
              <Avatar.Image src={userAvatarUrl} alt={userName} />
            {/if}
            <Avatar.Fallback
              class="rounded-full bg-primary font-medium text-primary-foreground"
            >
              {initials}
            </Avatar.Fallback>
          </Avatar.Root>
          <div class="grid flex-1 text-start">
            <span class="truncate font-medium">{userName}</span>
            <span class="truncate text-xs">{userEmail}</span>
          </div>
        </div>
      </DropdownMenu.Label>

      <DropdownMenu.Separator />

      {#if handleProfile || handleSettings}
        <DropdownMenu.Group>
          {#if handleProfile}
            <DropdownMenu.Item onclick={handleProfile}>
              <ImageHugeicons icon="profile-02" width={16} height={16} />
              {$t("label.profile")}
            </DropdownMenu.Item>
          {/if}
          {#if handleSettings}
            <DropdownMenu.Item onclick={handleSettings}>
              <ImageHugeicons icon="setting-07" width={16} height={16} />
              {$t("label.settings")}
            </DropdownMenu.Item>
          {/if}
        </DropdownMenu.Group>

        <DropdownMenu.Separator />
      {/if}

      <DropdownMenu.Item onclick={handleLogout}>
        <ImageHugeicons icon="logout-01" width={16} height={16} />
        {$t("label.logout")}
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
