<script lang="ts">
  import InputEmail from "$lib/components/core/form/ui/input-email.svelte";
  import InputPassword from "$lib/components/core/form/ui/input-password.svelte";
  import ButtonLogin from "$lib/components/core/button/ButtonLogin.svelte";
  import LinkForgetPassword from "$lib/components/core/link/link-forget-password.svelte";
  import LabelOr from "$lib/components/core/label/LabelOr.svelte";
  import ButtonLoginWith from "$lib/components/core/button/ButtonLoginWith.svelte";
  import { t } from "$lib/i18n";

  let email = $state("");
  let password = $state("");
</script>

<form class="w-full space-y-4" onsubmit={(e) => e.preventDefault()}>
  <p class="text-[13px] py-3">{$t("text.login")}</p>

  <div class="space-y-1">
    <InputEmail value={email} />
  </div>

  <div class="space-y-1 relative">
    <InputPassword value={password} />
    <LinkForgetPassword />
  </div>

  <div class="flex flex-col gap-1">
    <ButtonLogin />
    <LabelOr variant="SEPARATOR" />
    <ButtonLoginWith icon="GOOGLE" />
  </div>
</form>
