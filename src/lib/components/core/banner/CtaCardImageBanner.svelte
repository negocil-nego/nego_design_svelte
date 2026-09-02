<script lang="ts">
  import type { CtaCardImageBannerProps } from "./types";

  let {
    title,
    description,
    primaryText,
    secondaryText,
    primaryHref,
    secondaryHref,
    onClickPrimary,
    onClickSecondary,
    imageSrc = "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
    imageAlt = "Imagem de destaque",
    imageWidth = 1824,
    imageHeight = 1080,
    class: className = "",
    imageContainerClass = "",
  }: CtaCardImageBannerProps = $props();
</script>

<div class="w-full">
  <div class="w-full p-2">
    <div
      class="relative isolate overflow-hidden bg-gradient px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 {className}"
    >
      {#snippet pill(
        label: string,
        href: string | undefined,
        onClick: (() => void) | undefined,
        style: "primary" | "secondary",
      )}
        {#if href}
          <a
            {href}
            class={style === "primary"
              ? "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              : "text-sm/6 font-semibold text-white hover:text-gray-100"}
          >
            {label}
            {#if style === "secondary"}<span aria-hidden="true">→</span>{/if}
          </a>
        {:else}
          <button
            type="button"
            onclick={() => onClick?.()}
            class={style === "primary"
              ? "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              : "text-sm/6 font-semibold text-white hover:text-gray-100"}
          >
            {label}
            {#if style === "secondary"}<span aria-hidden="true">→</span>{/if}
          </button>
        {/if}
      {/snippet}

      <div
        class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left"
      >
        <h2
          class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
        >
          {title}
        </h2>
        {#if description}
          <p class="mt-6 text-lg/8 text-pretty text-gray-300">{description}</p>
        {/if}
        <div
          class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
        >
          {@render pill(primaryText, primaryHref, onClickPrimary, "primary")}
          {#if secondaryText}
            {@render pill(
              secondaryText,
              secondaryHref,
              onClickSecondary,
              "secondary",
            )}
          {/if}
        </div>
      </div>
      <div class="relative mt-16 h-40 lg:mt-8 {imageContainerClass}">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          class="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
        />
      </div>
    </div>
  </div>
</div>
