<script lang="ts">
  import { t } from "$lib/i18n";
  import type { FooterProps } from "../../types";
  import FooterColumn from "../shared/FooterColumn.svelte";
  import FooterNewsLetter from "../shared/FooterNewsLetter.svelte";
  import SocialIcon from "../shared/FooterSocialIcon.svelte";

  let {
    items,
    logo,
    isNewsletter = false,
    socialsMedia,
    companyName,
    newsletterTitle,
    newsletterDescription,
    onSubscribe,
  }: FooterProps = $props();

  let email = $state("");
  const year = new Date().getFullYear();

  function handleSubscribe(e: SubmitEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    onSubscribe?.(value);
    email = "";
  }
</script>

<footer class="p-10">
  <div
    class="flex flex-col gap-10 md:flex-row md:items-start md:justify-between"
  >
    <div class="shrink-0">
      {#if logo}
        <img src={logo} alt="" class="h-10 w-auto" />
      {/if}
    </div>

    <div class="flex flex-1 flex-wrap justify-between gap-10">
      {#each items as column, i (i)}
        <FooterColumn title={column.title} items={column.items} />
      {/each}
    </div>
  </div>

  {#if isNewsletter}
    <div
      class="mt-10 flex flex-col gap-4 border-t border-gray/10 pt-8 md:flex-row md:items-center md:justify-between"
    >
      <FooterNewsLetter
        {isNewsletter}
        {newsletterTitle}
        {newsletterDescription}
        {onSubscribe}
      />
    </div>
  {/if}

  <div
    class="mt-10 flex flex-col gap-4 border-t border-gray/10 pt-6 md:flex-row md:items-center md:justify-between"
  >
    <p class="text-sm">
      ©
      {year}
      {companyName}
      {$t("footer.copyr")}
    </p>
    <div class="flex items-center gap-4">
      {#each socialsMedia as social, i (i)}
        <SocialIcon {...social} />
      {/each}
    </div>
  </div>
</footer>
