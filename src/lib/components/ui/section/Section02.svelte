<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
      import type { Section02Props } from "./types";

  let {
    title,
    description,
    image,
    imageAlt,
    features = [],
    titleClass,
    descriptionClass,
    className,
    imageClass,
  }: Section02Props = $props();
</script>

<section class={className}>
  <div class="px-6 py-12 md:px-12 md:py-20">
    <div class="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
      <div class="flex flex-col gap-8 md:w-1/2">
        <h2
          class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight {titleClass}"
        >
          {title}
        </h2>
        {#if image}
          <div class="rounded-3xl overflow-hidden">
            <img
              src={image}
              alt={imageAlt ?? title}
              class="w-full h-auto object-cover {imageClass}"
            />
          </div>
        {/if}
      </div>

      <div class="flex flex-col gap-8 md:w-1/2">
        {#if description}
          <p class="text-sm md:text-base text-gray-600 {descriptionClass}">
            {description}
          </p>
        {/if}

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {#each features as feature, i (i)}
            <div class="flex flex-col gap-3">
              <h3 class="text-lg font-bold">{feature.title}</h3>
              {#if feature.description}
                <p class="text-sm text-gray-500">{feature.description}</p>
              {/if}
              {#if feature.link}
                <a
                  href={feature.link}
                  class="inline-flex items-center gap-2 text-sm font-semibold mt-2 hover:opacity-80 transition-opacity"
                >
                  {feature.linkLabel ?? "Learn More"}
                  <ImageHugeicons icon="arrow-right-01" class="size-4" />
                </a>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
