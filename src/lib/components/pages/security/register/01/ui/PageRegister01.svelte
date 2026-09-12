<script lang="ts" module>
  /**
   * @component PageRegister01
   * Variant 01 of the register page. Split layout: hero on the left, auth card on the right.
   *
   * @example svelte
   * <PageRegister01 fields={{ isName: true, isEmail: true }} onSubmit={(data) => register(data)} />
   */
</script>

<script lang="ts">
  import AuthCard from "./RegisterCard.svelte";
  import PageAuth01 from "$lib/components/pages/security/auth/PageAuth01.svelte";
  import type { PageRegisterProps } from "../types";
  import { t } from "$lib/i18n";

  let {
    carousel,
    type,
    title,
    fields,
    children,
    onSubmit,
    login,
    privacyPolicy,
    termsOfService,
    socialLogins = [],
  }: PageRegisterProps = $props();

  const defaultCarousel = $derived([
    {
      buttonText: $t("label.next"),
      title: $t("carousel.register.slide1.title") ?? $t("carousel.login.slide1.title"),
      description: $t("carousel.register.slide1.description") ?? $t("carousel.login.slide1.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.register.slide2.title") ?? $t("carousel.login.slide2.title"),
      description: $t("carousel.register.slide2.description") ?? $t("carousel.login.slide2.description"),
    },
    {
      buttonText: $t("label.next"),
      title: $t("carousel.register.slide3.title") ?? $t("carousel.login.slide3.title"),
      description: $t("carousel.register.slide3.description") ?? $t("carousel.login.slide3.description"),
    },
  ]);

  const carouselItems = $derived(carousel ?? defaultCarousel);
</script>

<PageAuth01 {title} {type} carousel={carouselItems}>
  {#if children}
    {@render children()}
  {:else}
    <AuthCard
      {fields}
      {onSubmit}
      {login}
      {privacyPolicy}
      {termsOfService}
      {socialLogins}
    />
  {/if}
</PageAuth01>
