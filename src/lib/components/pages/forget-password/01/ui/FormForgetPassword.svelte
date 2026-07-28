<script lang="ts">
  import InputEmail from "$lib/components/core/form/ui/input-email.svelte";
  import InputPhone from "$lib/components/core/form/ui/input-phone.svelte";
  import { t } from "$lib/i18n";
  import type { ForgetPasswordRequestDto, ForgetPasswordVariant } from "../../types";
  import ButtonSend from "$lib/components/core/button/ButtonSend.svelte";

  type Props = {
    variant?: ForgetPasswordVariant;
    onSubmit?: (request: ForgetPasswordRequestDto) => void;
  };

  let { variant = "EMAIL", onSubmit }: Props = $props();
  let data = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({ data, variant });
  }
</script>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <p class="text-[13px] py-3">{$t("text.forget-password")}</p>

  <div class="space-y-1">
    {#if variant === "EMAIL"}
      <InputEmail bind:value={data} />
    {:else if variant === "PHONE"}
      <InputPhone bind:value={data} />
    {/if}
  </div>

  <ButtonSend type="submit" />
</form>
