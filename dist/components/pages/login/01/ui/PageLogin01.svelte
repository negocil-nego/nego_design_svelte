<script lang="ts">
  import AuthCard from "./AuthCard.svelte";
  import LeftHero from "./LeftHero.svelte";
  import type { PageLoginProps } from "../data/page-props";

  /**
   * Variante 01 da página de login.
   * Layout split: hero à esquerda, auth card à direita.
   * @property {CarouselItem[]} carousel - Itens do carousel
   * @property {string} title - Título do hero
   * @property {AuthFormType} formType - Tipo do form de login
   * @property {LinkProps} privacyPolicy - Config do link de privacidade
   * @property {LinkProps} termsOfService - Config do link de termos
   */
  let {
    carousel,
    varient,
    title,
    formType,
    children,
    privacyPolicy,
    termsOfService,
  }: PageLoginProps = $props();
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
    <LeftHero {title} varient={varient ?? "POINTER"} items={carousel ?? []} />
  </div>
  <div class="w-full md:px-0 md:w-4/12 border-gray-900">
    {#if children}
      {@render children()}
    {:else}
      <AuthCard {formType} {privacyPolicy} {termsOfService} />
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
