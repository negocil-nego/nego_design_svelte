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
  import PageAuth03 from "$lib/components/pages/security/auth/PageAuth03.svelte";
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

<PageAuth03 {title} {type} carousel={carouselItems}>
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
      {isLoading}
    />
  {/if}
</PageAuth03>
