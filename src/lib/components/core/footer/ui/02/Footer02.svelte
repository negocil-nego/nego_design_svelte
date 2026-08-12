<script lang="ts">
  import { t } from "$lib/i18n";
  import type { FooterProps } from "../../types";
  import FooterColumn from "../shared/FooterColumn.svelte";
  import FooterNewsLetter from "../shared/FooterNewsLetter.svelte";
  import SocialIcon from "../shared/FooterSocialIcon.svelte";

  let {
    items,
    isNewsletter = false,
    socialsMedia,
    companyName,
    newsletterTitle,
    newsletterDescription,
    onSubscribe,
  }: FooterProps = $props();

  const year = new Date().getFullYear();
</script>

<footer class="p-10">
  <div class="flex flex-wrap justify-between gap-10">
    {#each items as column, i (i)}
      <FooterColumn title={column.title} items={column.items} />
    {/each}

    {#if isNewsletter}
      <div class="min-w-60">
        <FooterNewsLetter
          {isNewsletter}
          {newsletterTitle}
          {newsletterDescription}
          {onSubscribe}
        />
      </div>
    {/if}
  </div>

  <div
    class="mt-10 flex flex-col gap-4 border-t border-gray/10 pt-6 md:flex-row md:items-center md:justify-between"
  >
    <p class="text-sm">
      © {year}
      {companyName}
      {$t("footer.copyr")}
    </p>
    <div class="flex items-center gap-4">
      {#each socialsMedia as social, i (i)}
        <SocialIcon icon={social.icon} text={social.text} />
      {/each}
    </div>
  </div>
</footer>
