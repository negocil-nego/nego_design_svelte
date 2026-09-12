<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { Section03Props } from "./types";

  let {
    title,
    description,
    items = [],
    titleClass,
    descriptionClass,
    className,
  }: Section03Props = $props();
</script>

<section class={className}>
  <div class="px-6 py-12 md:px-12 md:py-20">
    <div
      class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16"
    >
      <h2
        class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:max-w-3xl {titleClass}"
      >
        {title}
      </h2>
      {#if description}
        <p
          class="text-sm md:text-base text-gray-600 md:max-w-sm {descriptionClass}"
        >
          {description}
        </p>
      {/if}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each items as item, i (i)}
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-center w-12 h-12">
            {#if typeof item.icon === "string"}
              <i class="text-3xl {item.icon}"></i>
            {:else}
              <HugeiconsIcon icon={item.icon} class="size-8" />
            {/if}
          </div>
          <h3 class="text-lg font-bold">{item.title}</h3>
          {#if item.description}
            <p class="text-sm">{item.description}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
