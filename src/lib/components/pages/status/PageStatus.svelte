<script lang="ts">
  import type { PageStatusProps } from "./types";
  import CardEmailPhoneWhatsapp from "$lib/components/ui/card/varients/CardEmailPhoneWhatsapp.svelte";
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
  import Button from "$lib/components/ui/button/button.svelte";
  import ImageSvgAnimate from "$lib/components/ui/image/ImageSvgAnimate.svelte";
  import ButtonBack from "$lib/components/ui/button/ButtonBack.svelte";

  let {
    title = "",
    subtitle = "",
    description = "",
    buttonText = "",
    svgKey,
    imgSlot,
    onAction,
    onButtonBack,
    actionHref,
    className = "",
    titleColor = "",
    buttonBg = "",
    buttonTextColor = "",
    emailPhoneWhatsapp,
    children,
    isLoading = false,
  }: PageStatusProps = $props();
</script>

<div
  class="flex min-h-svh flex-col items-center justify-center px-4 py-10 {className}"
>
  {#if onButtonBack}
    <div class="absolute top-5 left-5">
      <ButtonBack onclick={onButtonBack} isLabel />
    </div>
  {/if}
  <div class="absolute top-5 right-5 flex gap-3">
    <ThemeSwitch />
    <LanguageSwitcher />
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="relative">
      {#if svgKey}
        <ImageSvgAnimate key={svgKey} class="size-32 sm:size-40" />
      {:else if imgSlot}
        {@render imgSlot()}
      {/if}
    </div>

    <h1 class="mt-6 text-2xl font-bold {titleColor} sm:text-3xl">
      {title}
    </h1>

    <p class="mt-3 max-w-md text-sm font-medium text-foreground sm:text-base">
      {subtitle}
    </p>

    <p class="max-w-md text-xs text-muted-foreground sm:text-sm my-5">
      {description}
    </p>

    {#if children}
      <div>{@render children()}</div>
    {/if}

    {#if emailPhoneWhatsapp}
      <CardEmailPhoneWhatsapp {...emailPhoneWhatsapp} {isLoading} />
    {/if}

    <div>
      {#if actionHref}
        <a
          href={actionHref}
          class="inline-flex items-center justify-center rounded-lg {buttonBg} px-8 py-3 text-sm font-semibold {buttonTextColor} transition hover:opacity-90"
        >
          {buttonText}
        </a>
      {:else if onAction}
        <Button
          type="button"
          onclick={onAction}
          disabled={isLoading}
          class="md:min-w-75 lg:min-w-100 bg-gradient mx-2 px-8 py-3 font-semibold {buttonTextColor} transition {isLoading
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:opacity-90'} md:mt-3 xl:mt-5"
        >
          {buttonText}
        </Button>
      {/if}
    </div>
  </div>
</div>
