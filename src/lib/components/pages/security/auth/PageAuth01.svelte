<script lang="ts" module>
  /**
   * @component PageAuth01
   * Shared layout for auth pages (login/register) variant 01.
   * Split layout: hero on the left, auth card on the right with grid pattern.
   */
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import LeftHero from "$lib/components/ui/panel/LeftHero.svelte";

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

<main class="h-screen w-screen flex items-center">
  <div class="hidden md:block md:w-7/12 relative">
    <LeftHero {title} type={type ?? "POINTER"} items={carousel} />
    <svg width="0" height="0" class="absolute">
      <defs>
        <clipPath id="grid-curve-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.35,0 L1,0 C0.85,0.3 1,0.6 0.4,1 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  </div>
  <div
    class="w-full md:w-5/12 border-gray-900 overflow-y-auto px-10 bg-gradient"
  >
    {#if children}
      {@render children()}
    {/if}
  </div>
</main>

<style>
  :global(.grid-pattern) {
    background-size: 40px 40px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    clip-path: url(#grid-curve-clip);
  }
</style>
