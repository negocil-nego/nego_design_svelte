<script lang="ts">
  import InputPasswordConfirm from "$lib/components/ui/form/ui/input-password-confirm.svelte";
  import InputPassword from "$lib/components/ui/form/ui/input-password.svelte";
  import InputEmail from "$lib/components/ui/form/ui/input-email.svelte";
  import InputSelect from "$lib/components/ui/form/ui/input-select.svelte";
  import InputCalendar from "$lib/components/ui/form/ui/input-calendar.svelte";
  import InputBase from "$lib/components/ui/form/ui/input-base.svelte";
  import InputPhone from "$lib/components/ui/form/ui/input-phone.svelte";
  import ButtonLogin from "$lib/components/ui/button/ButtonLogin.svelte";
  import { t } from "$lib/i18n";
  import type { RegisterFormFields, RegisterRequestDto } from "./types";

  type Props = {
    fields?: RegisterFormFields;
    onSubmit?: (data: RegisterRequestDto) => void;
    inputLabelClass?: string;
    inputClass?: string;
    placeholderClass?: string;
    isLoading?: boolean;
  };

  let {
    fields = {},
    onSubmit,
    inputLabelClass,
    inputClass,
    placeholderClass,
    isLoading = false,
  }: Props = $props();

  let name = $state("");
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let birthday = $state("");
  let gender = $state("");
  let phone = $state("");

  const isName = $derived(fields.isName ?? false);
  const isEmail = $derived(fields.isEmail ?? true);
  const isPassword = $derived(fields.isPassword ?? true);
  const isConfirmPassword = $derived(fields.isConfirmPassword ?? true);
  const isBirthday = $derived(fields.isBirthday ?? false);
  const isGender = $derived(fields.isGender ?? false);
  const isPhone = $derived(fields.isPhone ?? false);

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
  {#if isName}
    <div class="space-y-1">
      <InputBase
        type="text"
        label={$t("input.name.label")}
        placeholder={$t("input.name.placeholder")}
        isLabel
        isIcon
        labelClass={inputLabelClass}
        {inputClass}
        bind:value={name}
      />
    </div>
  {/if}

  {#if isEmail}
    <div class="space-y-1">
      <InputEmail
        labelClass={inputLabelClass}
        {inputClass}
        bind:value={email}
      />
    </div>
  {/if}

  {#if isPhone}
    <div class="space-y-1">
      <InputPhone
        labelClass={inputLabelClass}
        {inputClass}
        bind:value={phone}
        isLabel
      />
    </div>
  {/if}

  {#if isBirthday}
    <div class="space-y-1">
      <InputCalendar
        label={$t("input.birthday.label")}
        placeholder={$t("input.birthday.placeholder")}
        labelClass={inputLabelClass}
        {placeholderClass}
        {inputClass}
        bind:value={birthday}
      />
    </div>
  {/if}

  {#if isGender}
    <div class="space-y-1">
      <InputSelect
        label={$t("input.gender.label")}
        placeholder={$t("input.gender.placeholder")}
        options={{ MALE: "Masculino", FEMALE: "Feminino" }}
        labelClass={inputLabelClass}
        {placeholderClass}
        {inputClass}
        bind:value={gender}
      />
    </div>
  {/if}

  {#if isPassword}
    <div class="space-y-1">
      <InputPassword
        labelClass={inputLabelClass}
        {inputClass}
        bind:value={password}
      />
    </div>
  {/if}

  {#if isConfirmPassword}
    <div class="space-y-1">
      <InputPasswordConfirm
        labelClass={inputLabelClass}
        {inputClass}
        bind:value={confirmPassword}
      />
    </div>
  {/if}

  <ButtonLogin type="submit" disabled={isLoading} />
</form>
