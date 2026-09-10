<script lang="ts">
  import { t } from "$lib/i18n";
  import type { FooterProps } from "../../types";

  type Props = {
    isNewsletter?: boolean;
    newsletterTitle?: string;
    newsletterDescription?: string;
    onSubscribe?: (email: string) => void;
  };

  let {
    isNewsletter = false,
    newsletterTitle,
    newsletterDescription,
    onSubscribe,
  }: Props = $props();

  let email = $state("");

  function handleSubscribe(e: SubmitEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    onSubscribe?.(value);
    email = "";
  }
</script>

{#if isNewsletter}
  <div>
    <h3 class="mb-1 text-sm font-semibold">
      {newsletterTitle ?? $t("footer.subscribe.title")}
    </h3>
    <p class="text-sm leading-relaxed">
      {newsletterDescription ?? $t("footer.subscribe.text")}
    </p>
    <form
      onsubmit={handleSubscribe}
      class="flex flex-col items-stretch gap-2 sm:flex-row"
    >
      <input
        type="email"
        bind:value={email}
        placeholder="Enter your email"
        required
        class="w-56 rounded-lg border border-gray px-3.5 py-2 text-sm placeholder:text-slate-500 outline-none"
      />
      <button
        type="submit"
        class="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors bg-gradient"
      >
        {$t("footer.subscribe")}
      </button>
    </form>
  </div>
{/if}
