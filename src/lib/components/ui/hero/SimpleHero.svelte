<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import type { HeroSimpleProps } from "./types";
  let {
    title,
    subTitle,
    description,
    image,
    buttons,
    titleClass,
    subTitleClass,
    descriptionClass,
    imageClass,
  }: HeroSimpleProps = $props();
</script>

<section class="relative flex p-2">
  <div class="w-full grid grid-cols-10 md:grid-cols-2 min-h-50 md:min-h-125">
    <div class="flex justify-center items-center">
      <div class="space-y-1">
        {#if title}
          <h1
            class="font-bold text-[24px] md:text-[60px] lg:text-[80px] {titleClass}"
          >
            {title}
          </h1>
        {/if}
        {#if subTitle}
          <p class="font-semibold text-[16px] md:text-[40px] {subTitleClass}">
            {subTitle}
          </p>
        {/if}
        {#if description}
          <p
            class="text-[12px] md:text-[20px] md:w-8/12 mt-5 {descriptionClass}"
          >
            {description}
          </p>
        {/if}
        {#if buttons}
          <div class="flex flex-wrap gap-2 mt-5 md:mt-10">
            {#each buttons as button, i (i)}
              <Button
                href={button.href}
                class={button.className}
                onclick={button.onClick}
              >
                {button.label}
              </Button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    <div class="flex justify-center items-center">
      {#if image}
        <img
          src={image}
          alt={image}
          class="rounded-lg h-50 md:h-125 w-[60%] object-cover {imageClass}"
        />
      {/if}
    </div>
  </div>
</section>
