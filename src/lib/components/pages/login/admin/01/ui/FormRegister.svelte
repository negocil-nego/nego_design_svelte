<script lang="ts">
  import InputPasswordConfirm from "$lib/components/core/form/ui/input-password-confirm.svelte";
  import InputPassword from "$lib/components/core/form/ui/input-password.svelte";
  import InputEmail from "$lib/components/core/form/ui/input-email.svelte";
  import ButtonLogin from "$lib/components/core/button/ButtonLogin.svelte";
  import { t } from "$lib/i18n";

  let email = $state("");
  let password = $state("");
</script>

<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
  <p class="text-[13px] py-3">{$t("text.register")}</p>

  <div class="space-y-1">
    <InputEmail value={email} />
  </div>

  <div class="space-y-1">
    <InputPassword value={password} />
  </div>

  <div class="space-y-1">
    <InputPasswordConfirm value={password} />
  </div>

  <ButtonLogin />
</form>
