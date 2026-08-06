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
  <div class="absolute top-1 right-1 flex gap-1 p-2">
    <CardFavorite {isFavorite} />
  </div>

  {#if imageUrl}
    <img
      src={imageUrl}
      alt={imageUrl}
      class="rounded-lg md:h-37.5 md:w-37.5 lg:h-50 lg:w-50 object-cover object-center"
    />
  {/if}

  <div
    class="absolute bottom-1 inset-x-0 flex justify-center m-auto bg-black/10 backdrop-blur-sm max-w-11/12 p-2 rounded-md"
  >
    {#if logo}
      <div>
        <img src={logo} width={40} height={40} alt={title} class="rounded-lg" />
      </div>
    {/if}
    {#if title}
      <div class="text-center font-semibold">{title}</div>
    {/if}
  </div>
</article>
