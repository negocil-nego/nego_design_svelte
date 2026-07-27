<script lang="ts">
  import type {
    CarouselItem,
    CarouselItemType,
  } from "../../../../../core/carousel/data/CarouselModel";
  import type { Snippet } from "svelte";
  import AuthCard from "./AuthCard.svelte";
  import LeftHero from "./LeftHero.svelte";
  import type { AuthFormType, LinkProps } from "../data/page-props";

  type Props = {
    carousel?: CarouselItem[];
    varient?: CarouselItemType;
    title?: string;
    children?: Snippet;
    formType?: AuthFormType;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
  };

  let { carousel, varient, title, formType, children, privacyPolicy, termsOfService }: Props = $props();
</script>

<main class="h-screen w-screen flex items-center">
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
  }
</style>
