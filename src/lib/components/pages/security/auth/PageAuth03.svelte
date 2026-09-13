<script lang="ts" module>
  /**
   * @component PageAuth03
   * Shared layout for auth pages (login/register) variant 03.
   * Split layout with glass morphism: hero on the left, auth card on the right.
   */
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import LeftHero from "$lib/components/pages/security/login/03/ui/LeftHero03.svelte";

  type CarouselItem = {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl?: string;
    backgroundUrl?: string;
  };

  type Props = {
    title?: string;
    type?: "NUMBER" | "DOT" | "POINTER";
    carousel?: CarouselItem[];
    children?: Snippet;
  };

  let { title, type, carousel = [], children }: Props = $props();
</script>

<main class="h-screen w-screen flex items-center justify-center">
  <div class="hidden md:flex w-1/2 h-screen">
    <LeftHero {title} type={type ?? "DOT"} items={carousel} />
  </div>
  <div class="w-full md:w-1/2 flex flex-col h-screen overflow-y-auto">
    {#if children}
      {@render children()}
    {/if}
  </div>
</main>
