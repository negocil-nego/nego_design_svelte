<script lang="ts" module>
  /**
   * @component PageResetPassword01
   * Variant 01 of the password reset page. Split layout: hero on the left, card on the right.
   *
   * @example svelte
   * <PageResetPassword01 otpLength={6} onSubmit={(req) => reset(req)} />
   */
</script>

<script lang="ts">
  import ResetPasswordCard from "./ResetPasswordCard.svelte";
  import LeftHero from "$lib/components/core/panel/LeftHero.svelte";
  import type { PageResetPasswordProps } from "../../types";
  import { t } from "$lib/i18n";

  let {
    carousel,
    varient,
    title,
    children,
    otpLength,
    onSubmit,
  }: PageResetPasswordProps = $props();

  const defaultCarousel = $derived([
    {
      buttonText: $t("label.next"),
      title: $t("carousel.reset-password.slide1.title"),
      description: $t("carousel.reset-password.slide1.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.reset-password.slide2.title"),
      description: $t("carousel.reset-password.slide2.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.reset-password.slide3.title"),
      description: $t("carousel.reset-password.slide3.description"),
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
      <ResetPasswordCard {otpLength} {onSubmit} />
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
