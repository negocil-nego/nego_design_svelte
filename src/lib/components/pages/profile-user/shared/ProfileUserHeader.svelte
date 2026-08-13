<script lang="ts" module>
  /**
   * Header da página de perfil: gradiente amarelo/laranja, avatar à esquerda,
   * nome + status, role, email/telefone e botão "LOGIN AS USER".
   * @component
   */
</script>

<script lang="ts">
  import {
    BadgeCheckIcon,
    Mail01Icon,
    UserIcon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Avatar from "$lib/components/ui/avatar/avatar.svelte";
  import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import type { ProfileUserData, ProfileUserHeaderProps } from "../types";

  let {
    data,
    isLoading = false,
    fullName,
    onLoginAsUser,
    statusDefault = $t("profile-user.variant1.statusActive"),
    roleDefault = $t("profile-user.variant1.roleDefault"),
    loginAsUserLabel = $t("profile-user.variant1.actionLoginAsUser"),
  }: ProfileUserHeaderProps & {
    data: ProfileUserData;
    isLoading?: boolean;
    fullName: string;
  } = $props();
</script>

<header
  class="bg-linear-to-r from-blue-400 to-blue-500 px-6 py-10 text-white"
  data-slot="profile-user-header"
>
  <div class="mx-auto max-w-7xl">
    <div
      class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      <div class="flex items-center gap-5">
        {#if isLoading}
          <Skeleton class="size-24 rounded-full" />
        {:else}
          <Avatar size="lg" class="size-24 ring-4 ring-white/30">
            <AvatarImage src={data.avatarUrl} alt={fullName} />
          </Avatar>
        {/if}
        <div class="flex flex-col gap-2">
          {#if isLoading}
            <Skeleton class="h-8 w-48 rounded-md bg-white/30" />
            <Skeleton class="h-5 w-36 rounded-md bg-white/20" />
            <Skeleton class="h-4 w-44 rounded-md bg-white/20" />
          {:else}
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-bold text-white">{fullName}</h1>
              <Badge
                variant="secondary"
                class="bg-white/20 text-white hover:bg-white/30"
              >
                <HugeiconsIcon icon={BadgeCheckIcon} />
                {data.status ?? statusDefault}
              </Badge>
            </div>
            <p class="text-base font-medium text-white/90">
              {data.role ?? roleDefault}
            </p>
            <div class="flex items-center gap-4 text-sm text-white/80">
              <span class="flex items-center gap-1.5">
                <HugeiconsIcon icon={Mail01Icon} class="size-4" />
                {data.email}
              </span>
              {#if data.phone}
                <span class="flex items-center gap-1.5">
                  <HugeiconsIcon icon={UserIcon} class="size-4" />
                  {data.phone}
                </span>
              {/if}
            </div>
          {/if}
        </div>
      </div>
      <div>
        {#if isLoading}
          <Skeleton class="h-9 w-36 rounded-md bg-white/30" />
        {:else}
          <Button
            variant="outline"
            class="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            onclick={() => onLoginAsUser?.(data.id)}
          >
            {loginAsUserLabel}
          </Button>
        {/if}
      </div>
    </div>
  </div>
</header>
