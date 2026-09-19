<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";
      import { t } from "$lib/i18n";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import type { SocialLoginItem, SocialProvider } from "$lib/components/pages/security/login/types";
  
  type Props = {
    items?: SocialLoginItem[];
    label?: string;
    showSeparator?: boolean;
    variant?: "default" | "compact" | "icons-only";
  };

  let {
    items = [],
    label,
    showSeparator = true,
    variant = "default",
  }: Props = $props();

  const defaultIcons: Record<SocialProvider, HugeiconsIconName> = {
    GOOGLE: "google",
    FACEBOOK: "facebook-01",
    LINKEDIN: "linkedin-01",
  };

  const defaultLabels: Record<SocialProvider, string> = {
    GOOGLE: "Google",
    FACEBOOK: "Facebook",
    LINKEDIN: "LinkedIn",
  };
</script>

{#if items.length > 0}
  {#if showSeparator}
    <div class="relative my-2 text-center">
      <div class="absolute inset-0 flex items-center">
        <Separator />
      </div>
      <span
        class="relative bg-white dark:bg-background px-4 text-[10px] uppercase text-slate-400 tracking-wider"
      >
        {label ?? $t("label.or.continue.with")}
      </span>
    </div>
  {/if}

  <div class="flex gap-2">
    {#each items as item}
      {#if variant === "icons-only"}
        <button
          type="button"
          onclick={item.onclick}
          class="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          aria-label={item.label ?? defaultLabels[item.provider]}
        >
          <ImageHugeicons icon={item.icon ?? defaultIcons[item.provider]} width={18} height={18} />
        </button>
      {:else}
        <button
          type="button"
          onclick={item.onclick}
          class="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          <ImageHugeicons icon={item.icon ?? defaultIcons[item.provider]} width={18} height={18} />
          {#if variant === "default"}
            <span>{item.label ?? defaultLabels[item.provider]}</span>
          {/if}
        </button>
      {/if}
    {/each}
  </div>
{/if}
