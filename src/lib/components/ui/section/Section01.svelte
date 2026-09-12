<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import {
    ArrowLeft01Icon,
    ArrowRight01Icon,
  } from "@hugeicons/core-free-icons";
  import type { Section01Props } from "./types";

  let {
    title,
    description,
    items = [],
    selectedKey,
    titleClass,
    descriptionClass,
    className,
    onSelect,
    onPrev,
    onNext,
  }: Section01Props = $props();
</script>

<section class={className}>
  <div class="px-6 py-12 md:px-12 md:py-20">
    <div
      class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12"
    >
      <h2
        class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight {titleClass}"
      >
        {title}
      </h2>
      <div class="flex flex-col gap-6 md:max-w-md">
        <p class="text-sm md:text-base text-gray-600 {descriptionClass}">
          {description}
        </p>
        <div class="flex items-center gap-4">
          <button
            onclick={onPrev}
            class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} class="size-5" />
          </button>
          <div class="flex-1 h-0.5">
            <div class="h-full bg-black w-1/3"></div>
          </div>
          <button
            onclick={onNext}
            class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} class="size-5" />
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each items as item, i (i)}
        <button
          onclick={() => onSelect?.(item.id ?? i)}
          class="flex flex-col items-start text-left p-6 rounded-2xl transition-colors {item.isActive
            ? 'bg-[#3d3d3d] text-white'
            : 'bg-white text-black hover:bg-gray-100'}"
        >
          <div
            class="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-6 {item.isActive
              ? 'bg-white/20'
              : 'bg-gray-100'}"
          >
            {#if typeof item.icon === "string"}
              <i class="text-2xl {item.icon}"></i>
            {:else}
              <HugeiconsIcon icon={item.icon} class="size-7" />
            {/if}
          </div>
          <h3 class="text-lg font-bold mb-2">{item.title}</h3>
          {#if item.description}
            <p
              class="text-sm {item.isActive
                ? 'text-gray-300'
                : 'text-gray-500'}"
            >
              {item.description}
            </p>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>
