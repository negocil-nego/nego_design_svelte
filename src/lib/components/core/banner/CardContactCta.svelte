<script lang="ts">
  import type { CardContactCtaProps } from "./types";

  let {
    title,
    description,
    primaryText,
    secondaryText,
    onClickPrimary,
    onClickSecondary,
    primaryHref,
    secondaryHref,
    class: className = "",
    rings: customRings = [],
  }: CardContactCtaProps = $props();

  // Painter's-algorithm rings: largest/darkest first, smallest/lightest last.
  const rings =
    customRings && customRings.length > 0
      ? customRings
      : [
          { size: 920, color: "#2563EB" },
          { size: 760, color: "#3B76ED" },
          { size: 610, color: "#548BF0" },
          { size: 470, color: "#7FA6F3" },
          { size: 340, color: "#A9C2F6" },
          { size: 220, color: "#CFDEFA" },
          { size: 110, color: "#EEF3FD" },
        ];
</script>

{#snippet pill(
  label: string,
  onClick: (() => void) | undefined,
  href: string | undefined,
)}
  {#snippet inner()}
    <span class="whitespace-nowrap">{label}</span>
    <span
      class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 L17 7" />
        <path d="M8 7 L17 7 L17 16" />
      </svg>
    </span>
  {/snippet}

  {#if href}
    <a
      {href}
      class="inline-flex items-center gap-3 rounded-full bg-neutral-900 py-3 pr-2 pl-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
    >
      {@render inner()}
    </a>
  {:else}
    <button
      type="button"
      onclick={() => onClick?.()}
      class="inline-flex items-center gap-3 rounded-full bg-neutral-900 py-3 pr-2 pl-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
    >
      {@render inner()}
    </button>
  {/if}
{/snippet}

<article
  class="relative isolate overflow-hidden rounded-3xl bg-gradient p-1 shadow-sm {className}"
>
  <div
    class="relative overflow-hidden rounded-[1.35rem] px-6 py-10 sm:px-10 sm:py-12"
  >
    <!-- Concentric ring decoration -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      {#each rings as ring (ring.size)}
        <div
          class="absolute top-1/2 right-0 rounded-full"
          style="
            width: {ring.size}px;
            height: {ring.size}px;
            background: {ring.color};
            transform: translate(45%, -50%);
          "
        ></div>
      {/each}
    </div>

    <div class="relative z-10 max-w-md">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        {title}
      </h2>

      {#if description}
        <p class="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
          {description}
        </p>
      {/if}

      <div class="mt-7 flex flex-wrap items-center gap-3">
        {@render pill(primaryText, onClickPrimary, primaryHref)}
        {#if secondaryText}
          {@render pill(secondaryText, onClickSecondary, secondaryHref)}
        {/if}
      </div>
    </div>
  </div>
</article>
