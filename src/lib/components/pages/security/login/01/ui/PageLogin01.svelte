<script lang="ts" module>
  /**
   * @component PageLogin01
   * Variant 01 of the login page. Split layout: hero on the left, auth card on the right.
   *
   * @example svelte
   * <PageLogin01 formType="USERNAME_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import LoginCard01 from "./LoginCard01.svelte";
  import PageAuth01 from "$lib/components/pages/security/auth/PageAuth01.svelte";
  import type { PageLoginProps } from "../../types";
  import { t } from "$lib/i18n";

  let {
    carousel,
    type,
    title,
    formType = "USERNAME_PASSWORD",
    children,
    onSubmit,
    onButtonBack,
    forgetPassword,
    privacyPolicy,
    termsOfService,
    socialLogins = [],
    isLoading,
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

<PageAuth01 {title} {type} carousel={carouselItems}>
  {#if children}
    {@render children()}
  {:else}
    <LoginCard01
      {formType}
      {onSubmit}
      {onButtonBack}
      {forgetPassword}
      {privacyPolicy}
      {termsOfService}
      {socialLogins}
      {isLoading}
    />
  {/if}
</PageAuth01>
