<script lang="ts">
  import ForgetPasswordCard from "./ForgetPasswordCard.svelte";
  import LeftHero from "$lib/components/core/panel/LeftHero.svelte";
  import type { PageForgetPasswordProps } from "../../types";
  import { t } from "$lib/i18n";

  /**
   * Variant 01 of the forgot password page.
   * Split layout: hero on the left (reused from login), recovery card on the right.
   * @property {CarouselItem[]} carousel - Carousel items (optional, uses default values)
   * @property {string} title - Hero title
   */
  let {
    carousel,
    varient,
    title,
    children,
    formType,
    onSubmit,
  }: PageForgetPasswordProps = $props();

  const defaultCarousel = $derived([
    {
      buttonText: $t("label.next"),
      title: $t("carousel.forget-password.slide1.title"),
      description: $t("carousel.forget-password.slide1.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.forget-password.slide2.title"),
      description: $t("carousel.forget-password.slide2.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.forget-password.slide3.title"),
      description: $t("carousel.forget-password.slide3.description"),
    },
  ]);

  const carouselItems = $derived(carousel ?? defaultCarousel);
</script>

<main class="h-screen w-screen flex items-center">
  <svg width="0" height="0" class="absolute">
    <defs>
      <clipPath id="grid-curve-clip" clipPathUnits="objectBoundingBox">
        <path d="M0.35,0 L1,0 C0.85,0.3 1,0.6 0.4,1 L1,1 Z" />
      </clipPath>
    </defs>
  </svg>
  <div class="hidden md:block md:w-8/12">
    <LeftHero {title} varient={varient ?? "POINTER"} items={carouselItems} />
  </div>
  <div class="w-full md:px-0 md:w-4/12 border-gray-900">
    {#if children}
      {@render children()}
    {:else}
      <ForgetPasswordCard {formType} {onSubmit} />
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
