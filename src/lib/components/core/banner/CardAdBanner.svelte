<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import type { BannerProps } from "./types";

  let {
    tagText,
    titleHighlight,
    titleMain,
    buttonText = "Saiba mais",
    onClickButton,
    href,
    class: className = "",
  }: BannerProps = $props();
</script>

{#snippet content()}
  <article
    class="relative flex w-full items-stretch overflow-hidden rounded-lg border border-transparent {className}"
  >
    <!-- Left accent strip -->
    <aside
      class="flex w-28 shrink-0 flex-col justify-center gap-1 bg-amber-400 px-3 py-2 sm:w-32"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#173F3A"
        stroke-width="1.6"
        class="mb-1"
        aria-hidden="true"
      >
        <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
        <path d="M12 2 L12 22" opacity="0.5" />
        <path d="M3 7 L12 12 L21 7" opacity="0.5" />
        <circle cx="8" cy="18.5" r="2.4" fill="#173F3A" stroke="none" />
        <path
          d="M9.7 20.2 L11.2 21.7"
          stroke="#173F3A"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
      <p class="text-sm leading-tight font-bold text-[#173F3A]">
        {tagText}
      </p>
    </aside>

    <!-- Main content -->
    <div
      class="flex flex-1 flex-wrap items-center justify-between gap-3 bg-[#0B4A42] px-4 py-3 sm:px-6"
    >
      <h3 class="text-lg font-extrabold tracking-tight sm:text-2xl">
        <span class="text-amber-400 pr-2">{titleHighlight}</span>
        <span class="text-emerald-400">{titleMain}</span>
      </h3>

      <Button
        onclick={() => onClickButton?.()}
        class="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-white/90"
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
