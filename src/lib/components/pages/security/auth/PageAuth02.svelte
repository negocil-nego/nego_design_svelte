<script lang="ts" module>
  /**
   * @component PageAuth02
   * Shared layout for auth pages (login/register) variant 02.
   * Split layout: hero image on the left, auth card on the right.
   */
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import LeftHero from "$lib/components/pages/security/login/02/ui/LeftHero02.svelte";

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
  <div class="hidden md:flex w-7/12 h-screen">
    <LeftHero {title} type={type ?? "POINTER"} items={carousel} />
  </div>
  <div class="w-full md:w-5/12 flex flex-col h-screen overflow-y-auto">
    {#if children}
      {@render children()}
    {/if}
  </div>
</main>
