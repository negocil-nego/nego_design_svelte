<script lang="ts">
  import NotificationBanner from "$lib/components/ui/banner/NotificationBanner.svelte";
  import {
    authBannerCtaText,
    authBannerAction,
    authBannerDescription,
    authBannerDismiss,
    authBannerStrongText,
    authBannerVisible,
  } from "$lib/store";
  import type { NotificationBannerProps } from "$lib/components/ui/banner/types";

  type Props = Pick<NotificationBannerProps, "bgClass" | "textClass" | "ctaClass" | "class"> & {
    strongText?: string;
    description?: string;
    ctaText?: string;
  };

  let {
    strongText,
    description,
    ctaText,
    bgClass,
    textClass,
    ctaClass,
    class: className,
  }: Props = $props();

  const finalStrongText = $derived(strongText ?? authBannerStrongText);
  const finalDescription = $derived(description ?? authBannerDescription);
  const finalCtaText = $derived(ctaText ?? authBannerCtaText);
</script>

{#if authBannerVisible}
  <NotificationBanner
    strongText={finalStrongText ?? undefined}
    description={finalDescription}
    ctaText={finalCtaText}
    onCtaClick={authBannerAction}
    onDismiss={authBannerDismiss}
    {bgClass}
    {textClass}
    {ctaClass}
    class={className}
  />
{/if}