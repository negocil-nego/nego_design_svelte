<script lang="ts" module>
  /**
   * Preferências de notificações e marketing.
   * Inclui secções "Email/Notification preferences" e "Enable notification",
   * além das preferências de marketing.
   * @component
   */
</script>

<script lang="ts">
  import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { cn } from "$lib/utils.js";
  import { t } from "$lib/i18n";
  import type {
    ProfileUserMarketingPref,
    ProfileUserNotificationPref,
    ProfileUserSettingProps,
  } from "../types";

  let {
    notificationPref,
    enableNotification,
    marketingPrefs,
    isLoading = false,
    className,
    notificationTitle = $t("profile-user.setting.notification.title"),
    notificationEmailLabel = $t("profile-user.setting.notification.email.label"),
    notificationEmailDesc = $t("profile-user.setting.notification.email.desc"),
    notificationWebLabel = $t("profile-user.setting.notification.web.label"),
    notificationWebDesc = $t("profile-user.setting.notification.web.desc"),
    notificationAppLabel = $t("profile-user.setting.notification.app.label"),
    notificationAppDesc = $t("profile-user.setting.notification.app.desc"),
    enableTitle = $t("profile-user.setting.enable.title"),
    enableEmailLabel = $t("profile-user.setting.enable.email"),
    enableWebLabel = $t("profile-user.setting.enable.web"),
    enableAppLabel = $t("profile-user.setting.enable.app"),
    marketingTitle = $t("profile-user.setting.marketing.title"),
    marketingTypeLabel = $t("profile-user.setting.marketing.type"),
    marketingEmailLabel = $t("profile-user.setting.marketing.email"),
    marketingPushLabel = $t("profile-user.setting.marketing.push"),
  }: ProfileUserSettingProps & {
    notificationPref?: ProfileUserNotificationPref;
    enableNotification?: { email?: boolean; web?: boolean; app?: boolean };
    marketingPrefs?: ProfileUserMarketingPref[];
    isLoading?: boolean;
  } = $props();

  let emailEnabled = $state(false);
  let webEnabled = $state(false);
  let appEnabled = $state(false);

  let enableEmailChecked = $state(false);
  let enableWebChecked = $state(false);
  let enableAppChecked = $state(false);

  $effect(() => {
    emailEnabled = notificationPref?.emailEnabled ?? false;
    webEnabled = notificationPref?.webEnabled ?? false;
    appEnabled = notificationPref?.appEnabled ?? false;
  });

  $effect(() => {
    enableEmailChecked = enableNotification?.email ?? false;
    enableWebChecked = enableNotification?.web ?? false;
    enableAppChecked = enableNotification?.app ?? false;
  });

  const marketingState = $state<Record<string, { email: boolean; push: boolean }>>({});
  $effect(() => {
    marketingPrefs?.forEach((pref) => {
      if (!marketingState[pref.id]) {
        marketingState[pref.id] = {
          email: pref.email ?? false,
          push: pref.push ?? false,
        };
      }
    });
  });
</script>

<div class={cn("flex flex-col gap-6", className)} data-slot="profile-user-setting">
  <section class="rounded-lg border bg-card p-6">
    <h3 class="mb-6 text-lg font-semibold">{notificationTitle}</h3>
    {#if isLoading}
      <div class="flex flex-col gap-4">
        {#each Array.from({ length: 3 }) as _, i (i)}
          <Skeleton class="h-6 w-full rounded-md" />
        {/each}
      </div>
    {:else}
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <div>
            <Label class="cursor-pointer">{notificationEmailLabel}</Label>
            <p class="text-sm text-muted-foreground">{notificationEmailDesc}</p>
          </div>
          <Checkbox bind:checked={emailEnabled} />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <Label class="cursor-pointer">{notificationWebLabel}</Label>
            <p class="text-sm text-muted-foreground">{notificationWebDesc}</p>
          </div>
          <Checkbox bind:checked={webEnabled} />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <Label class="cursor-pointer">{notificationAppLabel}</Label>
            <p class="text-sm text-muted-foreground">{notificationAppDesc}</p>
          </div>
          <Checkbox bind:checked={appEnabled} />
        </div>
      </div>
    {/if}
  </section>

  <section class="rounded-lg border bg-card p-6">
    <h3 class="mb-6 text-lg font-semibold">{enableTitle}</h3>
    {#if isLoading}
      <div class="flex flex-col gap-4">
        {#each Array.from({ length: 3 }) as _, i (i)}
          <Skeleton class="h-6 w-full rounded-md" />
        {/each}
      </div>
    {:else}
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="flex flex-col items-center gap-2 rounded-md border p-4 text-center">
          <Label class="cursor-pointer text-base font-medium">{enableEmailLabel}</Label>
          <Checkbox bind:checked={enableEmailChecked} />
        </div>
        <div class="flex flex-col items-center gap-2 rounded-md border p-4 text-center">
          <Label class="cursor-pointer text-base font-medium">{enableWebLabel}</Label>
          <Checkbox bind:checked={enableWebChecked} />
        </div>
        <div class="flex flex-col items-center gap-2 rounded-md border p-4 text-center">
          <Label class="cursor-pointer text-base font-medium">{enableAppLabel}</Label>
          <Checkbox bind:checked={enableAppChecked} />
        </div>
      </div>
    {/if}
  </section>

  {#if marketingPrefs && marketingPrefs.length > 0}
    <section class="rounded-lg border bg-card p-6">
      <h3 class="mb-6 text-lg font-semibold">{marketingTitle}</h3>
      {#if isLoading}
        <div class="flex flex-col gap-4">
          {#each marketingPrefs as _, i (i)}
            <Skeleton class="h-12 w-full rounded-md" />
          {/each}
        </div>
      {:else}
        <div class="overflow-hidden rounded-md border">
          <div class="grid grid-cols-[1fr_auto_auto] gap-4 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
            <span>{marketingTypeLabel}</span>
            <span class="text-center">{marketingEmailLabel}</span>
            <span class="text-center">{marketingPushLabel}</span>
          </div>
          {#each marketingPrefs as pref (pref.id)}
            <div class="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b px-4 py-3 last:border-b-0">
              <span class="font-medium">{pref.label}</span>
              <div class="flex justify-center">
                <Checkbox bind:checked={marketingState[pref.id].email} />
              </div>
              <div class="flex justify-center">
                <Checkbox bind:checked={marketingState[pref.id].push} />
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </section>
  {/if}
</div>
