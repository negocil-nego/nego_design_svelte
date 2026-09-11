<script lang="ts" module>
  /**
   * @component PageLogin03
   * Variant 03 of the login page. Split layout with glass morphism: hero on the left, auth card on the right.
   *
   * @example svelte
   * <PageLogin03 formType="USERNAME_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import AuthCard from "./LoginCard03.svelte";
  import LeftHero from "./LeftHero03.svelte";
  import type { PageLoginProps } from "../../types";
  import { t } from "$lib/i18n";

  let {
    carousel,
    type,
    title,
    formType = "USERNAME_PASSWORD",
    children,
    onSubmit,
    forgetPassword,
    privacyPolicy,
    termsOfService,
    socialLogins = [],
  }: PageLoginProps = $props();

  const defaultCarousel = $derived([
    {
      buttonText: $t("label.next"),
      title: $t("carousel.login.slide1.title"),
      description: $t("carousel.login.slide1.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.login.slide2.title"),
      description: $t("carousel.login.slide2.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.login.slide3.title"),
      description: $t("carousel.login.slide3.description"),
    },
  ]);

  const carouselItems = $derived(carousel ?? defaultCarousel);
</script>

<main class="h-screen w-screen flex items-center justify-center">
  <div class="hidden md:flex w-1/2 h-screen">
    <LeftHero {title} type={type ?? "DOT"} items={carouselItems} />
  </div>
  <div class="w-full md:w-1/2 flex flex-col h-screen">
    {#if children}
      {@render children()}
    {:else}
      <AuthCard
        {formType}
        {onSubmit}
        {forgetPassword}
        {privacyPolicy}
        {termsOfService}
        {socialLogins}
      />
    {/if}
  </div>
</main>
