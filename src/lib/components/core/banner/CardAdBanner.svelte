<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import type { BannerProps } from "./types";
  import { AdvertisimentIcon } from "@hugeicons/core-free-icons";

  let {
    tagText,
    titleHighlight,
    titleMain,
    buttonText = "Saiba mais",
    onClickButton,
    href,
    class: className = "",
    titleHighlightClass,
    titleMainClass,
    tagTextClass,
    buttonClass,
    titleBgClass,
    tagBgClass,
  }: BannerProps = $props();
</script>

{#snippet content()}
  <article
    class="relative flex w-full items-stretch overflow-hidden rounded-lg border border-transparent {className}"
  >
    <!-- Left accent strip -->
    <aside
      class="flex w-28 shrink-0 flex-col justify-center gap-1 {tagBgClass ||
        'bg-blue-400'} px-3 py-2 sm:w-32"
    >
      <HugeiconsIcon
        icon={AdvertisimentIcon}
        size={30}
        color="#ffffff"
        strokeWidth={1}
      />
      <p
        class={`text-sm leading-tight font-bold ${tagTextClass || "text-[#dce9e7]"}`}
      >
        {tagText}
      </p>
    </aside>

    <!-- Main content -->
    <div
      class="flex flex-1 flex-wrap items-center justify-between gap-3 {titleBgClass ||
        'bg-[#dabc16]'} px-4 py-3 sm:px-6"
    >
      <h3 class="text-lg font-extrabold tracking-tight sm:text-2xl">
        <span class="{titleHighlightClass || 'text-white'} pr-2"
          >{titleHighlight}</span
        >
        <span class={titleMainClass || "text-gray-200"}>{titleMain}</span>
      </h3>

      <Button
        onclick={() => onClickButton?.()}
        class="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-white/90 {buttonClass}"
      >
        {buttonText}
      </Button>
    </div>
  </article>
{/snippet}

{#if href}
  <a {href} class="block">
    {@render content()}
  </a>
{:else}
  {@render content()}
{/if}
