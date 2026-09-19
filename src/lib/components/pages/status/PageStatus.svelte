<script lang="ts">
  import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    SmartPhone02Icon,
    AlertCircleIcon,
  } from "@hugeicons/core-free-icons";
  import type { PageStatusProps } from "./types";
  import CardEmailPhoneWhatsapp from "$lib/components/ui/card/varients/CardEmailPhoneWhatsapp.svelte";

  let {
    title = "",
    imageUrl = "",
    subtitle = "",
    description = "",
    buttonText = "",
    onAction,
    actionHref,
    className = "",
    icon,
    titleColor = "",
    bgColor = "",
    iconBg = "",
    iconColor = "",
    buttonBg = "",
    buttonTextColor = "",
    emailPhoneWhatsapp,
    children,
  }: PageStatusProps = $props();
</script>

<div
  class="flex min-h-svh flex-col items-center justify-center px-4 py-10 {className}"
>
  <div class="flex flex-col items-center text-center">
    <div class="relative">
      {#if imageUrl}
        {#if imageUrl.includes(".lottie")}
          <DotLottieSvelte src={imageUrl} loop autoplay />
        {:else}
          <img src={imageUrl} alt="" />
        {/if}
      {:else}
        <span
          class="flex size-32 items-center justify-center rounded-full {bgColor} sm:size-40"
        >
          <HugeiconsIcon
            icon={icon ?? SmartPhone02Icon}
            class="size-16 text-foreground sm:size-20"
          />
        </span>
        <span
          class="absolute -bottom-1 right-2 flex size-8 items-center justify-center rounded-full {iconBg} shadow-md sm:-bottom-2 sm:right-0 sm:size-10"
        >
          <HugeiconsIcon icon={AlertCircleIcon} class="size-5 {iconColor}" />
        </span>
      {/if}
    </div>

    <h1 class="mt-6 text-2xl font-bold {titleColor} sm:text-3xl">
      {title}
    </h1>

    <p class="mt-3 max-w-md text-sm font-medium text-foreground sm:text-base">
      {subtitle}
    </p>

    <p class="mt-2 max-w-md text-xs text-muted-foreground sm:text-sm">
      {description}
    </p>

    {#if children}
      <div class="mt-4">{children()}</div>
    {/if}

    {#if emailPhoneWhatsapp}
      <CardEmailPhoneWhatsapp {...emailPhoneWhatsapp} />
    {/if}

    <div class="mt-6">
      {#if actionHref}
        <a
          href={actionHref}
          class="inline-flex items-center justify-center rounded-lg {buttonBg} px-8 py-3 text-sm font-semibold {buttonTextColor} transition hover:opacity-90"
        >
          {buttonText}
        </a>
      {:else if onAction}
        <button
          type="button"
          onclick={onAction}
          class="inline-flex items-center justify-center rounded-lg {buttonBg} px-8 py-3 text-sm font-semibold {buttonTextColor} transition hover:opacity-90"
        >
          {buttonText}
        </button>
      {/if}
    </div>
  </div>
</div>
