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
  import ButtonBack from "$lib/components/core/button/ButtonBack.svelte";
  import type { Snippet } from "svelte";
  import { LightSwitch } from "$lib/components/ui/light-switch";
  import { t } from "$lib/i18n";
  import type {
    ForgetPasswordRequestDto,
    ForgetPasswordVariant,
  } from "../../types";
  import FormForgetPassword from "./FormForgetPassword.svelte";
  import TabUnderline from "$lib/components/core/tabs/ui/tab-underline.svelte";

  type Props = {
    formType?: ForgetPasswordVariant;
    onSubmit?: (request: ForgetPasswordRequestDto) => void;
    children?: Snippet;
  };

  let { formType, onSubmit, children }: Props = $props();
</script>

<div class="flex-1 flex flex-col justify-between h-screen bg-gradient-right">
  <nav class="flex justify-between p-5 md:bg-transparent">
    <div>
      <ButtonBack />
    </div>
    <div class="flex gap-2">
      <LightSwitch />
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
  </div>
</div>
