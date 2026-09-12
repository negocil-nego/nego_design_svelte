<script lang="ts" module>
  /**
   * @component PageLogin02
   * Variant 02 of the login page. Split layout: hero image on the left, auth card on the right.
   *
   * @example svelte
   * <PageLogin02 formType="USERNAME_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import AuthCard from "./LoginCard02.svelte";
  import PageAuth02 from "$lib/components/pages/security/auth/PageAuth02.svelte";
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

<PageAuth02 {title} {type} carousel={carouselItems}>
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
</PageAuth02>
