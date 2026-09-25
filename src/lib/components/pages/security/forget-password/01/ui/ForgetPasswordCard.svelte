<script lang="ts" module>
  /**
   * @component ForgetPasswordCard
   * Password recovery card with tabs, back button, and light switch.
   *
   * @example svelte
   * <ForgetPasswordCard formType="EMAIL" onSubmit={(req) => console.log(req)} />
   */
</script>

<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import ButtonBack from "$lib/components/ui/button/ButtonBack.svelte";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
  import { t } from "$lib/i18n";
  import type { ForgetPasswordCardProps } from "../../types";
  import FormForgetPassword from "./FormForgetPassword.svelte";
  import TabUnderline from "$lib/components/ui/tabs/ui/tab-underline.svelte";

  let {
    formType,
    onSubmit,
    onButtonBack,
    onButtonOtp,
    children,
  }: ForgetPasswordCardProps = $props();
</script>

<div class="flex-1 flex flex-col justify-between h-screen bg-gradient-right">
  <nav
    class="flex {onButtonBack
      ? 'justify-between'
      : 'justify-end'} p-5 md:bg-transparent"
  >
    {#if onButtonBack}
      <div>
        <ButtonBack onclick={onButtonBack} />
      </div>
    {/if}
    <div class="flex gap-2">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div
    class="p-5 h-full border-t-2 bg-background md:border-none rounded-tl-[35px] rounded-tr-[35px]"
  >
    <TabUnderline
      items={[
        {
          item: {
            label: $t("label.forget-password"),
            value: "forget-password",
          },
        },
      ]}
    />

    {#if children}
      {@render children()}
    {:else}
      <FormForgetPassword variant={formType} {onSubmit} />
    {/if}

    {#if onButtonOtp}
      <button
        type="button"
        onclick={onButtonOtp}
        class="mt-4 w-full text-center text-sm font-medium text-primary hover:underline cursor-pointer"
      >
        {$t("label.request.new.otp")}
      </button>
    {/if}
  </div>
</div>
