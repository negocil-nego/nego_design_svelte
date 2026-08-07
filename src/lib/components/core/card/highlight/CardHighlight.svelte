<script lang="ts">
  import CardFavorite from "../shared/CardFavorite.svelte";
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardPromotionProps } from "../types";

  let {
    logo,
    imageUrl,
    title,
    isFavorite = false,
  }: CardPromotionProps = $props();
</script>

<article class="relative rounded-sm">
  {#if logo}
    <div class="absolute top-1 left-1 z-2 flex gap-1 p-2">
      <img src={logo} width={30} height={30} alt={title} class="rounded-lg" />
    </div>
  {/if}

  <div class="absolute top-1 right-1 z-2 flex gap-1 p-2">
    <CardFavorite {isFavorite} />
  </div>

  {#if imageUrl}
    <img
      src={imageUrl}
      alt={imageUrl}
      class="rounded-lg md:h-37.5 md:w-37.5 lg:h-50 lg:w-50 object-cover object-center"
    />
  {/if}
  <div class="absolute inset-0 bg-black/5 rounded-sm h-full w-full"></div>

  <div
    class="absolute bottom-1 inset-x-0 flex justify-center m-auto bg-black/10 backdrop-blur-sm max-w-11/12 p-2 rounded-md"
  >
    {#if title}
      <div class="text-center font-semibold text-[12px]">{title}</div>
    {/if}
  </div>
</article>
