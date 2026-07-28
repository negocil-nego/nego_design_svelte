<script lang="ts">
  import ForgetPasswordCard from "./ForgetPasswordCard.svelte";
  import LeftHero from "$lib/components/pages/login/01/ui/LeftHero.svelte";
  import type { PageForgetPasswordProps } from "$lib/types";

  /**
   * Variante 01 da página de esquecimento de senha.
   * Layout split: hero à esquerda (reutiliza do login), card de recuperação à direita.
   * @property {CarouselItem[]} carousel - Itens do carousel
   * @property {string} title - Título do hero
   */
  let {
    carousel,
    varient,
    title,
    children,
    formType,
    onSubmit,
  }: PageForgetPasswordProps = $props();
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
