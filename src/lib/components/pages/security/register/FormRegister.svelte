<script lang="ts">
  import InputPasswordConfirm from "$lib/components/ui/form/ui/input-password-confirm.svelte";
  import InputPassword from "$lib/components/ui/form/ui/input-password.svelte";
  import InputEmail from "$lib/components/ui/form/ui/input-email.svelte";
  import InputBase from "$lib/components/ui/form/ui/input-base.svelte";
  import InputPhone from "$lib/components/ui/form/ui/input-phone.svelte";
  import ButtonLogin from "$lib/components/ui/button/ButtonLogin.svelte";
  import { t } from "$lib/i18n";
  import type { RegisterFormFields, RegisterRequestDto } from "./types";

  type Props = {
    fields?: RegisterFormFields;
    onSubmit?: (data: RegisterRequestDto) => void;
  };

  let {
    fields = {},
    onSubmit,
  }: Props = $props();

  let name = $state("");
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let birthday = $state("");
  let gender = $state("");
  let phone = $state("");

  const {
    isName = false,
    isEmail = true,
    isPassword = true,
    isConfirmPassword = true,
    isBirthday = false,
    isGender = false,
    isPhone = false,
  } = fields;

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({
      name: isName ? name : undefined,
      email,
      password: isPassword ? password : undefined,
      confirmPassword: isConfirmPassword ? confirmPassword : undefined,
      birthday: isBirthday ? birthday : undefined,
      gender: isGender ? gender : undefined,
      phone: isPhone ? phone : undefined,
    });
  }
</script>

<form class="space-y-4" onsubmit={handleSubmit}>
  <p class="text-[13px] py-3">{$t("text.register")}</p>

  {#if isName}
    <div class="space-y-1">
      <InputBase
        type="text"
        label={$t("input.name.label") ?? "Name"}
        placeholder={$t("input.name.placeholder") ?? "Your name"}
        isLabel
        isIcon
        bind:value={name}
      />
    </div>
  {/if}

  {#if isEmail}
    <div class="space-y-1">
      <InputEmail bind:value={email} />
    </div>
  {/if}

  {#if isPhone}
    <div class="space-y-1">
      <InputPhone bind:value={phone} />
    </div>
  {/if}

  {#if isBirthday}
    <div class="space-y-1">
      <InputBase
        type="date"
        label={$t("input.birthday.label") ?? "Birthday"}
        placeholder={$t("input.birthday.placeholder") ?? "Your birthday"}
        isLabel
        isIcon
        bind:value={birthday}
      />
    </div>
  {/if}

  {#if isGender}
    <div class="space-y-1">
      <InputBase
        type="text"
        label={$t("input.gender.label") ?? "Gender"}
        placeholder={$t("input.gender.placeholder") ?? "Your gender"}
        isLabel
        isIcon
        bind:value={gender}
      />
    </div>
  {/if}

  {#if isPassword}
    <div class="space-y-1">
      <InputPassword bind:value={password} />
    </div>
  {/if}

  {#if isConfirmPassword}
    <div class="space-y-1">
      <InputPasswordConfirm bind:value={confirmPassword} />
    </div>
  {/if}

  <ButtonLogin />
</form>
